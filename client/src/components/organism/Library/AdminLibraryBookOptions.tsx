import {useMedia} from "use-media";
import {Link, useNavigate, useParams} from "react-router-dom";
import {SyntheticEvent} from "react";
import { ROUTER_PATH } from "../../../routing/RouterPath";


type AdminLibraryBookOptionsProps = {
    book_id: string | undefined;
    buttonClick: (e: SyntheticEvent) => void; 
}

const DesktopTemplate = ({book_id, buttonClick}: AdminLibraryBookOptionsProps) => {
    return (
        <div className={'user-library-book-options-div-desktop'}>
            <Link to={`/admin/library/${book_id}/edit`}>Edit book details</Link>
            <Link to={`/admin/library/${book_id}/stats`}>Check book status</Link>
            <button type="button" className="user-library-book-options-active-button" onClick={buttonClick}>Delete book</button>
        </div>
    );
}

const MobileTemplate = () => {
    return (
        <div>

        </div>
    );
}

export function AdminLibraryBookOptions () {
    const isMobile = useMedia({maxWidth: 1170});
    const {book_id} = useParams();
    const navigate = useNavigate();
    

    const DeleteBook = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch(`${book_id}`,{

        });
        if(response.ok) { navigate(ROUTER_PATH.LIBRARY); }
        else { console.log(response.status, response.statusText); }
    }



    return (
        <>
            {isMobile ?
                <MobileTemplate 
                />
                :
                <DesktopTemplate
                    book_id={book_id}
                    buttonClick={DeleteBook}
                />
            }
        </>
    );
}