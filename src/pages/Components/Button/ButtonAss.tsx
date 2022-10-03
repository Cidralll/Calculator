interface Props {
    type?: 'button',
    children?: React.ReactNode,
    value?: string
    className: string
}

export default function ButtonAss({ type, children, className}: Props) {

    return (
        <button type={type} className={className} disabled>
            {children}
        </button>
    );
}