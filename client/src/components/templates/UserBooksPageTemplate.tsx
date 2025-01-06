import {useMedia} from "use-media";




const DesktopTemplate = () => {
    return (
        <div>

        </div>
    );
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    );
}

export default function UserBooksPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            { isMobile ? <MobileTemplate /> : <DesktopTemplate /> }
        </>
    );
}