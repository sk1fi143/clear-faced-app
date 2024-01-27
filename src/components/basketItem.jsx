import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/basketSlice";

const BasketItem = ({ id, url, title, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      }),
    );
  };
  const onClickMinus = () => {
    dispatch(
      minusItem(id)
    );
  };

  const onClickDelete = () => {
    dispatch(
      removeItem(id)
    );
  };

  return (
    <div className="BasketItem">
      <div className="BasketItem__grey">
        <img src={url} alt=""></img>
      </div>
      <h3 className="BasketItem__title">{title}</h3>
      <div className="BasketItem__col">
        <span className="BasketItem__col__price">{price * count} ₽</span>
        <div className="BasketItem__col__row">
          <div className="button" onClick={onClickMinus}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="2"
              viewBox="0 0 20 2"
              fill="none"
            >
              <path d="M0 1H20" stroke="#5AB576" stroke-width="2" />
            </svg>
          </div>
          <span className="count">{count}</span>
          <div className="button" onClick={onClickPlus}>
            <svg
              width="32"
              height="30"
              viewBox="0 0 32 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0L16 30" stroke="#5AB576" stroke-width="2" />
              <path d="M0 15H32" stroke="#5AB576" stroke-width="2" />
            </svg>
          </div>
          <span className="delete" onClick={onClickDelete}>X</span>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
