import {useMedia} from "use-media";
import HomePageAboutUsSegment from "./HomePageAboutUsSegment.tsx";
import {Link} from "react-router-dom";


const DektopTemplate = () => {
    return (
        <div className="home-page-about-us-div">
            <span className="home-page-about-us-span">ABOUT US</span>
            <HomePageAboutUsSegment imgSrc={""} imgAlt={""} nickname={"Admin1"} role={"Admin"}/>
            <HomePageAboutUsSegment imgSrc={""} imgAlt={""} nickname={"Admin2"} role={"Admin"}/>
            <HomePageAboutUsSegment imgSrc={""} imgAlt={""} nickname={"Librarian1"} role={"Librarian"}/>
            <HomePageAboutUsSegment imgSrc={""} imgAlt={""} nickname={"Librarian1"} role={"librarian"}/>
            <Link to={'/'}>Click to see more</Link>
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
            {isMobile ? <MobileTemplate /> : <DektopTemplate />}
        </>
    )
}