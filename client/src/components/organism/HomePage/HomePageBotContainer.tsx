import {useMedia} from "use-media";
import HomePageNewArrivals from "../../molecules/HomePage/HomePageNevArrivals";


const DesktopTemplate = () => {
    return (
        <div className="home-page-bot-container-div-desktop">
            <HomePageNewArrivals />
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>
        </div>
    )
}

export default function HomePageBotContainer() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}