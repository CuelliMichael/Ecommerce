import './MInput.style.scss';

interface MInputProps {
    name?:string,
    label_name?:string,
    type?:React.HTMLInputTypeAttribute;
    id?:string;
    className?: string;
    value?:string | number;
    onChange?: React.ChangeEventHandler<HTMLInputElement>; 
    required?:boolean
}

export const MInput : React.FC<MInputProps> = ({type, id, className, required, name, value, label_name, onChange}:MInputProps) =>  {

    return(
        <label className='label-title-up-input'>
            <input
                className={`search-box  ${className}`}
                type={type}
                value={value}
                id={id}
                required={required}
                name={name}
                onChange={onChange}
            />
                <span>{label_name}</span>
        </label>
    )
}