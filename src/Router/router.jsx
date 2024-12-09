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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
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
      children:[
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
          path: 'manage-items/update-item/:id',
          element:<AdminRoute><UpdateItem/></AdminRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path: 'user-home',
          element:<div>user home</div>
        },
        {
          path: 'cart',
          element:<MyCart/>
        },
        {
          path: 'reservation',
          element:<div>my reservation</div>
        },
        {
          path: 'payment-history',
          element:<PaymentHistory/>
        },
        {
          path: 'add-review',
          element:<div>add-review</div>
        },
        {
          path: 'booking',
          element:<div>booking</div>
        },
        {
          path: 'payment',
          element:<Payment/>
        },
        
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    },

  ]);


  export default router;