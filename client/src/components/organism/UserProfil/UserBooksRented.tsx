import {useMedia} from "use-media";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


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

    const [books, setBooks] = useState<Book[]>([]);

    return (
        <>
            {isMobile ? <MobileTemplate/> : <DesktopTemplate books={books} />}
        </>
    )
}