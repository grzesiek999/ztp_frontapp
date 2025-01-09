import useMedia from "use-media"
import {useState} from "react";

type Form = {
    id: number;
    form: string;
}

type SearchFormListProps = {
    formList: Form[];
    handleValue: (value: number) => void;
    selectSpan: string
}

const DesktopTemplate = ({formList, handleValue, selectSpan}: SearchFormListProps) => {

    const [selected, setSelected] = useState("");

    return (
        <div className={'searching-lists-div'}>
            <span>{selectSpan}: {selected}</span>
            <ul className={'search-list'}>
                {formList.map(form => (
                    <li key={form.id} onClick={()=>{handleValue(form.id); setSelected(form.form); }} className={'search-list-li-no-active'}>
                        {form.form}
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


export default function SearchFormList ({formList, handleValue, selectSpan}: SearchFormListProps) {
    const isMobile = useMedia({maxWidth: 1170})
    
    return(
        <>
            {isMobile ? <MobileTemplate /> : <DesktopTemplate formList={formList} handleValue={handleValue} selectSpan={selectSpan}/>
            }
        </>
    )
}