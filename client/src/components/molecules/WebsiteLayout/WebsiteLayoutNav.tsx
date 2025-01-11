import {useMedia} from "use-media";
import {Link} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";
import {useContext, useEffect, useState} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";


type WebsiteLayoutNavProps = {
    isAdmin: boolean;
}


const DesktopTemplate = ({isAdmin}: WebsiteLayoutNavProps) => {

    return (
        <>
            {isAdmin ?
                <ul>
                    <li><Link to={ROUTER_PATH.HOME}>Home</Link></li>
                    <li><Link to={ROUTER_PATH.LIBRARY}>Library</Link></li>
                    <li><Link to={ROUTER_PATH.ADMIN_PERSONS}>Persons</Link></li>
                    <li><Link to={ROUTER_PATH.ADMIN_PUBLISHERS}>Publishers</Link></li>
                    <li><Link to={ROUTER_PATH.ADMIN_USERS}>Users</Link></li>
                    
                </ul>
                :
                <ul>
                    <li><Link to={ROUTER_PATH.HOME}>Home</Link></li>
                    <li><Link to={ROUTER_PATH.LIBRARY}>Library</Link></li>
                    <li><Link to={ROUTER_PATH.EVENTS}>Events</Link></li>
                    <li><Link to={ROUTER_PATH.ABOUT_US}>About Us</Link></li>
                </ul>
            }
        </>
    )
}

const MobileTemplate = () => {
    return (
        <>

        </>
    )
}

export default function WebsiteLayoutNav() {
    const isMobile = useMedia({maxWidth: 1170})

    const {user} = useContext(UserAuth);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(()=>{
        if(user?.role === 'Admin' || user?.role === 'Worker') { setIsAdmin(true); }
        else { setIsAdmin(false); }
    }, [user])

    return (
        <div className={isAdmin ? "website-layout-admin-nav-div" : "website-layout-user-nav-div"}>
            <nav>
                {isMobile ? <MobileTemplate /> : <DesktopTemplate isAdmin={isAdmin} />}
            </nav>
        </div>
    )
}
