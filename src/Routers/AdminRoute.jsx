import { Navigate, useLocation } from "react-router-dom";

import { authContext } from "../Provider/AuthProvider";
import UseAdmin from "../CustomHooks/UseAdmin";
import { useContext } from "react";
import Loadd from "../AllComponents/Loadd";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(authContext) 
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();

    if(loading || isAdminLoading){
        return <Loadd></Loadd>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login"  ></Navigate>
};

export default AdminRoute;