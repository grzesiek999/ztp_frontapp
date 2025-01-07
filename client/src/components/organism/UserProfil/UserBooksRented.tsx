import {useMedia} from "use-media";
import {useNavigate, useParams} from "react-router-dom";
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

type UserBooksRentedProps = {
    books: Book[];
}

const DesktopTemplate = ({books} : UserBooksRentedProps) => {
    const navigate = useNavigate();

    return (
        <div className="users-book-in-profile-div-dektop-template">
            <span className="rented-books-title-span">Rented books:</span>
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

export default function UserBooksRented() {
    const isMobile = useMedia({maxWidth: 1170});

    const [results, setResults] = useState<Book[]>([]);
    const [enrichedBooks, setEnrichedBooks] = useState<Book[]>([]);
    const token = sessionStorage.getItem('access_token');


    const fechBooks = () => {
        const responseReturned = fetch(`http://localhost:8000/rental/get-my-rented`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        });
        responseReturned.then(responseReturned => {
            if (!responseReturned.ok) { throw new Error(`HTTP error! status: ${responseReturned.status}`); }
            return responseReturned.json();
        }).then(data => {

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
        <>
            {isMobile ? <MobileTemplate/> : <DesktopTemplate books={enrichedBooks} />}
        </>
    )
}