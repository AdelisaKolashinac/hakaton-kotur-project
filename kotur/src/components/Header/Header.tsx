import React, { useState } from "react";
import "./Header.css";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/Img/Layer-2.png" alt="Котур Logo" />
      </div>

      <nav className="header-nav">
        <div className="header-nav-item">Котур</div>
        <div className="header-nav-item">За нас</div>
        <div
          className="header-dropdown-container"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <span className="header-nav-item">Настани</span>
          <div
            className={`header-dropdown-content ${
              isDropdownOpen ? "open" : ""
            }`}
          >
            <div className="header-dropdown-item">Ѕирни</div>
            <div className="header-dropdown-item">Останати</div>
          </div>
        </div>
        <div className="header-nav-item">Архива</div>
      </nav>

      <button className="header-login-button">Најави се</button>
    </header>
  );
};

export default Header;
