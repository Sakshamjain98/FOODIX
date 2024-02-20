import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./component/Header"
import Body from "./component/Body"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./component/About"
import Contact from "./component/Contact"
import Error from "./component/Error"
import Footer from "./component/Footer"
import  Restaurent from "./component/ReastaurentMenu.jsx"
import UserContext from "./utils/UserContext.js"
import { useState,useEffect } from 'react';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './component/Cart.jsx';
const Grocery = lazy(() => import('./component/Grocery'));
import Head from "./component/Headerrr.jsx";




const AppLayout = () => {
  const [userName, setUserName] = useState();
  
  useEffect(() => {
    const data = {
      name: 'Saksham Jain',
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app block mx-0 my-auto font-serif bg-[#f7f7f7]">
      <Head />
      <Outlet />
      <Footer/>
    </div>
  </UserContext.Provider>
  </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/> 
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path: '/grocery',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path:"/restaurent/:resId",
        element:< Restaurent/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement:<Error/>
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
