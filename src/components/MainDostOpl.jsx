import Card from "./card";
import leavesod1 from "../assets/img/leaves-do-1.png";
import { useLayoutEffect } from "react";

function MainDostOpl() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div className="MainDostOpl">
      <h2 className="MainDostOpl__title">ДОСТАВКА И ОПЛАТА</h2>
      <h3 className="MainDostOpl__subtitle">Доставка</h3>
      <div className="MainDostOpl__cards-block">
        <Card
          titlecard="Курьерская служба"
          textcard1="По выбранному адресу или в пункты выдачи. Стоимость – _____ руб."
          textcard2="По Москве доставка на следующий рабочий день после оплаты заказа. Зона курьерской доставки за МКАД включает города: Долгопрудный, Мытищи, Королев, Балашиха, Реутов, Люберцы, Дзержинский, Видное, Московский, Сколково, Красногорск, Химки. Стоимость доставки – ______ руб"
        />
        <Card
          titlecard="Почта России"
          textcard1="Сроки доставки зависят от региона и составляют от 3 до 14 дней."
          textcard2="Оформление заказов, сформированных в интернет-магазине, производится в рабочие дни. В случае, если заказ в интернет-магазине был сформирован в выходной день, то в ближайший рабочий день менеджер свяжется с вами для уточнения деталей и оформления заказа."
        />
        <Card
          titlecard="Самовывоз"
          textcard1="Вы можете забрать заказ самостоятельно по адресу ______ с понедельника по пятницу по предварительной договоренности."
        />
      </div>
      <h3 className="MainDostOpl__subtitle MainDostOpl__align-right">Оплата</h3>
      <div className="MainDostOpl__info-block">
        <p className="MainDostOpl__info-abz">
          Оплата банковской картой осуществляется сразу после оформления заказа.
          Для этого нужно:
        </p>
        <p className="MainDostOpl__info-abz">
        1. При оформлении заказа в пункте "ОПЛАТА" выбрать оплату картой. (Мы
          принимаем карты МИР, Visa, MasterCard, Maestro, Visa Electron)
        </p>
        <p className="MainDostOpl__info-abz">
        2. Пройти до конца процедуру оформления заказа, нажать кнопку
          "Оформить заказ".
        </p>
        <p className="MainDostOpl__info-abz MainDostOpl__f-s30">
          Соединение с платежным шлюзом и передача информации осуществляется в
          защищенном режиме с использованием протокола шифрования SSL.
          Проведение платежей по банковским картам осуществляется в строгом
          соответствии с требованиями платежных систем Мир, Visa Int. и
          Mastercard Europe Sprl.
        </p>
      </div>
      <div className="MainDostOpl__info-block-otcl">
        <p className="MainDostOpl__subtitleotcl">
          Оплата картой
          <br /> на сайте может быть
          <br /> отклонена по причинам:
        </p>
        <div className="MainDostOpl__pole-prichina-otcl">
          <ul className="MainDostOpl__points-prichina-otcl">
            <li className="MainDostOpl__prichina-otcl">
              если ваш банк не поддерживает технологию 3D-Secure;
            </li>
            <li className="MainDostOpl__prichina-otcl">
              на карте недостаточно средств для покупки;
            </li>
            <li className="MainDostOpl__prichina-otcl">
              банк не поддерживает услугу платежей в интернете;
            </li>
            <li className="MainDostOpl__prichina-otcl">
              истекло время ожидания ввода данных;
            </li>
            <li className="MainDostOpl__prichina-otcl">
              в данных была допущена ошибка.
            </li>
          </ul>
        </div>
      </div>
      <p className="MainDostOpl__footer-info-text">
        В этом случае вы можете повторить авторизацию через 20 минут,
        воспользоваться другой картой или обратиться в свой банк для решения
        вопроса.
      </p>
      <img className="MainDostOpl__leave1" src={leavesod1} alt=""></img>
    </div>
  );
}
export default MainDostOpl;
