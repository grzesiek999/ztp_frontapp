import useMedia from "use-media"



const DesktopTemplate = () => {
    return (
        <div>
            <span>Sort by</span>
            <div>
                <span></span>
                <span>Author</span>
            </div>
            <div>
                <span></span>
                <span>Titles</span>
            </div>
            <div>
                <span></span>
                <span>Category</span>
            </div>
            <div>
                <span></span>
                <span>Years</span>
            </div>
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