import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import {Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import Image from "../assets/logo.jpg"
import { useSelector } from 'react-redux';

const Header = () => {
  //   let btnName = 'Login';

  const [btnNameReact, setBtnNameReact] = useState('Login');
  console.log('header render');

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store)=> store.cart.items );
  return (
    <div className="flex justify-between bg-white shadow-lg shadow-gray-500 top-0 font-[500] sticky z-10 flex-wrap py-[5px] px-[35px] h-24" >
      <div className="logo-container cursor-pointer">
        <img src={Image} alt="App Logo" className="w-[150px] rounded-md mx-6 mt-1 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <ul className='flex m-4 p-4 cursor-pointer'>
        <li className='px-2 hover:text-orange-400'>Online Status: {onlineStatus ? '✅' : '⛔'}</li>
          <li className='px-2 hover:text-orange-400'><Link to="/">Home</Link></li>
          <li className='px-2 hover:text-orange-400'><Link to="/About" >About Us</Link></li>
          <li className='px-2 hover:text-orange-400'><Link to="/Contact">Contact Us</Link></li>
          <li className='px-2 hover:text-orange-400'>
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li className='px-2'><Link to="/cart">Cart - ({cartItems.length} Items)</Link></li>
          <button
            className='bg-orange-400 rounded-[5px] py-2 px-4 ml-2 text-lg mt-[-13px] cursor-pointer' 
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">
            <Link className="links">{loggedInUser}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
