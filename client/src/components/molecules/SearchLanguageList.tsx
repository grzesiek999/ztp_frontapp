import useMedia from "use-media"
import {useState} from "react";

type Language = {
    id: number;
    lang: string;
}

type SearchLanguageListProps = {
    languageList: Language[];
    handleValue: (value: number) => void;
    selectSpan: string
}

const DesktopTemplate = ({languageList, handleValue, selectSpan}: SearchLanguageListProps) => {

    const [selected, setSelected] = useState("");

    return (
        <div className={'searching-lists-div'}>
            <span>{selectSpan}: {selected}</span>
            <ul className={'search-list'}>
                {languageList.map(language => (
                    <li key={language.id} onClick={()=>{handleValue(language.id); setSelected(language.lang); }} className={'search-list-li-no-active'}>
                        {language.lang}
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


export default function SearchLanguageList ({languageList, handleValue, selectSpan}: SearchLanguageListProps) {
    const isMobile = useMedia({maxWidth: 1170})
    
    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate languageList={languageList} handleValue={handleValue} selectSpan={selectSpan}/>
            }
        </>
    )
}