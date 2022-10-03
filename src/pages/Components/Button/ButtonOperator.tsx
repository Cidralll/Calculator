interface Props {
    type?: 'button',
    onClick?: () => void,
    children?: React.ReactNode,
    value?: string
    className: string
}

export default function ButtonOperator({ type, onClick, children, value, className}: Props) {

    return (
        <button onClick={onClick} type={type} value={value} className={className}>
            {children}
        </button>
    );
}