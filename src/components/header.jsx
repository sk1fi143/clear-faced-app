import logoIcon from "../assets/img/header-logo.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector(".hamburger").classList.toggle("is-active");
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
    document.querySelector(".hamburger").classList.remove("is-active");
  };
  const handleContactsClick = () => {
    handleMenuItemClick();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logoIcon} alt="" />
      </Link>

      <ul className={`header-menu ${isMenuOpen ? "header-menu--mobile" : ""}`}>
        <Link to="/catalog">
          <li className="header-menu__item" onClick={handleMenuItemClick}>
            Каталог
          </li>
        </Link>
        <Link to="/about">
          <li className="header-menu__item" onClick={handleMenuItemClick}>
            О компании
          </li>
        </Link>
        <Link to="/articles">
          <li className="header-menu__item" onClick={handleMenuItemClick}>
            Полезные статьи
          </li>
        </Link>
        <Link to="/basket">
          <li className="header-menu__item" onClick={handleMenuItemClick}>
            Корзина
          </li>
        </Link>
        <li className="header-menu__item" onClick={handleContactsClick}>
          Контакты
        </li>
      </ul>
      <div class="hamburger" onClick={handleMenuToggle}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  );
}
export default Header;
