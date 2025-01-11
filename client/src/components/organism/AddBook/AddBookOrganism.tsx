import {SyntheticEvent, useEffect, useState} from "react";
import InputModel from "../../molecules/InputModels";
import SearchPersonList from "../../molecules/SearchPersonList.tsx";
import SearchLanguageList from "../../molecules/SearchLanguageList.tsx";
import SearchPublisherList from "../../molecules/SearchPublisherList.tsx";
import SearchFormList from "../../molecules/SearchFormList.tsx";

interface Book {
    id: number | null;
    title: string | null;
    lang_id: number | null;
    series: string | null;
    author_id: number | null;
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

type Person = {
    id: number;
    name: string; 
    surname: string; 
    birth_year: number;
    death_year: number;
}

type Publisher = {
    id: number; 
    name: string;
    localization: string;
    foundation_year: number;  
}

type Form = {
    id: number;
    form: string;
}

type Language = {
    id: number;
    lang: string;
}

type AddBookOrganismTypes = {
    book: Book;
    edition: Edition;
    personList: Person[];
    publisherList: Publisher[];
    languageList: Language[];
    formList: Form[];
    onSubmit: (e: SyntheticEvent) => void;
    handleBookTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookSeries: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookAuthorId: (value: number) => void;
    handleBookLanguageId: (value: number) => void;
    handleBookEditionTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookEditionSeries: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookEditionNum: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookEditionYear: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookEditionIlustratorId: (value: number) => void;
    handleBookEditionTranslatorId: (value: number) => void;
    handleBookEditionLanguageId: (value: number) => void;
    handleBookEditionPublisherId: (value: number) => void;
    handleBookEditionFormId: (value: number) => void;
    handleBookEditionIsbn: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleBookEditionUkd: (e: React.ChangeEvent<HTMLInputElement>) => void;
    message: null | string;
}


const DesktopTemplate =
    ({
         book,
         edition,
         personList,
         publisherList,
         languageList,
         formList,
         onSubmit,
         handleBookTitle,
         handleBookSeries,
         handleBookAuthorId,
         handleBookLanguageId,
         handleBookEditionTitle,
         handleBookEditionSeries,
         handleBookEditionNum,
         handleBookEditionYear,
         handleBookEditionIlustratorId,
         handleBookEditionTranslatorId,
         handleBookEditionLanguageId,
         handleBookEditionPublisherId,
         handleBookEditionFormId,
         handleBookEditionIsbn,
         handleBookEditionUkd,
         message,
    }: AddBookOrganismTypes) => {
    
    return (
        <div className={'add-book-organism-div'}>
            <span className="add-book-title-span">Creating new book</span>
            <form onSubmit={onSubmit}>
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book title:'}
                    labelClassName={'addBook-label'}
                    inputType={'text'}
                    step={undefined}
                    value={book.title}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Title'}
                    onChange={handleBookTitle}
                />
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book series:'}
                    labelClassName={'addBook-label'}
                    inputType={'text'}
                    step={undefined}
                    value={book.series}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Series'}
                    onChange={handleBookSeries}
                />
                <div className={'temp-container-div-list'}>
                    <SearchPersonList personList={personList} handleValue={handleBookAuthorId} selectSpan={"Select book author"}/>
                    <SearchLanguageList languageList={languageList} handleValue={handleBookLanguageId} selectSpan={"Select book language"}/>
                </div>
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book edition title:'}
                    labelClassName={'addBook-label'}
                    inputType={'text'}
                    step={undefined}
                    value={edition.ed_title}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Edition title'}
                    onChange={handleBookEditionTitle}
                />
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book edition series:'}
                    labelClassName={'addBook-label'}
                    inputType={'text'}
                    step={undefined}
                    value={edition.ed_series}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Edition series'}
                    onChange={handleBookEditionSeries}
                />
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book edition number:'}
                    labelClassName={'addBook-label'}
                    inputType={'number'}
                    step={1}
                    value={edition.ed_num}
                    inputClassName={'addBook-input'}
                    pleaceholder={'0'}
                    onChange={handleBookEditionNum}
                />
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book edition year:'}
                    labelClassName={'addBook-label'}
                    inputType={'number'}
                    step={1}
                    value={edition.ed_year}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Edition year'}
                    onChange={handleBookEditionYear}
                />
                <div className={'temp-container-div-list'}>
                    <SearchPersonList personList={personList} handleValue={handleBookEditionIlustratorId} selectSpan={"Select ilustrator"} />
                    <SearchPersonList personList={personList} handleValue={handleBookEditionTranslatorId} selectSpan={"Select translator"} />
                </div>
                <div className={'temp-container-div-list'}>
                    <SearchLanguageList languageList={languageList} handleValue={handleBookEditionLanguageId} selectSpan={"Select book edition language"} />
                    <SearchPublisherList publisherList={publisherList} handleValue={handleBookEditionPublisherId} selectSpan={"Select publisher"} />
                </div>
                <div className={'temp-container-div-list'}>
                    <SearchFormList formList={formList} handleValue={handleBookEditionFormId} selectSpan={"Select form"} />
                </div>
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book edition isbn:'}
                    labelClassName={'addBook-label'}
                    inputType={'number'}
                    step={1}
                    value={edition.isbn}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Edition isbn'}
                    onChange={handleBookEditionIsbn}
                />
                <InputModel
                    containerClassName={'addBook-input-container'}
                    labelContent={'Book edition ukd:'}
                    labelClassName={'addBook-label'}
                    inputType={'text'}
                    step={undefined}
                    value={edition.ukd}
                    inputClassName={'addBook-input'}
                    pleaceholder={'Edition ukd'}
                    onChange={handleBookEditionUkd}
                />
                <button type="submit" className="add-book-button">Add Book</button>
                {message && <span>{message}</span>}
            </form>
        </div>
    )
}


export default function AddBookOrganism () {

    const [book, setBook] = useState<Book>({
        id: null,
        title: null,
        lang_id: null,
        series: null,
        author_id: null,
    })
    const [edition, setEdition] = useState<Edition>({
        id: null,
        book_id: null,
        ed_title: null,
        ed_series: null,
        illustrator_id: null, 
        translator_id: null,
        ed_lang_id: null,
        publisher_id: null,
        ed_num: null,
        ed_year: null, 
        form_id: null, 
        isbn: null,
        ukd: null,
    })
    const [personList, setPersonList] = useState<Person[]>([])
    const [publisherList, setPublisherList] = useState<Publisher[]>([])
    const [languageList, setLanguageList] = useState<Language[]>([])
    const [formList, setFormList] = useState<Form[]>([])
    const [message, setMessage] = useState<string | null>(null)
    const token = sessionStorage.getItem('access_token');


    const checkDataValue = () => {
        if(!book.title) { setMessage("Missing book title !"); }
        else if(!book.series) { setMessage("Missing book series !"); }
        else if(!book.author_id) { setMessage("Missing book author !"); }
        else if(!book.lang_id) { setMessage("Missing book language !"); }
        else if(!edition.ed_title) { setMessage("Missing book edition title !"); }
        else if(!edition.ed_series) { setMessage("Missing book edition series !"); }
        else if(!edition.ed_num) { setMessage("Missing book edition number !"); }
        else if(!edition.ed_year) { setMessage("Missing book edition year !"); }
        else if(!edition.illustrator_id) { setMessage("Missing book edition ilustrator !"); }
        else if(!edition.translator_id) { setMessage("Missing book edition translator !"); }
        else if(!edition.ed_lang_id) { setMessage("Missing book edition language !"); }
        else if(!edition.publisher_id) { setMessage("Missing book edition publisher !"); }
        else if(!edition.form_id) { setMessage("Missing book edition form !"); }
        else if(!edition.isbn) { setMessage("Missing book edition isbn !"); }
        else if(!edition.ukd) { setMessage("Missing book edition ukd !"); }
        else { setMessage(null); }
    }

    const fetchPersonList = () => {
        const response = fetch(`http://localhost:8000/person/get-all`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        response.then(response => {
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        }).then(data => {
            setPersonList(data);
        }).catch(error => { console.error('Error:', error); });
    }

    const fetchPublisherList = () => {
        const response = fetch(`http://localhost:8000/publisher/get-all`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        response.then(response => {
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        }).then(data => {
            setPublisherList(data);
        }).catch(error => { console.error('Error:', error); });
    }

    const fetchLanguageList = () => {
        const response = fetch(`http://localhost:8000/language/get-all`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        response.then(response => {
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        }).then(data => {
            setLanguageList(data);
        }).catch(error => { console.error('Error:', error); });
    }

    const fetchFormList = () => {
        const response = fetch(`http://localhost:8000/form/get-all`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        response.then(response => {
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        }).then(data => {
            setFormList(data);
        }).catch(error => { console.error('Error:', error); });
    }

    const AddCopy = async (book_id: number) => {
        const fetchBook = await fetch(`http://localhost:8000/edition/get-by-book-id?id=${book_id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        });
        if(fetchBook.ok){
            const data = await fetchBook.json();
            const response = await fetch(`http://localhost:8000/copy/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include',
                body: JSON.stringify({
                    ed_id: data[0].id
                })
            });
            if(response.ok) {}else {console.log(response.status, response.statusText)}
        }else { console.log(fetchBook.status, fetchBook.statusText); }
    }

    const AddEdition = async () => {
        const fetchBook = await fetch(`http://localhost:8000/book/get-by-title?title=${book.title}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
        });
        if(fetchBook.ok){
            const data = await fetchBook.json();
            const response = await fetch(`http://localhost:8000/edition/add`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include',
                body: JSON.stringify({
                    book_id: data[0].id,
                    ed_title: edition.ed_title,
                    ed_series: edition.ed_series,
                    illustrator_id: edition.illustrator_id,
                    translator_id: edition.translator_id,
                    ed_lang_id: edition.ed_lang_id,
                    publisher_id: edition.publisher_id,
                    ed_num: edition.ed_num,
                    ed_year: edition.ed_year,
                    form_id: edition.form_id,
                    isbn: edition.isbn,
                    ukd: edition.ukd,
                })
            });
            if(response.ok) { await AddCopy(data[0].id); }else { console.log(response.status, response.statusText); }
        }else { console.log(fetchBook.status, fetchBook.statusText); }
    }

    const AddBook = async (e: SyntheticEvent) => {
        e.preventDefault();

        checkDataValue();
        
        const response = await fetch(`http://localhost:8000/book/add`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
            body: JSON.stringify({
                title: book.title,
                series: book.series,
                lang_id: book.lang_id,
                author_id: book.author_id,
            })
        });
        if(response.ok) { AddEdition(); }else {console.log(response.status, response.statusText)}
    }


