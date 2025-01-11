import {useMedia} from "use-media";
import UserLibraryBookAvatar from "../../molecules/Library/UserLibraryBookAvatar.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


interface Book  {
    id: number;
    title: string;
    series: string;
    lang_id: number
    author_id: number;
}
interface Author  {
    name: string,
    surname: string,
    birth_year: number,
    death_year: number,
    id: number
}

interface Edition {
    id: number | null;
    book_id: number | null;
    ed_title: string | null;
    ed_series: string | null;
    illustrator_id: number | null; 
    translator_id: number | null;
    ed_lang_id: number | null;
    publisher_id: number | null;
    ed_num: number | null; 
    ed_year: number | null; 
    form_id: number | null; 
    isbn: number | null; 
    ukd: string | null; 
}

type UserLibraryBookProps = {
    book: Book | null;
    bookLanguage: string | null;
    author: Author | null;
    edition: Edition | null;
}

const DesktopTemplate = ({book, bookLanguage, author, edition}: UserLibraryBookProps ) => {

    return (
        <div className={'user-library-book-details-div-desktop'}>
            <UserLibraryBookAvatar />
            <div className={'book-details-div-desktop'}>
                <span className={'book-detail-title-span'}>Title:</span>
                <span className={'book-detail-content-span'}>{book?.title}</span>
                <span className={'book-detail-title-span'}>Author:</span>
                <span className={'book-detail-content-span'}>{author?.name} {author?.surname}</span>
                <span className={'book-detail-title-span'}>Series:</span>
                <span className={'book-detail-content-span'}>{book?.series}</span>
                <span className={'book-detail-title-span'}>Language:</span>
                <span className={'book-detail-content-span'}>{bookLanguage}</span>
                <span className={'book-detail-title-span'}>Edition Year:</span>
                <span className={'book-detail-content-span'}>{edition?.ed_year}</span>
                <span className={'book-detail-title-span'}>Edition number:</span>
                <span className={'book-detail-content-span'}>{edition?.ed_num}</span>
                <span className={'book-detail-title-span'}>Isbn:</span>
                <span className={'book-detail-content-span'}>{edition?.isbn}</span>
                <span className={'book-detail-title-span'}>Ukd:</span>
                <span className={'book-detail-content-span'}>{edition?.ukd}</span>
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


export default function UserLibraryBookDetails () {
    const isMobile = useMedia({maxWidth: 1170})
    const {book_id} = useParams();

    const [book, setBook] = useState<Book | null>(null);
    const [author, setAuthor] = useState<Author | null>(null);
    const [edition, setEdition] = useState<Edition | null>(null);
    const [lang, setLang] = useState<string | null>(null);
    



    const fetchBook = async () => {
        const responseBook = await fetch(`http://localhost:8000/book/get-by-id?id=${book_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (responseBook.ok) {
            const bookData = await responseBook.json();
            setBook(bookData);
        } else { console.log(responseBook.status, responseBook.statusText); }
    }

    const fetchEdition = async () => {
        const responseEdition = await fetch(`http://localhost:8000/edition/get-by-book-id?id=${book_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (responseEdition.ok) {
            const editionData = await responseEdition.json();
            setEdition(editionData[0]);
        } else { console.log(responseEdition.status, responseEdition.statusText); }
    }

    const fetchAuthor = async () => {
        const responseAuthor = await fetch(`http://localhost:8000/person/get-by-id?id=${book?.author_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (responseAuthor.ok) {
            const authorData = await responseAuthor.json();
            setAuthor(authorData);
        } else { console.log(responseAuthor.status, responseAuthor.statusText); }
    }

    const fetchLanguage = async () => {
        const responseLanguage = await fetch(`http://localhost:8000/language/get-by-id?id=${book?.lang_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (responseLanguage.ok) {
            const languageData = await responseLanguage.json();
            setLang(languageData.lang);
        } else { console.log(responseLanguage.status, responseLanguage.statusText); }
    }

    useEffect(()=>{
        fetchBook();
    }, [])

    useEffect(()=>{
        fetchEdition();
        fetchAuthor();
        fetchLanguage();
    }, [book])

    return (
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate book={book} bookLanguage={lang} author={author} edition={edition}/>}
        </>
    )
}