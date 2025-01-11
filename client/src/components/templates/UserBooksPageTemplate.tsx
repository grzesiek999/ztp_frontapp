import {useMedia} from "use-media";
import UserBooksRented from "../organism/UserProfil/UserBooksRented";
import UserBooksReserved from "../organism/UserProfil/UserBooksReserved";




const DesktopTemplate = () => {
    return (
        <div className={'user-books-page-template-div-desktop'}>
            <UserBooksRented />
            <UserBooksReserved />
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