import { Navigate, useLocation } from "react-router";

import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import Loadd from "../AllComponents/Loadd";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <Loadd></Loadd>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" ></Navigate>
};

export default PrivateRoute;