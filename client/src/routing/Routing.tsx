import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import {ROUTER_PATH} from "./RouterPath.tsx"
import PublicRoute from "./PublicRoute.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import AdminRoute from "./AdminRoute.tsx";
import Home from "../pages/Home.tsx";
import NoAccess from "../pages/NoAccess.tsx";
import Login from "../pages/Login.tsx";
import ALogin from "../pages/ALogin.tsx";
import Register from "../pages/Register.tsx";
import AddBook from "../pages/AddBook.tsx";
import WebsiteLayout from "../components/organism/WebsiteLayout/WebsiteLayout.tsx";
import Library from "../pages/Library.tsx";
import UserProfil from '../pages/UserProfile.tsx';
import UserProfilLayout from '../components/organism/UserProfil/UserProfilLayout.tsx';


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebsiteLayout />} >
            <Route path={ROUTER_PATH.HOME} element={<Home />} />
            <Route path={ROUTER_PATH.NO_ACCESS} element={<NoAccess />} />
            <Route path={ROUTER_PATH.LIBRARY} element={<Library />} />

            <Route element={<PublicRoute/>}>
                <Route path={ROUTER_PATH.USER_LOGIN} element={<Login />} />
                <Route path={ROUTER_PATH.ADMIN_LOGIN} element={<ALogin />} />
                <Route path={ROUTER_PATH.REGISTER} element={<Register />} />
            </Route>
            
            <Route element={<ProtectedRoute/>} >
                <Route path={ROUTER_PATH.USER_LIBRARY_BOOK} element={null} />
                <Route path={ROUTER_PATH.USER_PROFIL} element={<UserProfilLayout />} >
                    <Route path={ROUTER_PATH.USER_PROFIL} element={<UserProfil />} />
                    <Route path={ROUTER_PATH.USER_BOOKS} element={null} />
                    <Route path={ROUTER_PATH.USER_HISTORY} element={null} />
                </Route>
            </Route>

            <Route element={<AdminRoute/>} >
                <Route path={ROUTER_PATH.ADD_BOOK} element={<AddBook />} />
            </Route>
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}