import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return (
        <div className={'created-account-template-div-desktop'}>
            <span>Account created successfully !</span>
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    )
}

export default function CreatedAccountTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}