import YouCanLike from "./youCanLike";
import { useSelector } from "react-redux";
import BasketItem from "./basketItem";
import listRightCat from "../assets/img/listRightCat.png";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";

function Basket() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  const items = useSelector((state) => state.basketSlice.items);
  let totalCount = 0;

  items.forEach((item) => {
    totalCount += item.count;
  });

  return (
    <div className="basket">
      <img className="list" src={listRightCat} alt=""></img>
      <h1 className="basket__title">КОРЗИНА</h1>
      {items.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
      <div className="basket__underitemRow">
        <span className="basket__underitemRow__span">Сумма к оплате</span>
        <span className="basket__underitemRow__price">
          {useSelector((state) => state.basketSlice.totalPrice)} ₽
        </span>
      </div>
      <input
        className="basket__promo"
        type="text"
        placeholder="Введите промокод"
      />
      <div className="basket__col">
        <div className="basket__col__row">
          <span className="basket__col__row__text">Колличество товаров</span>
          <span className="basket__col__row__text">{totalCount}</span>
        </div>
        <div className="basket__col__row">
          <span className="basket__col__row__text">Товаров на сумму</span>
          <span className="basket__col__row__text">
            {useSelector((state) => state.basketSlice.totalPrice)} ₽
          </span>
        </div>
        <div className="basket__col__row">
          <span className="basket__col__row__text">Скидка</span>
          <span className="basket__col__row__text">
            {useSelector((state) => state.basketSlice.totalPrice)} ₽
          </span>
        </div>
      </div>
      {totalCount !== 0 ? (
        <Link to="/form">
          <button className="basket__buttonPay">Перейти к оформлению</button>
        </Link>
      ) : (
        <button className="basket__buttonPay" onClick={() => window.alert('Ваша корзина пуста!')}>
          Перейти к оформлению
        </button>
      )}
      <YouCanLike />
    </div>
  );
}
export default Basket;
