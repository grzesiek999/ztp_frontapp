import { Link } from "react-router-dom";
import {useMedia} from "use-media";

type HomePageAboutUsSegmentProps = {
    imgSrc: string,
    imgAlt: string,
    nickname: string,
}

const DesktopTemplate = ({imgSrc, imgAlt, nickname}: HomePageAboutUsSegmentProps) => {
    return (
        <div className="home-page-about-us-segment-div-desktop">
            <img src={imgSrc} alt={imgAlt} />
            <span>{nickname}</span>
            <Link to={"/"}>View details</Link>
        </div>
    )
}

const MobileTemplate = ({imgSrc, imgAlt, nickname}: HomePageAboutUsSegmentProps) => {
    return (
        <>
        </>
    )
}


export default function HomePageAboutUsSegment({imgSrc, imgAlt, nickname}: HomePageAboutUsSegmentProps) {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate imgSrc={imgSrc} imgAlt={imgAlt} nickname={nickname} />:
                <DesktopTemplate imgSrc={imgSrc} imgAlt={imgAlt} nickname={nickname} />}
        </>
    )
}