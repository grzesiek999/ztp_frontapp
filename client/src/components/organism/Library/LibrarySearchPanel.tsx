import useMedia from "use-media"
import LibrarySortFilters from "../../molecules/Library/LibrarySortFilters"
import LibrarySearchBar from "../../molecules/Library/LibrarySearchBar"



const DesktopTemplate = () => {
    return (
        <div className="library-search-panel-div-desktop">
            <LibrarySearchBar />
            <LibrarySortFilters />
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