import {useMedia} from "use-media";
import {Outlet} from "react-router-dom";
import WebsiteLayoutNav from "../../molecules/WebsiteLayout/WebsiteLayoutNav.tsx";
import WebsiteLayoutButtons from "../../molecules/WebsiteLayout/WebsiteLayoutButtons.tsx";
import WebsiteLayoutAvatar from "../../molecules/WebsiteLayout/WebsiteLayoutAvatar.tsx";
import {useContext} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";


const DesktopTemplate = () => {

    const {user} = useContext(UserAuth)

    return (
        <div className={"website-layout-div-desktop"}>
            <WebsiteLayoutNav />
            {user ? <WebsiteLayoutAvatar /> : <WebsiteLayoutButtons /> }
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>
            <WebsiteLayoutNav />
            // Button
        </div>
    )
}

export default function WebsiteLayout () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <div className="website-layout-div">
            <header>
                {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
            </header>
            <Outlet />
        </div>
    )
}