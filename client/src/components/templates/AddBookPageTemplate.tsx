import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return(
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

export default function AddBookPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}