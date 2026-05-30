import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar container">

        {/* LOGO */}
        <a href="#home" className="logo" onClick={closeMenu}>
          EvePortfolio
        </a>

        {/* HAMBURGER BUTTON */}
        <button className="hamburger" onClick={handleToggle}>
          ☰
        </button>

        {/* NAV LINKS */}
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;