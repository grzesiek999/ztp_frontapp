import useMedia from "use-media"
import {useState} from "react";

type Person = {
    id: number;
    name: string;
    surname: string;
    birth_year: number;
    death_year: number;
}

type SearchPersonListProps = {
    personList: Person[];
    handleValue: (value: number) => void;
    selectSpan: string
}

const DesktopTemplate = ({personList, handleValue, selectSpan}: SearchPersonListProps) => {

    const [selected, setSelected] = useState("");

    return (
        <div className={'searching-lists-div'}>
            <span>{selectSpan}: {selected}</span>
            <ul className={'search-list'}>
                {personList.map(person => (
                    <li key={person.id} onClick={()=>{handleValue(person.id); setSelected(person.name + ' ' + person.surname)}} className={'search-list-li-no-active'}>
                        {person.name} {person.surname}
                    </li>
                ))}
            </ul>
        </div>
    )
}


const MobileTemplate = () => {
    return (
        <div>
            
        </div>
    )
}


export default function SearchPersonList ({personList, handleValue, selectSpan}: SearchPersonListProps) {
    const isMobile = useMedia({maxWidth: 1170})
    
    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate personList={personList} handleValue={handleValue} selectSpan={selectSpan}/>
            }
        </>
    )
}