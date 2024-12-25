import {useContext} from "react";
import {UserAuth} from "../context/UserContext.tsx";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTER_PATH} from "./RouterPath.tsx";


export default function AdminRoute() {
    const {user} = useContext(UserAuth)

    if (!sessionStorage.getItem('access_token')){
        return <Navigate to={ROUTER_PATH.USER_LOGIN}/>
    }

    if(user && user.role !== 'Admin') {
        return <Navigate to={ROUTER_PATH.NO_ACCESS} />;
    }
    return <Outlet />
}