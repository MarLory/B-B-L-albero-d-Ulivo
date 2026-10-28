export default function Button({ href, children, className = "" }) {

    return (

        <>
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow md:hover:bg-green-600 md:transition ${className}`}
            >
                {children}
            </a>
        </>
    )
}


