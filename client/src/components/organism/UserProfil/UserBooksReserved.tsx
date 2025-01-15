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

type UserBooksReservedProps = {
    books: Book[];
}

const DesktopTemplate = ({books} : UserBooksReservedProps) => {
    const navigate = useNavigate();

    return (
        <div className="users-book-in-profile-div-dektop-template">
            <span className="rented-books-title-span">Reserved books:</span>
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

export default function UserBooksReserved() {
    const isMobile = useMedia({ maxWidth: 1170 });
    const [results, setResults] = useState<Book[]>([]);
    const [enrichedBooks, setEnrichedBooks] = useState<Book[]>([]);
    const token = sessionStorage.getItem("access_token");

    const fechBooks = async () => {
        try {
            const responseReturned = await fetch(`http://localhost:8000/reservation/get-my-reserved`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                credentials: "include",
            });

            if (responseReturned.ok) {
                const data = await responseReturned.json();

                const bookFetches = data.map(async (item: any) => {
                    const bookResponse = await fetch(
                        `http://localhost:8000/book/get-by-copy-id?id=${item.copy_id}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                            credentials: "include",
                        }
                    );

                    if (bookResponse.ok) {
                        return await bookResponse.json();
                    } else {
                        console.error("Error fetching book:", bookResponse.status, bookResponse.statusText);
                        return null;
                    }
                });

                const fetchedBooks = await Promise.all(bookFetches);

                const uniqueBooks = fetchedBooks.filter((book, index, self) => {
                    return (
                        book !== null &&
                        self.findIndex((b: any) => b && b.id === book.id) === index
                    );
                });

                setResults((prevResults) => [
                    ...prevResults.filter((prevBook) =>
                        uniqueBooks.every((newBook) => newBook.id !== prevBook.id)
                    ),
                    ...uniqueBooks,
                ]);
            } else {
                console.error("Error fetching reservations:", responseReturned.status, responseReturned.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const enrichBooksWithAuthors = async () => {
        try {
            const booksWithAuthors = await Promise.all(
                results.map(async (book) => {
                    const response = await fetch(
                        `http://localhost:8000/person/get-by-id?id=${book.author_id}`,
                        {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    if (response.ok) {
                        const authorData = await response.json();
                        return {
                            ...book,
                            name: authorData.name,
                            surname: authorData.surname,
                        };
                    } else {
                        console.error("Error fetching author for book:", response.status, response.statusText);
                        return book;
                    }
                })
            );

            const uniqueEnrichedBooks = booksWithAuthors.filter((book, index, self) => {
                return self.findIndex((b) => b.id === book.id) === index;
            });

            setEnrichedBooks(uniqueEnrichedBooks);
        } catch (error) {
            console.error("Error enriching books:", error);
        }
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