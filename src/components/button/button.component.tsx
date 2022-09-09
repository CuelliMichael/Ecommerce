import './button.style.scss';

type BUTTON_TYPE_CLASSES = 'google-sign-in' | 'inverted';

interface MButtonProps {
    children?: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    type?: "button" | "submit" | "reset" | undefined,
    button_style?: BUTTON_TYPE_CLASSES,
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}

export const MButton: React.FC<MButtonProps> = ({ children, type, button_style, onClick }) => {

    return (
        <button
            className={`button-container  ${button_style}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}