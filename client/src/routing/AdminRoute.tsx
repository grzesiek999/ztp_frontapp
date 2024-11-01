import {useContext} from "react";
import {UserAuth} from "../context/UserContext.tsx";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTER_PATH} from "./RouterPath.tsx";


export default function AdminRoute() {
    const {user} = useContext(UserAuth)

    if(user && !user.is_admin) {
        return <Navigate to={ROUTER_PATH.NO_ACCESS}/>
    }
    return <Outlet />
}