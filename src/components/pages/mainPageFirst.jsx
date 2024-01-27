import mainFirstScreenImage from "../../assets/img/mainPageFirstScreenImage.png";
import list1 from '../../assets/img/mainList1.png';
import { Link } from 'react-router-dom';

function MainPageFirst() {
  return (
    <div className="mainPage-firstScreen">
      <div className="mainPage-firstScreen__col">
        <h1 className="mainPage-firstScreen__title">
          Красивая кожа – это здоровая кожа.
        </h1>
        <h2 className="mainPage-firstScreen__title2">
          И в наших силах каждый день заботиться о ней <br></br>
          с помощью правильного базового ухода.
        </h2>
       <button className="mainPage-firstScreen__button"><Link to="/catalog">Перейти в каталог</Link></button>
      </div>
      <img src={mainFirstScreenImage} alt=""></img>
      <img src={list1} alt="" className="list"></img>
    </div>
  );
}
export default MainPageFirst;