import {type ReactElement} from 'react'
import {RouterProvider, createBrowserRouter, Route, createRoutesFromElements} from 'react-router-dom'
import {ROUTER_PATH} from "./RouterPath.tsx"
import PublicRoute from "./PublicRoute.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import AdminRoute from "./AdminRoute.tsx";
import Home from "../pages/Home.tsx";


const ROUTER = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={null} >
            <Route path={ROUTER_PATH.HOME} element={<Home />} />
            <Route path={ROUTER_PATH.NO_ACCESS} element={null} />
            <Route element={<PublicRoute/>}>
                <Route path={ROUTER_PATH.USER_LOGIN} element={null} />
                <Route path={ROUTER_PATH.ADMIN_LOGIN} element={null} />
                <Route path={ROUTER_PATH.REGISTER} element={null} />
            </Route>
            <Route element={<ProtectedRoute/>}>
                <Route path={ROUTER_PATH.LIBRARY} element={null} />
                <Route path={ROUTER_PATH.RENT} element={null} />
                <Route path={ROUTER_PATH.RETURN} element={null} />
            </Route>
            <Route element={<AdminRoute/>}>
                <Route path={ROUTER_PATH.ADDBOOK} element={null} />
                <Route path={ROUTER_PATH.EDITBOOK} element={null} />
                <Route path={ROUTER_PATH.DELBOOK} element={null} />
            </Route>
        </Route>
    )
)

export default function Router(): ReactElement {
    return <RouterProvider router={ROUTER} />
}