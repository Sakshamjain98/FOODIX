import {CDN_URL} from "../utils/constants";
import { FiClock } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla
    } = resData?.info;
  
    return (
      <div
      className=" p-4 m-5 w-[200px] h-[550px]  bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 transition-all  "
      >
        <div>
        <img
           className="w-[250px] h-[150px] rounded-lg"
  
          src={ CDN_URL
            +
            cloudinaryImageId
          }
          alt="Biryani"
        />
        </div>

         <div className="res-card-content ">
        <h3  className="font-bold py-4 text-lg">{name}</h3>
        <hr />
        <em>{cuisines.join(', ')}</em>
        <div className="hello tracking-widest leading-10">
        <h4 className="avg-rating">
          <span className="icons inline-block m-1">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4 className="item-price tracking-wider">{costForTwo}</h4>
        <h4 className="time">
          <span className="icons inline-block m-1">
            <FiClock />
          </span>
          <span> {sla.deliveryTime} minutes</span>
        </h4>
        <h4>User: {loggedInUser}</h4>
        </div>
      </div>
      </div>
    );
  };

  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
            Promoted
          </label>
          <RestaurantCard {...props} />
        </div>
      );
    };
  };

  export default RestaurantCard;