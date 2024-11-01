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
            Mobile
        </>
    )
}

export default function ALoginPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}