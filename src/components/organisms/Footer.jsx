import logo from "../../assets/media/Logo-.png"
import Telephone from "../atoms/Telephone"

export default function Footer() {

    return (
        <>
            <footer className="about py-10 border-t w-full">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">


                    <div className="flex flex-col items-center md:items-start gap-4">

                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Logo B&B L'albero d'Ulivo"
                                className="w-18 h-auto h-14"
                            />

                        </div>


                        <div className="flex gap-4 text-xl">
                            <a href="#"> <i className="fa-brands fa-facebook text-blue-500"></i></a>
                            <a href="#"> <i className="fa-brands fa-instagram text-[#E1306C]"></i></a>
                        </div>

                        <div className="text-center md:text-start">
                            <i className="fa-solid fa-location-dot text-about"></i>
                            <span className="pl-2 text-[var(--text-primario)] ">Via degli Ulivi 1010, </span>
                            <p className="pl-4 pt-2 text-[var(--text-primario)] ">Isola Capo Rizzuto 88841, Crotone</p>
                        </div>

                        <div>
                            <i className="fa-solid fa-envelope text-about"></i>
                            <span className="text-[var(--text-primario)] pl-2"><a href="#">info@alberodulivo.it</a></span>
                        </div>
                        <Telephone
                            className="mb-auto"
                        ></Telephone>
                    </div>


                    <div className="flex flex-col items-center md:items-end gap-2 text-[var(--text-primario)]">
                        <a href="#" className="hover:underline">Informativa sulla privacy</a>
                        <a href="#" className="hover:underline">Cookie Policy</a>
                        <p>P.Iva 12345678910</p>

                        <p className="text-sm italic">
                            © L’albero d’Ulivo 
                        </p>
                        <p className="text-sm italic">
                            Tutti i diritti sono riservati
                        </p>
                        <p className="pt-4 text-xs text-[var(--text-primario)]">
                            Designed & Developed by Maria Rotiroti
                        </p>

                    </div>




                </div>


            </footer>
        </>
    )
}
