import {useContext} from "react";
import {UserAuth} from "../context/UserContext.tsx";
import {Navigate, Outlet} from "react-router-dom";
import {ROUTER_PATH} from "./RouterPath.tsx";


export default function ProtectedRoute(){
    const {user} = useContext(UserAuth)

    if (!user){
        return <Navigate to={ROUTER_PATH.USER_LOGIN}/>
    }

    return <Outlet/>
}