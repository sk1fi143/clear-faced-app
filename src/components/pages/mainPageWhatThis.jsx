import MainPageWhatThisHelpImage from "../../assets/img/MainPageWhatThisHelpImage1.png";
import MainPageWhatThisHelpImage2 from "../../assets/img/MainPageWhatThisHelpImage2.png";
import MainPageWhatThisHelpImage3 from "../../assets/img/MainPageWhatThisHelpImage3.png";
import MainPageWhatThisHelpImage4 from "../../assets/img/MainPageWhatThisHelpImage4.png";
import list12 from '../../assets/img/mainList12.png';
import { Link } from 'react-router-dom';

function MainPageWhatThis() {
  return (
    <div className="MainPageWhatThis">
      <img src={list12} alt="" className="list"></img>
      <p className="MainPageWhatThis__spanFirst">
        Зная основы домашнего ухода, вы каждый день будете делать вклад в
        здоровье и внешний вид своей кожи, сэкономите время и средства и
        избежите распространенных ошибок, которые могут испортить даже здоровую
        кожу.
      </p>
      <div className="MainPageWhatThis__row1">
        <div className="MainPageWhatThis__questions">
          <img
            src={MainPageWhatThisHelpImage}
            alt=""
            className="MainPageWhatThis__questions__image"
          ></img>
          <span>
            как <br></br> не пересушить кожу
          </span>
          <div className="MainPageWhatThis__questions__green"></div>
        </div>
        <div className="MainPageWhatThis__questions">
          <img
            src={MainPageWhatThisHelpImage2}
            alt=""
            className="MainPageWhatThis__questions__image"
          ></img>
          <span>
            запреты <br></br> для кожи с акне
          </span>
          <div className="MainPageWhatThis__questions__green"></div>
        </div>
        <div className="MainPageWhatThis__questions">
          <img
            src={MainPageWhatThisHelpImage3}
            alt=""
            className="MainPageWhatThis__questions__image"
          ></img>
          <span>
            какие <br></br> средства вредят коже
          </span>
          <div className="MainPageWhatThis__questions__green"></div>
        </div>
        <div className="MainPageWhatThis__questions">
          <img
            src={MainPageWhatThisHelpImage4}
            alt=""
            className="MainPageWhatThis__questions__image"
          ></img>
          <span>
            ваш минимум <br></br> для полноценного ухода
          </span>
          <div className="MainPageWhatThis__questions__green"></div>
        </div>
      </div>
      <div className="MainPageWhatThis__row1__buttonMore">
        <span className="MainPageWhatThis__row1__buttonMore__span1">
          и много другой полезной информации –{" "}
          <span className="MainPageWhatThis__row1__buttonMore__span2">
            в руководстве по базовому уходу
          </span>
        </span>
        <Link to="/catalog"><button>Узнать больше</button></Link>
      </div>
    </div>
  );
}
export default MainPageWhatThis;
