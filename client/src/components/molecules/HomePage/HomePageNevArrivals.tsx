import useMedia from "use-media"
import HomePageNevArrivalsSegment from "./HomePageNevArrivalsSegment"

const DesktopTemplate = () => {
    return (
        <div className="home-page-new-arrivals-div-desktop">
            <span className="home-page-bot-container-title-span">New Arrivals</span>
            <div className="home-page-new-arrivals-segments-div-desktop">
                <HomePageNevArrivalsSegment imgSrc="/images/home-page-nevarrivals/1.png" imgAlt="image 1 error" category="Crime and thriller" classname="new-arrivals-big-image"/>
                <HomePageNevArrivalsSegment imgSrc="/images/home-page-nevarrivals/2.png" imgAlt="image 2 error" category="Historical" classname="new-arrivals-small-image"/>
                <HomePageNevArrivalsSegment imgSrc="/images/home-page-nevarrivals/3.png" imgAlt="image 3 error" category="Fantastic" classname="new-arrivals-big-image"/>
                <HomePageNevArrivalsSegment imgSrc="/images/home-page-nevarrivals/5.png" imgAlt="image 5 error" category="Romance" classname="new-arrivals-big-image"/>
                <HomePageNevArrivalsSegment imgSrc="/images/home-page-nevarrivals/4.png" imgAlt="image 4 error" category="Biography" classname="new-arrivals-small-image"/>
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