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

const Grocery = lazy(() => import('./component/Grocery'));



const AppLayout = () => {
  const [userName, setUserName] = useState();
  
  useEffect(() => {
    const data = {
      name: 'Saksham Jain',
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app block mx-0 my-auto font-serif bg-[#f7f7f7]">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  </UserContext.Provider>
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
      }
    ],
    errorElement:<Error/>
  },


])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
