export default function Telephone ({ className = "" }) {

    return(
    <>
    <div className={`mb-6 text-center ${className}`}>
              <i className="fa-solid fa-phone text-about"></i>
             <span className="text-about pl-2"><a href="#">+39 0962123456</a></span>
             </div>
    </>
    )
}