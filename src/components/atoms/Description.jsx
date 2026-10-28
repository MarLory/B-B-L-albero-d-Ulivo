export default function Description ({children, className="" }) {

    return (

        <>
        <p className={`text-about leading-relaxed ${className}`}>{children}</p>
        </>
    )
}


