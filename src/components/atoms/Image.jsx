export default function Image({link, alt="", className="" }) {

    return (

        <>
        <img src={link} alt={alt}
                  className={className}></img>
        </>
    )
}

