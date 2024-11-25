import useMedia from "use-media"

type HomePageNevArrivalsSegmentProps = {
    imgSrc: string,
    imgAlt: string,
    category: string,
    classname: string,
}


const DesktopTemplate = ({imgSrc, imgAlt, category, classname}: HomePageNevArrivalsSegmentProps) => {
    return (
        <div className="home-page-new-arrivals-each-segment-div-desktop">
            <img src={imgSrc} alt={imgAlt} className={classname}/>
            <span>{category}</span>
        </div>
    )
}

const MobileTemplate = ({imgSrc, imgAlt, category, classname}: HomePageNevArrivalsSegmentProps) => {
    return (
        <>
        </>
    )
}

export default function HomePageNevArrivalsSegment({imgSrc, imgAlt, category, classname}: HomePageNevArrivalsSegmentProps) {
    const isMobile = useMedia({maxWidth: 1170})
    
    return (
        <>
            {isMobile ? <MobileTemplate imgSrc={imgSrc} imgAlt={imgAlt} category={category} classname={classname} /> :
            <DesktopTemplate imgSrc={imgSrc} imgAlt={imgAlt} category={category} classname={classname} />}
        </>
    )
}