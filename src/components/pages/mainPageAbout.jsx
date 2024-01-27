import cosmetLike from "../../assets/img/cosmetLike.png";
import girl from "../../assets/img/girl.png";
import ylia from "../../assets/img/ylia.png";
import list2 from "../../assets/img/mainList2.png";
import list22 from "../../assets/img/mainList22.png";

function MainPageAbout() {
  return (
    <div className="MainPageAbout">
      <div className="list">
        <img src={list2} alt=""></img>
        <img src={list22} alt=""></img>
      </div>
      <h3 className="MainPageAbout__title">ВАШ КОСМЕТОЛОГ ЭТО ОДОБРИТ</h3>
      <div className="MainPageAbout__wrap">
        <img
          src={cosmetLike}
          className="MainPageAbout__wrap__like"
          alt=""
        ></img>
        <p className="MainPageAbout__wrap__text1">
          Мы знаем, как непросто обладателям особенной кожи найти “свою”
          линейку. Часто средства обещают увлажнение и очищение, но в итоге
          только усиливают уже имеющиеся проблемы с кожей, такие как сухость,
          акне, розацеа, пористость. Поэтому мы создали{" "}
          <span style={{ fontWeight: "450" }}>
            формулу нейтральной успокаивающей базы.
          </span>{" "}
          Без агрессивного многоэтапного ухода. С возможностью комбинировать
          линейку с лечебными средствами.
        </p>
        <p className="MainPageAbout__wrap__text2">
          Это база, которая учитывает{" "}
          <span style={{ textDecorationLine: "underline", fontWeight: "400" ,fontFamily: 'AvenirNextCyr-Light'}}>
            главные потребности любой кожи
          </span>
          :{" "}
          <span>
            сохранение и восстановление защитного барьера, мягкое очищение,
            увлажнение и поддержание естественного баланса.
          </span>{" "}
          Профессиональные схемы ухода позволят вам избавиться от избыточной
          жирности, шелушения, сухости и стянутости,  покраснений, тусклого
          цвета и раздражения кожи на фоне лечения.
        </p>
        <img src={girl} className="MainPageAbout__wrap__girl" alt=""></img>
      </div>
      <h3 className="MainPageAbout__title">О НАС</h3>
      <div className="MainPageAbout__wrap">
        <img src={ylia} className="MainPageAbout__wrap__yulia" alt=""></img>
        <div className="MainPageAbout__wrap__col">
          <p className="MainPageAbout__wrap__col__text">
            <span style={{ fontWeight: "450" }}>“Ясноликая”</span> – молодой российский бренд профессиональной
            уходовой косметики, в основе создания формул которой{" "}
            <span style={{ fontWeight: "450" }}>
              лежит 15-летний опыт работы с проблемной кожей врача-дерматолога
              Юлианы Шиян.
            </span>
          </p>
          <p className="MainPageAbout__wrap__col__text">
            Мы хотим, чтобы каждому человеку с особенной кожей был доступен
            правильный базовый уход. Такой уход можно подобрать без врача и
            использовать каждый день без риска навредить коже, добавлять более
            активные средства в зависимости от состояния кожи и сезона.
          </p>
        </div>
      </div>
    </div>
  );
}
export default MainPageAbout;
