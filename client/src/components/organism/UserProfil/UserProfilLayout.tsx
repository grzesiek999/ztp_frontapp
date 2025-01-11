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
                    <li><Link to={`/user/${user?.id}`}>&#128073; User Panel</Link></li>
                    <li><Link to={`/user/${user?.id}/books`}>&#128073; Books</Link></li>
                    <li><Link to={`/user/${user?.id}/history`}>&#128073; History</Link></li>
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


export default function UserProfilLayout () {
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