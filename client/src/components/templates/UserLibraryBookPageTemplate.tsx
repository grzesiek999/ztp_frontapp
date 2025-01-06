import {useMedia} from "use-media";
import UserLibraryBookDetails from "../organism/Library/UserLibraryBookDetails.tsx";
import {UserLibraryBookOptions} from "../organism/Library/UserLibraryBookOptions.tsx";


const DesktopTemplate = () => {
    return (
        <div className={'user-library-book-page-template-desktop'}>
            <UserLibraryBookDetails />
            <UserLibraryBookOptions />
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