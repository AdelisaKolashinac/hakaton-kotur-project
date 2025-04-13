import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/Img/Layer-2.png" alt="Котур Logo" />
      </div>

      {!isMobile ? (
        <>
          <nav className="header-nav">
            <div className="header-nav-item">
              <Link to="/">Котур</Link>
            </div>
            <div className="header-nav-item">
              <Link to="/aboutUs">За нас</Link>
            </div>
            <div
              className="header-dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="header-nav-item">
                <Link to="/events">Настани</Link>
              </span>
              <div
                className={`header-dropdown-content ${
                  isDropdownOpen ? "open" : ""
                }`}
              >
                <div className="header-dropdown-item">Ѕирни</div>
                <div className="header-dropdown-item">Останати</div>
              </div>
            </div>
            <div className="header-nav-item">
              <Link to="/gallery">Архива</Link>
            </div>
          </nav>

          <button className="header-login-button">Најави се</button>
        </>
      ) : (
        <div className="mobile-menu-container">
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <img src="/Img/menu-mobile.svg" alt="Menu" />
          </button>

          <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="mobile-nav-item">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Котур
              </Link>
            </div>
            <div className="mobile-nav-item">
              <Link to="/aboutUs" onClick={() => setIsMobileMenuOpen(false)}>
                За нас
              </Link>
            </div>
            <div
              className="mobile-nav-item mobile-dropdown-header"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              <span>Настани</span>
              <span
                className={`mobile-dropdown-arrow ${
                  isMobileDropdownOpen ? "open" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <div
              className={`mobile-dropdown-container ${
                isMobileDropdownOpen ? "open" : ""
              }`}
            >
              <Link
                to="/events/zirni"
                className="mobile-dropdown-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ѕирни
              </Link>
              <Link
                to="/events/other"
                className="mobile-dropdown-item"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Останати
              </Link>
            </div>
            <div className="mobile-login-button">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                Најави се
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
