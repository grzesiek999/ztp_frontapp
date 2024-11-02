import {useMedia} from "use-media";
import {Outlet} from "react-router-dom";
import WebsiteLayoutNav from "../../molecules/WebsiteLayout/WebsiteLayoutNav.tsx";
import WebsiteLayoutButtons from "../../molecules/WebsiteLayout/WebsiteLayoutButtons.tsx";


const DesktopTemplate = () => {
    return (
        <div className={"website-layout-div-desktop"}>
            <WebsiteLayoutNav />
            <WebsiteLayoutButtons />
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