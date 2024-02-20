import { useEffect, useState } from "react";
import { MENU_API, CDN_URL } from "../utils/constants";
import ShimmerUI from "./ShimmerMenu";
import { useParams } from 'react-router-dom';
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import RestaurantCategory from './RestaurantCategory';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const Restaurent =()=>{
  const { resId } = useParams();

  const dummy = 'Dummy Data';

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <ShimmerUI />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;

  const categories = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => c.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className="menu">
      <header className="menu-header sm:h-[40vh] bg-black text-[#f7f7f7] flex flex-col sm:flex-row justify-center gap-8 my-10 p-8">
        <div className="menu-header-left flex justify-center items-center mb-5 sm:mb-0">
          <img className="w-64 h-44 rounded-md bg-cover bg-center" src={CDN_URL + cloudinaryImageId} alt="Restaurant Info" />
        </div>
        <div className="menu-header-right flex flex-col justify-center items-center sm:items-start">
          <div className="top text-center sm:text-left">
            <h1 className="text-4xl font-normal">{name}</h1>
            <h3 className="mt-[5px] opacity-70 font-normal">{cuisines.join(', ')}</h3>
          </div>
          <div className="bottom mt-[20px] flex flex-col sm:flex-row items-center gap-5">
            <h4 className="avg-rating border-r-4 border-[#ccc] divide-solid pr-5 flex">
              <span className="icons" style={{ position: 'relative', top: '2px', marginRight: '3px' }}>
                <AiOutlineStar />
              </span>
              <span>{avgRating}</span>
            </h4>
            <h4 className="time border-r-4 border-[#ccc] divide-solid pr-5 flex">
              <span className="icons" style={{ position: 'relative', top: '2px', marginRight: '3px' }}>
                <FiClock />
              </span>
              <span>{deliveryTime} MINS</span>
            </h4>
            <h3 className="">{costForTwoMessage}</h3>
          </div>
        </div>
      </header>

      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={(index) => setShowIndex(index)}
          dummy={dummy}
          index={index}
          current={showIndex}
        />
      ))}
    </div>
  );
}

export default Restaurent;
