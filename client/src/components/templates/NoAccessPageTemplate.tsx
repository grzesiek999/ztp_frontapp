import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return (
        <>
            desktop
        </>
    )
}

const MobileTemplate = () => {
    return (
        <>
            mobile
        </>
    )
}

export default function NoAccessPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}