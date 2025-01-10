import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import MenuCategory from "../Pages/MenuCategory";
import Orders from "../Pages/Orders";
import Login from "../authentication/Login";
import SignUp from "../authentication/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../DashComponent/DashPages/Cart";
import AllUsers from "../DashComponent/DashPages/AllUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import AddItem from "../DashComponent/DashPages/AddItem";
import ManageItem from "../DashComponent/DashPages/ManageItem";
import UpdateMenu from "../DashComponent/DashPages/UpdateMenu";
import PaymentPage from "../DashComponent/UserPages/PaymentPage";
import PaymentHistroy from "../DashComponent/UserPages/PaymentHistroy";

const router = createBrowserRouter([
{
    path:'/',
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/our-menu',
            element: <MenuCategory></MenuCategory>
        },
        {
            path:'/order/:category',
            element: <Orders></Orders>
        }
    ]
},
{
    path:'/login',
    element: <Login></Login>
},
{
    path:'/signUp',
    element: <SignUp></SignUp>
},
{
    path:'/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
            path:'/dashboard/userHome',
            element: <h2>userhome</h2>
        },
        {
            path:'/dashboard/reservation',
            element: <h2>userhome</h2>
        },
        {
            path:'/dashboard/cart',
            element: <PrivateRoute><Cart></Cart></PrivateRoute>
        },
        {
            path:'/dashboard/paymentHistory',
            element:<PaymentHistroy></PaymentHistroy>
        },
        {
            path:'/dashboard/review',
            element: <h2>userhome</h2>
        },
        // {
        //     path:'/order/salad',
        //     element: <h2>userhome</h2>
        // },
        {
            path:'/dashboard/bookings',
            element: <h2>userhome</h2>
        },
        {
            path:'/dashboard/cart/payment',
            element:<PaymentPage></PaymentPage>
        },
       // admin route
       {
        path:'/dashboard/users',
        element: <PrivateRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivateRoute>
       },
       {
        path:'/dashboard/addItems',
        element: <PrivateRoute><AdminRoute><AddItem></AddItem></AdminRoute></PrivateRoute>
       },
       {
        path:'/dashboard/manageItems',
        element:<PrivateRoute><AdminRoute> <ManageItem></ManageItem>
       </AdminRoute></PrivateRoute>
       },
       {
        path:'/dashboard/updateItem/:id',
        loader:({params})=> fetch(`${import.meta.env.VITE_SERVER_URL}/menus/${params.id}`),
        element:<AdminRoute><UpdateMenu></UpdateMenu></AdminRoute>
       }
    ]
}
])

export default router;