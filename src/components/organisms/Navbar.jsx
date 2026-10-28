import { useState } from "react";
import logo from "../../assets/media/Logo-.png"


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-[var(--text-primario)] font-bold shadow-md fixed w-full z-30 bg-[var(--bg-principale)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo B&B" className="w-28" />

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#chi-siamo">Chi Siamo</a></li>
          <li><a href="#camere">Camere</a></li>
          <li><a href="#servizi">Servizi</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (

            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col px-6 pb-4 space-y-2 shadow text-lg font-medium bg-[var(--bg-principale)]">
          <li><a href="#">Home</a></li>
          <li><a href="#chi-siamo">Chi Siamo</a></li>
          <li><a href="#camere">Camere</a></li>
          <li><a href="#servizi">Servizi</a></li>
          <li><a href="#contatti">Contatti</a></li>
        </ul>
      )}
    </nav>
  );
}







