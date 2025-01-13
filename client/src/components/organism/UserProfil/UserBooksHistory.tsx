import {useMedia} from "use-media";
import {useNavigate} from "react-router-dom";
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

type UserBooksHistoryProps = {
    books: Book[];
}

const DesktopTemplate = ({books} : UserBooksHistoryProps) => {
    const navigate = useNavigate();

    return (
        <div className="users-book-in-profile-div-dektop-template">
            <span className="rented-books-title-span">Rentals books history:</span>
            <div className={'results-div-grid-desktop'}>
                {books.map((book: Book) => (
                    <div key={book.id} className={'single-result-book-div-desktop'} onClick={() => {
                        navigate(`/library/${book.id}`);
                    }}>
                        <img src={'/public/images/book-icon.png'} alt={'book image error'}/>
                        <div className={'book-main-data-div-desktop'}>
                            <span>{book.title}</span>
                            <span>{book.name} {book.surname}</span>
                            <span>{book.series}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    );
}

export default function UserBooksHistory() {
    const isMobile = useMedia({maxWidth: 1170});
    const [results, setResults] = useState<Book[]>([]);
    const [enrichedBooks, setEnrichedBooks] = useState<Book[]>([]);
    const token = sessionStorage.getItem('access_token');


    const fechBooks = async () => {
        const responseReturned = await fetch(`http://localhost:8000/rental/get-my-returned`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        });
        if(responseReturned.ok) {
            const data = await responseReturned.json();
            for (let i = 0; i < data.length; i++) {
                const bookResponse = await fetch(`http://localhost:8000/book/get-by-copy-id?id=${data[i].copy_id}`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    credentials: 'include',
                });
                if(bookResponse.ok){
                    const bookData = await bookResponse.json();
                    setResults((prevResults) => [...prevResults, bookData]);
                } else { console.log(responseReturned.status, responseReturned.statusText); }
            }
        }else { console.log(responseReturned.status, responseReturned.statusText); }
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
        <>
            {isMobile ? <MobileTemplate/> : <DesktopTemplate books={enrichedBooks} />}
        </>
    )
}

