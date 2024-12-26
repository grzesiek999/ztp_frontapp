import useMedia from "use-media"
import LibrarySortFilters from "../../molecules/Library/LibrarySortFilters"
import LibrarySearchBar from "../../molecules/Library/LibrarySearchBar"

interface Book {
    id: number;
    title: string,
    name: string,
    surname: string,
    language: string,
}

type LibrarySearchPanelProps = {
    setBooks: (books: Book[]) => void;
}

const DesktopTemplate = ({setBooks}: LibrarySearchPanelProps) => {
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

export default function LibrarySearchPanel ({setBooks}: LibrarySearchPanelProps) {
    const isMobile = useMedia({maxWidth: 1170})

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate setBooks={setBooks} />}
        </>
    )
}