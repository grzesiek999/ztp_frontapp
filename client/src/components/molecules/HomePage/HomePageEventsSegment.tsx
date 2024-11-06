import {useMedia} from "use-media";
import {Link} from "react-router-dom";

type HomePageEventsSegmentProps = {
    name: string;
    describe: string;
}


const DesktopTemplate = ({name, describe, }: HomePageEventsSegmentProps) => {
    return (
        <div className='home-page-event-segment-div-desktop'>
            <span>{name}</span>
            <p>{describe}</p>
            <Link to={'/'}>View more</Link>
        </div>
    )
}

const MobileTemplate = ({name, describe, }: HomePageEventsSegmentProps) => {
    return (
        <div>
        </div>
    )
}

export default function HomePageEventsSegment({name, describe, }: HomePageEventsSegmentProps) {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate name={name} describe={describe} /> : <DesktopTemplate name={name} describe={describe} />}
        </>
    )
}