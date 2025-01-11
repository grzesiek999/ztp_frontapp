import useMedia from "use-media"
import {useState} from "react";

type Publisher = {
    id: number;
    name: string;
    localization: string;
    foundation_year: number;
}

type SearchPublisherListProps = {
    publisherList: Publisher[];
    handleValue: (value: number) => void;
    selectSpan: string
}

const DesktopTemplate = ({publisherList, handleValue, selectSpan}: SearchPublisherListProps) => {

    const [selected, setSelected] = useState("");

    return (
        <div className={'searching-lists-div'}>
            <span>{selectSpan}: {selected}</span>
            <ul className={'search-list'}>
                {publisherList.map(publisher => (
                    <li key={publisher.id} onClick={()=>{handleValue(publisher.id); setSelected(publisher.name + ' ' + publisher.localization)}} className={'search-list-li-no-active'}>
                        {publisher.name} {publisher.localization}
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


export default function SearchPublisherList ({publisherList, handleValue, selectSpan}: SearchPublisherListProps) {
    const isMobile = useMedia({maxWidth: 1170})
    
    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate publisherList={publisherList} handleValue={handleValue} selectSpan={selectSpan}/>
            }
        </>
    )
}