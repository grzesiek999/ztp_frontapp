import useMedia from "use-media"
import LibrarySortFilters from "../../molecules/Library/LibrarySortFilters"
import LibrarySearchBar from "../../molecules/Library/LibrarySearchBar"
import {useContext, useEffect, useState} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";
import {Link} from "react-router-dom";
import {ROUTER_PATH} from "../../../routing/RouterPath.tsx";



const DesktopTemplate = () => {

    const {user} = useContext(UserAuth);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    useEffect(() => {
        if(user?.role === 'Admin' || user?.role === 'Worker') {setIsAdmin(true);}
        else {setIsAdmin(false);}
    }, [user])

    return (
        <div className="library-search-panel-div-desktop">
            <LibrarySearchBar />
            <LibrarySortFilters />
            {isAdmin && <Link to={ROUTER_PATH.ADD_BOOK}>Add new book &#x2795;</Link>}
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>
            
        </div>
    )
}

export default function LibrarySearchPanel () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}