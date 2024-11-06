import {useMedia} from "use-media";
import HomePageNewArrivals from "../../molecules/HomePage/HomePageNevArrivals";
import HomePageEvents from "../../molecules/HomePage/HomePageEvents.tsx";


const DesktopTemplate = () => {
    return (
        <div className="home-page-bot-container-div-desktop">
            <HomePageNewArrivals />
            <HomePageEvents />
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