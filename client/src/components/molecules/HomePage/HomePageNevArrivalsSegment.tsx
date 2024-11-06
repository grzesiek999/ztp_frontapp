import useMedia from "use-media"

type HomePageNevArrivalsSegmentProps = {
    imgSrc: string,
    imgAlt: string,
    category: string,
}


const DesktopTemplate = ({imgSrc, imgAlt, category}: HomePageNevArrivalsSegmentProps) => {
    return (
        <div>
            <img src={imgSrc} alt={imgAlt} />
            <span>{category}</span>
        </div>
    )
}

const MobileTemplate = ({imgSrc, imgAlt, category}: HomePageNevArrivalsSegmentProps) => {
    return (
        <>
        </>
    )
}

export default function HomePageNevArrivalsSegment({imgSrc, imgAlt, category}: HomePageNevArrivalsSegmentProps) {
    const isMobile = useMedia({maxWidth: 1170})
    
    return (
        <>
            {isMobile ? <MobileTemplate imgSrc={imgSrc} imgAlt={imgAlt} category={category} /> : 
            <DesktopTemplate imgSrc={imgSrc} imgAlt={imgAlt} category={category} />}
        </>
    )
}