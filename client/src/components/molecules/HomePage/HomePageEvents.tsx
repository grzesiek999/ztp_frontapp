import {useMedia} from "use-media";
import HomePageEventsSegment from "./HomePageEventsSegment.tsx";


const DesktopTemplate = () => {
    return (
        <div className="home-page-events-div-desktop">
            <span className="home-page-bot-container-title-span">Events</span>
            <div className="home-page-bot-container-events-div">
                <HomePageEventsSegment name={'Workshops'} describe={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <HomePageEventsSegment name={'Upping Readings'} describe={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <HomePageEventsSegment name={"Children's Storytime"} describe={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
                <HomePageEventsSegment name={'Autor Worksome'} describe={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} />
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

export default function HomePageEvents () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}