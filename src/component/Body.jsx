import React, { useEffect, useState, useContext } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurentCard';
import Shimmer from './Shimmer';
import { SWIGGY_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const response = await fetch(SWIGGY_URL);
      if (!response.ok) {
        throw new Error(response.status);
      } else {
        const json = await response.json();
        const resData = checkJsonData(json);
        setListOfRestaurants(resData);
        setFilteredRestaurant(resData);
      }
    } catch (error) {
      console.error(error);
    }
  }

  const checkJsonData = (jsonData) => {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      let checkData = jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      if (checkData !== undefined) {
        return checkData;
      }
    }
    return [];
  };

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  return  listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      {!onlineStatus && (
        <h1 style={{ textAlign: 'center', marginTop: '100px' }}>
          Looks like you're offline! Please check your internet connection
        </h1>
      )}
      <div className="filter flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="search mx-4 my-2 md:my-4 w-full md:w-[50%] lg:w-[40%] mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search a restaurant..."
            className="border w-full mt-2 h-8 md:h-10 p-2 md:p-3 shadow-md rounded-md border-gray-300 focus:outline-none focus:border-green-500"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="mt-2 md:mt-1 ml-0 md:ml-0 px-3 md:px-4 py-1 md:py-2 w-full bg-green-500 text-white cursor-pointer rounded-md shadow-md hover:bg-[#09a909] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn mx-4 my-2 md:my-4">
          <button
            className="px-3 md:px-4 py-1 md:py-2 w-full bg-green-500 text-white cursor-pointer rounded-md shadow-md hover:bg-[#09a909] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.4);
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search mx-0 my-2 md:my-4 w-full md:w-[50%] lg:w-[40%]">
          <label htmlFor="name" className="bg-green-400 w-full h-10 md:h-10 rounded-md p-2">
            User Name:
          </label>
          <input
            id="name"
            className="border w-[90%] mt-2   h-8 md:h-10 p-2 md:p-3 shadow-md rounded-md border-gray-300 focus:outline-none focus:border-green-500 ml-0 md:ml-0"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={'/restaurent/' + restaurant.info.id}
            style={{ textDecoration: 'none', color: '#000' }}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
