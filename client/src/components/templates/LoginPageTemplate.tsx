import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return(
        <>
            desktoplogin
        </>
    )
}

const MobileTemplate = () => {
    return(
        <>
            mobile
        </>
    )
}

export default function LoginPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}