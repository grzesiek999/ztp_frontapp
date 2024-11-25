
type InputModelProps = {
    containerClassName: string,
    labelContent: string,
    labelClassName: string,
    inputType: string,
    step: number | undefined,
    value: string | number | null,
    inputClassName: string,
    pleaceholder: string, 
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}



export default function InputModel ({
    containerClassName, 
    labelContent, 
    labelClassName, 
    inputType, 
    step, 
    value, 
    inputClassName, 
    pleaceholder, 
    onChange
}: InputModelProps) {
    
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.placeholder = pleaceholder;
    }
    
    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        e.currentTarget.placeholder = '';
    }
    
    return (
        <div className={containerClassName}>
            <label className={labelClassName}>{labelContent}</label>
            {inputType === 'number' ?
                <input
                    type={inputType}
                    step={step}
                    className={inputClassName}
                    placeholder={pleaceholder}
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />:
                <input
                    type={inputType}
                    className={inputClassName}
                    placeholder={pleaceholder}
                    value={value === null ? '' : value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                    onChange={onChange}
                />
            }
        </div>
    )
}