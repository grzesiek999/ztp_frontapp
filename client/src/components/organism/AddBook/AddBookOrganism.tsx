import { SyntheticEvent, useEffect, useState } from "react";
import InputModel from "../../molecules/InputModels";

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

interface Copy {
    id: number | null;
    ed_id: number | null;
    rented: boolean | null;
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
    copy: Copy;
    personList: Person[];
    publisherList: Publisher[];
    languageList: Language[];
    formList: Form[];
    onSubmit: (e: SyntheticEvent) => void;
}

const DesktopTemplate = ({book, edition, copy, personList, publisherList, languageList, formList, onSubmit}: AddBookOrganismTypes) => {
    
    return (
        <div className={''}>
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
                    onChange={handleEmail}
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
                    onChange={handleEmail}
                />

                lang_id: book.lang_id,
                author_id: book.author_id,        

                <InputModel
                    containerClassName={'addBook-input-container'} 
                    labelContent={'Book edition title:'} 
                    labelClassName={'addBook-label'} 
                    inputType={'text'}
                    step={undefined} 
                    value={edition.ed_title} 
                    inputClassName={'addBook-input'} 
                    pleaceholder={'Edition title'} 
                    onChange={handleEmail}
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
                    onChange={handleEmail}
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
                    onChange={handleEmail}
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
                    onChange={handleEmail}
                />

                illustrator_id: , 
                translator_id: , 
                ed_lang_id: ,
                publisher_id: ,
                form_id: ,

                <InputModel
                    containerClassName={'addBook-input-container'} 
                    labelContent={'Book edition isbn:'} 
                    labelClassName={'addBook-label'} 
                    inputType={'number'}
                    step={1} 
                    value={edition.isbn} 
                    inputClassName={'addBook-input'} 
                    pleaceholder={'Edition isbn'} 
                    onChange={handleEmail}
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
                    onChange={handleEmail}
                />
                <button type="submit" className="">Add Book</button>
            </form>

        </div>
    )
}

type updateSingleFieldProps = {
    setFunction: () => void;
    field: any;
    value: any;
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
    const [copy, setCopy] = useState<Copy>({
        id: null,
        ed_id: null,
        rented: null,
    })
    const [personList, setPersonList] = useState<Person[]>([])
    const [publisherList, setPublisherList] = useState<Publisher[]>([])
    const [languageList, setLanguageList] = useState<Language[]>([])
    const [formList, setFormList] = useState<Form[]>([])
    const [newBookId, setNewBookId] = useState<number | null>(null)

    const updateSingleField = ({setFunction, field, value}: updateSingleFieldProps) => {
        setFunction(prev => ({
            ...prev,
            field: value,
        }));
    };

    const handleBookTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') { setEmail(null); }
        else { setEmail(e.target.value); }
    }
   

    const fetchPersonList = () => {
        const response = fetch(``, {
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
        const response = fetch(``, {
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
        const response = fetch(``, {
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
        const response = fetch(``, {
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

    const AddCopy = async () => {
        let temp;

        const fetchBook = await fetch(`get edition by book id`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if(fetchBook.ok){
            const data = await fetchBook.json();
            temp = data.id;
        }else { console.log(fetchBook.status, fetchBook.statusText); }

        const response = await fetch(``, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                ed_id: temp
            })
        });
        if(response.ok) {}else {console.log(response.status, response.statusText)}
    }

    const AddEdition = async () => {
        const fetchBook = await fetch(`get book_id by book title`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if(fetchBook.ok){
            const data = await fetchBook.json();
            setNewBookId(data.id);
        }else { console.log(fetchBook.status, fetchBook.statusText); }

        const response = await fetch(``, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                book_id: newBookId,
                ed_title: edition.ed_title,
                ed_series: edition.ed_series,
                illustrator_id: , 
                translator_id: , 
                ed_lang_id: ,
                publisher_id: ,
                ed_num: edition.ed_num,
                ed_year: edition.ed_year,
                form_id: ,
                isbn: edition.isbn, 
                ukd: edition.ukd, 
            })
        });
        if(response.ok) { }else {console.log(response.status, response.statusText)}
    }

    const AddBook = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch(``, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                title: book.title,
                series: book.series,
                lang_id: book.lang_id,
                author_id: book.author_id,
            })
        });
        if(response.ok) {
            AddEdition();
            AddCopy();
        }else {console.log(response.status, response.statusText)}
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
            copy={copy}
            personList={personList}
            publisherList={publisherList}
            languageList={languageList}
            formList={formList}
            onSubmit={AddBook}
        />
    )


}
