import {useMedia} from "use-media";
import HomePageSlider from "../../molecules/HomePage/HomePageSlider.tsx";
import HomePageAboutUs from "../../molecules/HomePage/HomePageAboutUs.tsx";


const DesktopTemplate = () =>{
    return (
        <div className='home-page-top-container-div'>
            <HomePageSlider />
            <HomePageAboutUs />
        </div>
    )
}

const MobileTemplate = () =>{
    return (
        <div>
        </div>
    )
}

export default function HomePageTopContainer () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}