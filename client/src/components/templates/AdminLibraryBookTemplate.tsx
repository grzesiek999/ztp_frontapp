import {useMedia} from "use-media";
import UserLibraryBookDetails from "../organism/Library/UserLibraryBookDetails";
import { AdminLibraryBookOptions } from "../organism/Library/AdminLibraryBookOptions";



const DesktopTemplate = () => {

    return (
        <div className='admin-library-book-template-desktop'>
            <UserLibraryBookDetails />
            <AdminLibraryBookOptions />
        </div>
    )
}


const MobileTemplate = () => {

    return (
        <div>

        </div>
    )
}

export default function AdminLibraryBookTemplate () {
    const isMobile = useMedia({maxWidth: 1170})
    
    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}