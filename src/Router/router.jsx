import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyCart from "../pages/Dashboard/MyCart";
import Users from "../pages/Dashboard/Users";
import AddItems from "../pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/menu",
          element: <Menu/>,
        },
        {
          path: "/shop",
          element: <Shop/>,
        },
        
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path: 'admin-home',
          element:<AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path: 'users',
          element:<AdminRoute><Users/></AdminRoute>
        },
        {
          path: 'add-items',
          element:<AdminRoute><AddItems/></AdminRoute>
        },
        {
          path: 'manage-items',
          element:<AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path: 'manage-booking',
          element:<AdminRoute><div><h2 className="text-2xl font-bold">Manage Booking under development</h2></div></AdminRoute>
        },
        {
          path: 'manage-items/update-item/:id',
          element:<AdminRoute><UpdateItem/></AdminRoute>,
          loader: ({params})=> fetch(`https://bistro-boss-restaurant-server-hazel.vercel.app/menu/${params.id}`)
        },
        {
          path: 'user-home',
          element:<UserHome/>
        },
        {
          path: 'cart',
          element:<MyCart/>
        },
        {
          path: 'reservation',
          element:<div><h2 className="text-2xl font-bold">My reservation under development</h2></div>
        },
        {
          path: 'payment-history',
          element:<PaymentHistory/>
        },
        {
          path: 'add-review',
          element:<div><h2 className="text-2xl font-bold">Add Review under development</h2></div>
        },
        {
          path: 'booking',
          element:<div><h2 className="text-2xl font-bold">My Booking under development</h2></div>
        },
        {
          path: 'payment',
          element:<Payment/>
        },
        
      ]
    },
    {
      path:'/login',
      element:<Login/>,
      errorElement:<ErrorPage></ErrorPage>
    },
    {
      path:'/register',
      element:<Register/>,
      errorElement:<ErrorPage></ErrorPage>
    },

  ]);


  export default router;