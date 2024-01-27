import React from "react";

function ThankItem({ id, url, title, price, count }) {
  
    return (
      <div className="ThankItem">
        <div className="ThankItem__grey">
          <img src={url} alt=""></img>
        </div>
        <h3 className="ThankItem__title">{title}</h3>
        <div className="ThankItem__row">
          <span className="ThankItem__row__count">{count} шт</span>
          <span className="ThankItem__row__price">{price * count} ₽</span>
        </div>
      </div>
    );
}

export default ThankItem;