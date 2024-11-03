import {useMedia} from "use-media";

type HomePageAboutUsSegmentProps = {
    imgSrc: string,
    imgAlt: string,
    nickname: string,
    role: string,
}

const DesktopTemplate = ({imgSrc, imgAlt, nickname, role}: HomePageAboutUsSegmentProps) => {
    return (
        <div>
            <img src={imgSrc} alt={imgAlt} />
            <span>{nickname}</span>
            <span>{role}</span>
        </div>
    )
}

const MobileTemplate = ({imgSrc, imgAlt, nickname, role}: HomePageAboutUsSegmentProps) => {
    return (
        <>
        </>
    )
}


export default function HomePageAboutUsSegment({imgSrc, imgAlt, nickname, role}: HomePageAboutUsSegmentProps) {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate imgSrc={imgSrc} imgAlt={imgAlt} nickname={nickname} role={role} />:
                <DesktopTemplate imgSrc={imgSrc} imgAlt={imgAlt} nickname={nickname} role={role} />}
        </>
    )
}