import {useMedia} from "use-media";


interface Book {
    id: number;
    title: string,
    name: string,
    surname: string,
    language: string,
}

type LibraryResultsProps = {
    books: Book[];
}

const DesktopTemplate = ({books}: LibraryResultsProps) => {
    return (
        <div className={"library-results-div-desktop"}>
            <span className={'search-results-span'}>Wyszukiwanie:</span>
            <div className={'results-div-grid-desktop'}>
                {books.map((book: Book) => (
                    <div key={book.id} className={'single-result-book-div-desktop'}>
                        <img src={'/public/images/book-icon.png'} alt={'book image error'}/>
                        <div className={'book-main-data-div-desktop'}>
                            <span>Title</span>
                            <span>Name Surname</span>
                            <span>lang. english</span>
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