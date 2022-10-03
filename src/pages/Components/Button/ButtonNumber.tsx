interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    //onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
    onClick?: () => void;
    children?: React.ReactNode
    value?: String
    className: string
}

export default function ButtonNumber({onClick, children, type, value, className}:Props) {
    
    let value2 = '';
    if (value) {
        value2 = `${value}`;
    }

    return (
        <button onClick={onClick} type={type} value={value2} className={className}>
            {children}
        </button>
    );
}