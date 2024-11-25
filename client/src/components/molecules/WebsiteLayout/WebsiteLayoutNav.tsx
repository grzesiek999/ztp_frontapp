import {useMedia} from "use-media";
import {Link} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";


const DesktopTemplate = () => {
    return (
        <ul>
            <li><Link to={ROUTER_PATH.HOME}>Home</Link></li>
            <li><Link to={ROUTER_PATH.LIBRARY}>Library</Link></li>
            <li><Link to={ROUTER_PATH.EVENTS}>Events</Link></li>
            <li><Link to={ROUTER_PATH.ABOUT_US}>About Us</Link></li>
        </ul>
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

    return (
        <div className={"website-layout-nav-div"}>
            <nav>
                {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
            </nav>
        </div>
    )
}