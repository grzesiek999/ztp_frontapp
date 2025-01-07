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
    const isMobile = useMedia({maxWidth: 1170});


    return (
        <>
            {isMobile ? <MobileTemplate/> : <DesktopTemplate books={} />}
        </>
    )
}