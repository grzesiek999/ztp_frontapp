import {useMedia} from "use-media";
import UserBooksHistory from "../organism/UserProfil/UserBooksHistory";





const DesktopTemplate = () => {
    return (
        <div className={'user-books-history-page-template-desktop'}>
            <UserBooksHistory />
        </div>
    );
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    );
}

export default function UserBooksHistoryPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            { isMobile ? <MobileTemplate /> : <DesktopTemplate /> }
        </>
    );
}