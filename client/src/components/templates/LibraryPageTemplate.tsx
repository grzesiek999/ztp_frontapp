import {useMedia} from "use-media";
import LibrarySearchPanel from "../organism/Library/LibrarySearchPanel";
import LibraryResults from "../organism/Library/LibraryResults.tsx";
import {useEffect, useState} from "react";

interface Book {
    id: number;
    title: string,
    series: string,
    lang_id: number;
    author_id: number;
    name: string,
    surname: string,
}

type LibraryPageProps = {
    books: Book[];
}

const DesktopTemplate = ({books} : LibraryPageProps) => {
    return (
        <div className='library-page-template-div-desktop'>
            <span className='library-page-span'>Search for Books</span>
            <LibrarySearchPanel />
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
    const [enrichedBooks, setEnrichedBooks] = useState<Book[]>([]);


    const fechBooks = () => {
        const response = fetch("http://localhost:8000/book/get-all", {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        response.then(response => {
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        }).then(data => {
            setResults(data);
        }).catch(error => {
           console.error('Error:', error);
        });
    }

    const enrichBooksWithAuthors = async () => {
        const booksWithAuthors = await Promise.all(
            results.map(async (book) => {
                const response = await fetch(`http://localhost:8000/person/get-by-id?id=${book.author_id}`);
                const authorData = await response.json();
                return {
                    ...book,
                    name: authorData.name,
                    surname: authorData.surname,
                };
            })
        );
        setEnrichedBooks(booksWithAuthors);
    };

    useEffect(() => {
        fechBooks();
    }, []);

    useEffect(() => {
        if (results.length > 0) {
            enrichBooksWithAuthors();
        }
    }, [results]);

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate books={enrichedBooks} />}
        </main>
    )
}