    const handleBookTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateTitle = (value: any) => {
            setBook((prevBook) => ({
                ...prevBook,
                title: value,
            }));
        };

        if(e.target.value === '') { updateTitle(null); }
        else { updateTitle(e.target.value); }
    }

    const handleBookSeries = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateSeries = (value: any) => {
            setBook((prevBook) => ({
                ...prevBook,
                series: value,
            }));
        };

        if(e.target.value === '') { updateSeries(null); }
        else { updateSeries(e.target.value); }
    }

    const handleBookAuthorId = (value: number) => {
        setBook((prevBook) => ({
            ...prevBook,
            author_id: value,
        }));
    }

    const handleBookLanguageId = (value: number) => {
        setBook((prevBook) => ({
            ...prevBook,
            lang_id: value,
        }));
    }

    const handleBookEditionTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateEditionTitle = (value: any) => {
            setEdition((prevEdition) => ({
                ...prevEdition,
                ed_title: value,
            }));
        };

        if(e.target.value === '') { updateEditionTitle(null); }
        else { updateEditionTitle(e.target.value); }
    }

    const handleBookEditionSeries = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateEditionSeries = (value: any) => {
            setEdition((prevEdition) => ({
                ...prevEdition,
                ed_series: value,
            }));
        };

        if(e.target.value === '') { updateEditionSeries(null); }
        else { updateEditionSeries(e.target.value); }
    }

    const handleBookEditionNum = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateEditionNum = (value: any) => {
            setEdition((prevEdition) => ({
                ...prevEdition,
                ed_num: value,
            }));
        };

        if(e.target.value === '') { updateEditionNum(null); }
        else { updateEditionNum(e.target.value); }
    }

    const handleBookEditionYear = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateEditionYear = (value: any) => {
            setEdition((prevEdition) => ({
                ...prevEdition,
                ed_year: value,
            }));
        };

        if(e.target.value === '') { updateEditionYear(null); }
        else { updateEditionYear(e.target.value); }
    }

    const handleBookEditionIsbn = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateEditionIsbn = (value: any) => {
            setEdition((prevEdition) => ({
                ...prevEdition,
                isbn: value,
            }));
        };

        if(e.target.value === '') { updateEditionIsbn(null); }
        else { updateEditionIsbn(e.target.value); }
    }

    const handleBookEditionUkd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const updateEditionUkd = (value: any) => {
            setEdition((prevEdition) => ({
                ...prevEdition,
                ukd: value,
            }));
        };

        if(e.target.value === '') { updateEditionUkd(null); }
        else { updateEditionUkd(e.target.value); }
    }

    const handleBookEditionIlustratorId = (value: number) => {
        setEdition((prevEdition) => ({
            ...prevEdition,
            illustrator_id: value,
        }));
    }

    const handleBookEditionTranslatorId = (value: number) => {
        setEdition((prevEdition) => ({
            ...prevEdition,
            translator_id: value,
        }));
    }

    const handleBookEditionLanguageId = (value: number) => {
        setEdition((prevEdition) => ({
            ...prevEdition,
            ed_lang_id: value,
        }));
    }

    const handleBookEditionPublisherId = (value: number) => {
        setEdition((prevEdition) => ({
            ...prevEdition,
            publisher_id: value,
        }));
    }

    const handleBookEditionFormId = (value: number) => {
        setEdition((prevEdition) => ({
            ...prevEdition,
            form_id: value,
        }));
    }


    useEffect(()=>{
        fetchPersonList();
        fetchPublisherList();
        fetchLanguageList();
        fetchFormList();
    }, [])

    return (
        <DesktopTemplate
            book={book}
            edition={edition}
            personList={personList}
            publisherList={publisherList}
            languageList={languageList}
            formList={formList}
            onSubmit={AddBook}
            handleBookTitle={handleBookTitle}
            handleBookSeries={handleBookSeries}
            handleBookAuthorId={handleBookAuthorId}
            handleBookLanguageId={handleBookLanguageId}
            handleBookEditionTitle={handleBookEditionTitle}
            handleBookEditionSeries={handleBookEditionSeries}
            handleBookEditionNum={handleBookEditionNum}
            handleBookEditionYear={handleBookEditionYear}
            handleBookEditionIlustratorId={handleBookEditionIlustratorId}
            handleBookEditionTranslatorId={handleBookEditionTranslatorId}
            handleBookEditionLanguageId={handleBookEditionLanguageId}
            handleBookEditionPublisherId={handleBookEditionPublisherId}
            handleBookEditionFormId={handleBookEditionFormId}
            handleBookEditionIsbn={handleBookEditionIsbn}
            handleBookEditionUkd={handleBookEditionUkd}
            message={message}
        />
    )


}
