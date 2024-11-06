import useMedia from "use-media"
import HomePageNevArrivalsSegment from "./HomePageNevArrivalsSegment"

const DesktopTemplate = () => {
    return (
        <div className="home-page-new-arrivals-div-desktop">
            <span className="home-page-bot-container-title-span">New Arrivals</span>
            <div className="home-page-new-arrivals-segments-div-desktop">
                <HomePageNevArrivalsSegment imgSrc="" imgAlt="" category="Crime and thriller" />
                <HomePageNevArrivalsSegment imgSrc="" imgAlt="" category="Historical" />
                <HomePageNevArrivalsSegment imgSrc="" imgAlt="" category="Fantastic" />
                <HomePageNevArrivalsSegment imgSrc="" imgAlt="" category="Romance" />
                <HomePageNevArrivalsSegment imgSrc="" imgAlt="" category="Biography and reportage" />
            </div>
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <>
        </>
    )
}


export default function HomePageNewArrivals () {
    const isMobile = useMedia({maxWidth: 1170})
    
    return (
        <>
        {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}