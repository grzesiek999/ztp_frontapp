import {useMedia} from "use-media";
import LibrarySearchPanel from "../organism/Library/LibrarySearchPanel";
import LibraryResults from "../organism/Library/LibraryResults.tsx";
import {useState} from "react";

interface Book {
    id: number;
    title: string,
    name: string,
    surname: string,
    language: string,
}

type LibraryPageProps = {
    books: Book[];
    setBooks: (books: Book[]) => void;
}

const DesktopTemplate = ({books, setBooks} : LibraryPageProps) => {
    return (
        <div className='library-page-template-div-desktop'>
            <span className='library-page-span'>Search for Books</span>
            <LibrarySearchPanel setBooks={setBooks} />
            <LibraryResults books={books} />
        </div>
    )
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    )
}

export default function LibraryPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})
    const [results, setResults] = useState<Book[]>([]);

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate books={results} setBooks={setResults} />}
        </main>
    )
}