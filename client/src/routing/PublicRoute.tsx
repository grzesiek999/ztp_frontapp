import {Navigate, Outlet} from "react-router-dom";
import {ROUTER_PATH} from "./RouterPath.tsx";


export default function PublicRoute() {

    if (sessionStorage.getItem('access_token')){
        return <Navigate to={ROUTER_PATH.HOME}/>
    }

    return <Outlet/>
}