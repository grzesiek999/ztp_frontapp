import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import {ROUTER_PATH} from "./RouterPath.tsx"
import PublicRoute from "./PublicRoute.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import AdminRoute from "./AdminRoute.tsx";
import Home from "../pages/Home.tsx";
import NoAccess from "../pages/NoAccess.tsx";
import Login from "../pages/Login.tsx";
import Register from "../pages/Register.tsx";
import AddBook from "../pages/AddBook.tsx";
import WebsiteLayout from "../components/organism/WebsiteLayout/WebsiteLayout.tsx";
import Library from "../pages/Library.tsx";
import UserProfil from '../pages/UserProfile.tsx';
import UserProfilLayout from '../components/organism/UserProfil/UserProfilLayout.tsx';
import UserLibraryBook from "../pages/UserLibraryBook.tsx";
import CreatedAccount from "../pages/CreatedAccount.tsx";
import UserBooks from "../pages/UserBooks.tsx";
import UserBooksHistory from '../pages/UserBooksHistory.tsx';
import AdminLibraryBook from '../pages/AdminLibraryBook.tsx';


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<WebsiteLayout />} >
            <Route path={ROUTER_PATH.HOME} element={<Home />} />
            <Route path={ROUTER_PATH.NO_ACCESS} element={<NoAccess />} />
            <Route path={ROUTER_PATH.LIBRARY} element={<Library />} />
            <Route path={ROUTER_PATH.EVENTS} element={null} />
            <Route path={ROUTER_PATH.ABOUT_US} element={null} />

            <Route element={<PublicRoute/>}>
                <Route path={ROUTER_PATH.USER_LOGIN} element={<Login />} />
                <Route path={ROUTER_PATH.REGISTER} element={<Register />} />
                <Route path={ROUTER_PATH.ACCOUNT_CREATED} element={<CreatedAccount />} />
            </Route>


            <Route element={<ProtectedRoute/>} >
                <Route path={ROUTER_PATH.USER_PROFIL} element={<UserProfilLayout />} >
                    <Route path={ROUTER_PATH.USER_PROFIL} element={<UserProfil />} />
                    <Route path={ROUTER_PATH.USER_CHANGE_EMAIL} element={null} />
                    <Route path={ROUTER_PATH.USER_CHANGE_PASSWORD} element={null} />
                    <Route path={ROUTER_PATH.USER_CHANGE_PHONE} element={null} />
                    <Route path={ROUTER_PATH.USER_BOOKS} element={<UserBooks />} />
                    <Route path={ROUTER_PATH.USER_HISTORY} element={<UserBooksHistory />} />
                </Route>
                <Route path={ROUTER_PATH.USER_LIBRARY_BOOK} element={<UserLibraryBook />} />
            </Route>

            <Route element={<AdminRoute/>} >
                <Route path={ROUTER_PATH.ADMIN_PROFIL} element={null} >
                    <Route path={ROUTER_PATH.ADMIN_PROFIL} element={null} />
                    <Route path={ROUTER_PATH.ADMIN_CHANGE_EMAIL} element={null} />
                    <Route path={ROUTER_PATH.ADMIN_CHANGE_PASSWORD} element={null} />
                    <Route path={ROUTER_PATH.ADMIN_CHANGE_PHONE} element={null} />
                </Route>
                <Route path={ROUTER_PATH.ADD_BOOK} element={<AddBook />} />
                <Route path={ROUTER_PATH.ADMIN_LIBRARY_BOOK} element={<AdminLibraryBook />} />
            </Route>
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}