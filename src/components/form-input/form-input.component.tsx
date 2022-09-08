import './form-input.styles.scss';

interface FormInputProps {
    label?: string,
    name?: string,
    type?: React.HTMLInputTypeAttribute;
    id?: string;
    className?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    required?: boolean
}

export const FormInput: React.FC<FormInputProps> = ({ label, type, id, className, required, name, value, onChange }) => {

    return (
        <div className='group'>
            <input
                className={`form-input  ${className}`}
                type={type}
                value={value}
                id={id}
                required={required}
                name={name}
                onChange={onChange}
            />
            {
                label &&
                <label
                    className={`${value && value.length > 0 ? "shrink" : ''}  form-input-label `}>
                    {label}
                </label>
            }
        </div>
    )
}