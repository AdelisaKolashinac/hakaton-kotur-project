import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === path;
    }
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/Img/Layer-2.png" alt="Котур Logo" />
      </div>

      {!isMobile ? (
        <>
          <nav className="header-nav">
            <div className={`header-nav-item ${isActive("/") ? "active" : ""}`}>
              <Link to="/">Котур</Link>
            </div>
            <div
              className={`header-nav-item ${
                isActive("/aboutUs") ? "active" : ""
              }`}
            >
              <Link to="/aboutUs">За нас</Link>
            </div>
            <div
              className="header-dropdown-container"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span
                className={`header-nav-item ${
                  isActive("/events") ? "active" : ""
                }`}
              >
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
            <div
              className={`header-nav-item ${
                isActive("/gallery") ? "active" : ""
              }`}
            >
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
            <div className={`mobile-nav-item ${isActive("/") ? "active" : ""}`}>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                Котур
              </Link>
            </div>
            <div
              className={`mobile-nav-item ${
                isActive("/aboutUs") ? "active" : ""
              }`}
            >
              <Link to="/aboutUs" onClick={() => setIsMobileMenuOpen(false)}>
                За нас
              </Link>
            </div>
            <div
              className={`mobile-nav-item mobile-dropdown-header ${
                isActive("/events") ? "active" : ""
              }`}
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
                className={`mobile-dropdown-item ${
                  isActive("/events/zirni") ? "active" : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ѕирни
              </Link>
              <Link
                to="/events/other"
                className={`mobile-dropdown-item ${
                  isActive("/events/other") ? "active" : ""
                }`}
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
