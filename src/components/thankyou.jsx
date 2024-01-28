import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ThankItem from './thankItem';
import thankList from '../assets/img/thankList.png';
import thankList320 from '../assets/img/thank320list.png';
import { clearItems } from '../redux/slices/basketSlice';
import { useLayoutEffect } from 'react';

function Thankyou() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  const dispatch = useDispatch();
  const items = useSelector((state) => state.basketSlice.items);
  let totalCount = 0;

  items.forEach((item) => {
    totalCount += item.count;
  });

  const onClickClear = () => {
    dispatch(clearItems());
  };

  return (
    <div className="thank">
      <img className="list" src={thankList} alt=""></img>
      <h1 className="thank__title">СПАСИБО ЗА ЗАКАЗ!</h1>
      <h2 className="thank__number">Номер Вашего заказа №00000000001</h2>
      {items.map((item) => (
        <ThankItem key={item.id} {...item} />
      ))}
      <div className="thank__underitemRow">
        <span className="thank__underitemRow__span">Итог:</span>
        <span className="thank__underitemRow__price">
          {useSelector((state) => state.basketSlice.totalPrice)} ₽
        </span>
      </div>
      <div className="thank__col">
        <span className="thank__col__text">Информация о заказе</span>
        <span className="thank__col__text">Адрес доставки</span>
        <span className="thank__col__text">sms напоминание</span>
      </div>
      <Link to="/">
        <button className="thank__button" onClick={onClickClear}>
          Вернуться на главную
        </button>
      </Link>
      <img className="thank__list320" src={thankList320} alt=""></img>
    </div>
  );
}

export default Thankyou;
