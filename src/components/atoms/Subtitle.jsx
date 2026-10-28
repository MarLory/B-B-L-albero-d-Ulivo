export default function Subtitle ({children, className="" }) {

    return (

        <>
        <h3 className={`text-about text-2xl italic font-semibold mb-4 ${className}`}>{children}</h3>
        </>
    )
}


