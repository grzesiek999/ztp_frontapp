import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return (
        <div className={'created-account-template-div-desktop'}>
            <span>No access !</span>
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <>
            No Access
        </>
    )
}

export default function NoAccessPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </main>
    )
}