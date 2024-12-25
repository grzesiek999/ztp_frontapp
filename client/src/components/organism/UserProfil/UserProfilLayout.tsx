import { Link, Outlet } from "react-router-dom"
import useMedia from "use-media"
import { ROUTER_PATH } from "../../../routing/RouterPath"


const DesktopTemplate = () => {
    return(
        <div className="user-profil-layout-nav-div-desktop">
            <nav>
                <span className="user-profil-nav-span">Navigation</span>
                <ul>
                    <li><Link to={ROUTER_PATH.USER_PROFIL}>&#128073; User Panel</Link></li>
                    <li><Link to={ROUTER_PATH.USER_BOOKS}>&#128073; Books</Link></li>
                    <li><Link to={ROUTER_PATH.USER_HISTORY}>&#128073; History</Link></li>
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