import useMedia from "use-media"



const DesktopTemplate = () => {
    return (
        <div className="library-sort-filters-div-desktop">
            <span className="sort-title-span">Sort by</span>
            <ul>
                <li>
                    <button type="button" id="sb1" className="sort-button"></button>
                    <span>Author</span>
                </li>
                <li>
                    <button type="button" id="sb2" className="sort-button"></button>
                    <span>Titles</span>
                </li>
                <li>
                    <button type="button" id="sb3" className="sort-button"></button>
                    <span>Category</span>
                </li>
                <li>
                    <button type="button" id="sb4" className="sort-button"></button>
                    <span>Years</span>
                </li>
            </ul>
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>
            
        </div>
    )
}

export default function LibrarySortFilters () {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate />}
        </>
    )
}