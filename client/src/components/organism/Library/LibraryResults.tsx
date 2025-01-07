import {useMedia} from "use-media";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import { UserAuth } from "../../../context/UserContext";


interface Book {
    id: number;
    title: string,
    series: string,
    lang_id: number;
    author_id: number;
    name: string,
    surname: string,
}

type LibraryResultsProps = {
    books: Book[];
}

const DesktopTemplate = ({books}: LibraryResultsProps) => {

    const navigate = useNavigate();
    const {user} = useContext(UserAuth);

    const goToBookDetails = (book_id: number) => {
        if(user?.role === 'User') { navigate(`/library/${book_id}`); }
        else { navigate(`/admin/library/${book_id}`); }
    }

    return (
        <div className={"library-results-div-desktop"}>
            <span className={'search-results-span'}>Wyszukiwanie:</span>
            <div className={'results-div-grid-desktop'}>
                {books.map((book: Book) => (
                    <div key={book.id} className={'single-result-book-div-desktop'} onClick={()=>{ goToBookDetails(book.id); }}>
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
    )
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    )
}

export default function LibraryResults ({books}: LibraryResultsProps) {
    const isMobile = useMedia({maxWidth: 1170})


    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate books={books} />}
        </>
    )
}