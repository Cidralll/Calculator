interface Props {
    children?: React.ReactNode
    className: string
}

export default function Input({children, className}:Props) {
    var value = '|'
    if (children) {
        value = `${children}`
    }

    return(
        <input placeholder={value} className={className} disabled></input>
    );
}