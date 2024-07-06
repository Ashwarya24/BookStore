import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 
import App from "../App"
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../components/SingleBook"
import DashboardLayout from "../Dashboard/DashboardLayout";
import Dashboard from "../Dashboard/Dashboard";
import UploadBook from "../Dashboard/UploadBook";
import ManageBooks from "../Dashboard/ManageBooks";
import EditBooks from "../Dashboard/EditBooks";
import Signup from "../components/Signup";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
          path:'/book/:id',
          element:<SingleBook/>,
          loader:({params})=>fetch(`http://localhost:5002/book/${params.id}`)
        },

        
      ]
    },
    {
       path:"/admin/dashboard",
       element:<DashboardLayout/>,
       children:[
        {
          path:"/admin/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>
        },
        {
          path:"/admin/dashboard/edit-books/:id",
          element:<EditBooks/>,
          loader:({params})=>fetch(`http://localhost:5002/book/${params.id}`)
        },
        
       ]
    },{
      
        path:"sign-up",
        element:<Signup/>
      
    }
  ]);
  export default router;