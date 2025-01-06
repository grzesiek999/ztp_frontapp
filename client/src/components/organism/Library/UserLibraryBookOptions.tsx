import {useMedia} from "use-media";
import {useParams} from "react-router-dom";
import {SyntheticEvent, useContext, useEffect, useState} from "react";
import {UserAuth} from "../../../context/UserContext.tsx";


type UserLibraryBookOptionsProps = {
    reserv: (e: SyntheticEvent) => void;
    rent: (e: SyntheticEvent) => void;
    ret: (e: SyntheticEvent) => void;
    rentalButtonClassName: string;
    reservationButtonClassName: string;
    returnButtonClassName: string;
    message: string | null;
}

const DesktopTemplate = ({reserv, rent, ret, rentalButtonClassName, reservationButtonClassName, returnButtonClassName, message}: UserLibraryBookOptionsProps) => {
    return (
        <>
            <div className={'user-library-book-options-div-desktop'}>
                <button type={'button'} className={reservationButtonClassName} onClick={reserv}>Reservation</button>
                <button type={'button'} className={rentalButtonClassName} onClick={rent}>Rent</button>
                <button type={'button'} className={returnButtonClassName} onClick={ret}>Return</button>
            </div>
            {message && <span>{message}</span>}
        </>
    );
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    );
}

export function UserLibraryBookOptions () {
    const isMobile = useMedia({maxWidth: 1170});
    const {book_id} = useParams();
    const [message, setMessage] = useState<string | null>(null);
    const {user} = useContext(UserAuth)
    const [reservationButtonClass, setReservationButtonClass] = useState<string>("user-library-book-options-active-button");
    const [rentalButtonClass, setRentalButtonClass] = useState<string>("user-library-book-options-no-active-button");
    const [returnButtonClass, setReturnButtonClass] = useState<string>("user-library-book-options-no-active-button");
    const [copy_id, setCopyId] = useState<number | null>(null);
    const [user_id, setUserId] = useState<number | null>(null);
    const token = sessionStorage.getItem('access_token');



    const getCopyByBookId = () => {
        fetch(`http://localhost:8000/copy/get-by-book-id?id=${book_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            if (data.length > 0 && data[0].rented !== undefined) {
                if (!data[0].rented) { setRentalButtonClass('user-library-book-options-active-button');}
                setCopyId(data[0].id)
            } else {
                console.error('Unexpected data format or empty array:', data);
            }
        })
    }

    const getCopyByUserId = () => {
        fetch(`http://localhost:8000/copy/get-by-book-id?id=${book_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((data) => {
            if (data.length > 0 && data[0].rented !== undefined) {
                if (!data[0].rented) {
                    setRentalButtonClass('user-library-book-options-active-button');
                    setCopyId(data[0].id)
                }
            } else {
                console.error('Unexpected data format or empty array:', data);
            }
        })
    }

    const rentBook = async (e: SyntheticEvent) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8000/rental/add`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
            body: JSON.stringify({
                user_id,
                copy_id
            })
        })
        if (response.ok) {
            setMessage("Book rented successfully");
        }else {console.log(response.status, response.statusText); }

    }

    const reservBook = async () => {
        const response = await fetch(`http://localhost:8000/reservation/add`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            credentials: 'include',
            body: JSON.stringify({
                user_id,
                copy_id
            })
        })
        if (response.ok) {
            setMessage("Book reservation successfully");
        }else {console.log(response.status, response.statusText); }
    }

    const returnBook = async () => {
        const response = await fetch(`http://localhost:8000/books/get-by-id?id=${book_id}`, {
            method: "GET",
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',

        })
        if (response.ok) {
            setMessage("Book renturned successfully");
        }else {console.log(response.status, response.statusText); }
    }

    useEffect(() => {
        getCopyByBookId();
        if(user){
            setUserId(user.id);
            console.log(user_id);
        }
    }, [book_id, user]);

    return (
        <>
            {isMobile ? <MobileTemplate /> :
                <DesktopTemplate
                reserv={reservBook}
                rent={rentBook}
                ret={returnBook}
                rentalButtonClassName={rentalButtonClass}
                reservationButtonClassName={reservationButtonClass}
                returnButtonClassName={returnButtonClass}
                message={message} />}
        </>
    );
}