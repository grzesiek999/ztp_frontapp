import {useMedia} from "use-media";
import LibrarySearchPanel from "../organism/Library/LibrarySearchPanel";
import LibraryResults from "../organism/Library/LibraryResults.tsx";
import {useContext, useEffect, useState} from "react";
import { UserAuth } from "../../context/UserContext.tsx";
import { Link } from "react-router-dom";
import { ROUTER_PATH } from "../../routing/RouterPath.tsx";

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
    isAdmin: boolean;
}

const DesktopTemplate = ({books, isAdmin} : LibraryPageProps) => {
    return (
        <div className='library-page-template-div-desktop'>
            <span className='library-page-span'>Search for Books</span>
            <LibrarySearchPanel />
            <LibraryResults books={books} />
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

export default function LibraryPageTemplate() {
    const isMobile = useMedia({maxWidth: 1170})
    const [results, setResults] = useState<Book[]>([]);
    const [enrichedBooks, setEnrichedBooks] = useState<Book[]>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const {user} = useContext(UserAuth);


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

    useEffect(() => {
        if(user?.role === 'Admin' || user?.role === 'Worker') {setIsAdmin(true);}
        else {setIsAdmin(false);}
    }, [user])

    return (
        <main>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate books={enrichedBooks} isAdmin={isAdmin} />}
        </main>
    )
}