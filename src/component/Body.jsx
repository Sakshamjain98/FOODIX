import { useEffect, useState, useContext } from 'react';
import RestaurantCard , { withPromotedLabel }from './RestaurentCard';
import Shimmer from './Shimmer';
import { SWIGGY_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState('');

  console.log('Body rendered');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {

    
    try {
      const response = await fetch(SWIGGY_URL);
      console.log(response)
      if (!response.ok) {
        const err = response.status;
        throw new Error(err);
      } else {
        const json = await response.json();
        console.log(json);
        async function checkJsonData(jsonData) {
          for (let i = 0; i < jsonData?.data?.cards.length; i++) {
  
            let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
            if (checkData !== undefined) {
              return checkData;
            }
          }
        }
        const resData = await checkJsonData(json);
  
        setListOfRestaurants(resData);
        setFilteredRestaurant(resData);
      }
    } catch (error) {
      console.error(error); 
    }
    }

    const onlineStatus = useOnlineStatus();

    
  if (onlineStatus === false)
  return (
    <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
      Looks like you're offline! Please check your internet connection
    </h1>
  );
  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log(listOfRestaurants);
  return listOfRestaurants.length === 0 ? (
   <Shimmer/>
    
  ) : (
    <div className="body">
    
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            placeholder="Search a restaurant you want..."
            className="border border-solid  w-[300px] h-10 p-[14px_15px_14px_20px] shadow-xl shadow-[rgba(0, 0, 0, 0.08)] rounded-tl-[5px] rounded-bl-[5px]  border-[#aabcca] "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className='px-4 py-2 bg-green-500 text-white cursor-pointer rounded-tr-[5px] rounded-br-[5px] ml-[0px] shadow-xl shadow-[rgba(0, 0, 0, 0.08) hover:bg-[#09a909]'
            onClick={() => {
          
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div   className="filter-btn m-4 p-4 flex items-center">
        <button
        className='px-4 py-2 bg-green-500 text-white cursor-pointer rounded-tr-[5px] rounded-br-[5px] ml-[0px] shadow-xl shadow-[rgba(0, 0, 0, 0.08) rounded-lg hover:bg-[#09a909]'
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredRestaurant(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label htmlFor="name" className='bg-green-400 h-10 rounded-l-lg p-2 '>User Name: </label>
          <input
            id="name"
            className="border border-solid  w-[300px] h-10 p-[14px_15px_14px_20px] shadow-xl shadow-[rgba(0, 0, 0, 0.08)] rounded-tl-[5px] rounded-bl-[5px]  border-[#aabcca] "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">

        {filteredRestaurant.map((restaurant) => (
          <Link style={{
            textDecoration: 'none',
            color: '#000',
          }} 
          key={restaurant.info.id}
          to={"/restaurent/"+restaurant.info.id}> {restaurant.info.avgRating>4.3 ? (
            <RestaurantCardPromoted resData={restaurant} />
          ) : (
            <RestaurantCard resData={restaurant} />
          )}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
