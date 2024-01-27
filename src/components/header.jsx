import logoIcon from '../assets/img/header-logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className="header">
        <Link to="/"><img className="header-logo" src={logoIcon} alt=""></img></Link>
        <ul className="header-menu">
            <Link to="/catalog"><li className="header-menu__item">Каталог</li></Link>
            <Link to="/about"><li className="header-menu__item">О компании</li></Link>
            <Link to="/articles"><li className="header-menu__item">Полезные статьи</li></Link>
            <Link to="/basket"><li className="header-menu__item">Корзина</li></Link>
            <li className="header-menu__item" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Контакты</li>
        </ul>
      </div>
    );
  }
  export default Header;