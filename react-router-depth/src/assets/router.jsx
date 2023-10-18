import { createBrowserRouter } from "react-router-dom";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Users from "../views/Users";
import NotFound from "../views/NotFound";
import DefaultLayout from "../components/DefaultLayout";
import GuestLayout from "../components/GuestLayout";


const router =  createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path:'/users',
                element:<Users/>
            }
        ]
    },
    {
        path:'/',
        element:<GuestLayout/>
    },
    {
        path:'/login',
        element:<Login/> 
    },
    {
        path:'/signup',
        element:<Signup/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
])




export default router;