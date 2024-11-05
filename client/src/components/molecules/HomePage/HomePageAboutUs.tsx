import {useMedia} from "use-media";
import HomePageAboutUsSegment from "./HomePageAboutUsSegment.tsx";
import {Link} from "react-router-dom";


const DesktopTemplate = () => {
    return (
        <div className="home-page-about-us-div">
            <span className="home-page-about-us-span">ABOUT US</span>
            <HomePageAboutUsSegment imgSrc={"/icons/user-icon.png"} imgAlt={"user-image-error"} nickname={"Admin1"} />
            <HomePageAboutUsSegment imgSrc={"/icons/user-icon.png"} imgAlt={"user-image-error"} nickname={"Admin2"} />
            <HomePageAboutUsSegment imgSrc={"/icons/user-icon.png"} imgAlt={"user-image-error"} nickname={"Librarian1"} />
            <HomePageAboutUsSegment imgSrc={"/icons/user-icon.png"} imgAlt={"user-image-error"} nickname={"Librarian1"} />
            <Link to={'/'} className="home-about-us-more-link">Click to see more</Link>
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <>
        </>
    )
}


export default function HomePageAboutUs () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}