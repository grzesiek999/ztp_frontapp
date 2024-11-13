import useMedia from "use-media"
import LibrarySortFilters from "../../molecules/Library/LibrarySortFilters"



const DesktopTemplate = () => {
    return (
        <div>
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