import { Link, Outlet } from "react-router-dom"
import useMedia from "use-media"
import {useContext} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";


const DesktopTemplate = () => {

    const {user} = useContext(UserAuth);

    return(
        <div className="user-profil-layout-nav-div-desktop">
            <nav>
                <span className="user-profil-nav-span">Navigation</span>
                <ul>
                    <li><Link to={`/admin/${user?.id}`}>&#128073; Admin Panel</Link></li>
                </ul>
            </nav>
        </div>
    )
}

const MobileTemplate = () => {
    return(
        <div>

        </div>
    )
}


export default function AdminProfilLayout () {
    const isMobile = useMedia({maxwidth: 1170})
    
    
    return (
        <div className={isMobile ? '' : 'user-profil-layout-desktop'}>
            <aside>
                {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
            </aside>
            <Outlet />
        </div>
    )
}