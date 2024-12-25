import {useMedia} from "use-media";


const DesktopTemplate = () => {
    return (
        <div>
            ss
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    )
}

export default function UserLibraryBookPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}