import { useState } from "react"


const pleaceholder = 'Search for Books'

const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = pleaceholder;
}

const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.currentTarget.placeholder = '';
}

export default function LibrarySearchBar () {    

    const [value, setValue] = useState<null | string>(null)


    const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){ setValue(null); }
        else { setValue(e.target.value); }
    }

    return (
        <div className="library-search-bar-div">
            <input
                type='text'
                placeholder={pleaceholder}
                value={value === null ? '' : value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                onChange={handleValue}
            />
            <button type="button">Search</button>
        </div>
    )
}