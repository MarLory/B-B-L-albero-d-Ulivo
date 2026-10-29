export default function Button({ href, children, className = "" }) {

    // I link interni alla pagina (che iniziano con #) restano nella stessa scheda.
    // I link esterni continuano ad aprirsi in una nuova scheda.
    const isInternal = href?.startsWith("#");

    return (

        <>
            <a
                href={href}
                {...(!isInternal && { target: "_blank", rel: "noopener noreferrer" })}
                className={`inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow md:hover:bg-green-600 md:transition ${className}`}
            >
                {children}
            </a>
        </>
    )
}




