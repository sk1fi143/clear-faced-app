import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

function Form() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  const [valid, setValid] = useState(false);

  const handleInputChange = () => {
    const inputs = document.querySelectorAll(".form__wrap__fio");
    let valid = true;
    inputs.forEach((input) => {
      if (!input.checkValidity()) {
        valid = false;
      }
    });
    setValid(valid);
  };

  return (
    <div className="form">
      <h1 className="form__title">ОФОРМЛЕНИЕ</h1>
      <h2 className="form__secondTitle">Введите ваши данные:</h2>
      <div className="form__wrap">
        <label>
          <input
            className="form__wrap__fio"
            placeholder="Иванов"
            type="text"
            pattern="^[А-Яа-яЁё\s]+$"
            required
            onChange={handleInputChange}
          />
          <span className="">Фамилия</span>
        </label>
        <label>
          <input
            className="form__wrap__fio"
            placeholder="Иван"
            type="text"
            pattern="^[А-Яа-яЁё\s]+$"
            required
            onChange={handleInputChange}
          />
          <span className="">Имя</span>
        </label>
        <label>
          <input
            className="form__wrap__fio"
            placeholder="Иванович"
            type="text"
            pattern="^[А-Яа-яЁё\s]+$"
            required
            onChange={handleInputChange}
          />
          <span className="">Отчество</span>
        </label>
        <label className="adressLabel">
          <input
            className="form__wrap__adress form__wrap__fio"
            placeholder="г. Москва, 3-й Новый переулок, д. 5с1, кв. 303"
            type="text"
            pattern="^[А-Яа-яЁё0-9\s\W]+$"
            required
            onChange={handleInputChange}
          />
          <span className="">Адрес доставки</span>
        </label>
        <label>
          <input
            className="form__wrap__fio"
            placeholder="+7 (999) 999 99-99"
            type="tel"
            pattern="^[0-9\+\-\s]+$"
            required
            onChange={handleInputChange}
          />
          <span className="">Номер телефона</span>
        </label>
        <label>
          <input
            className="form__wrap__fio"
            placeholder="ivanov@mail.ru"
            type="email"
            required
            onChange={handleInputChange}
          />
          <span className="">E-mail</span>
        </label>
        <label>
          <input
            className="form__wrap__fio"
            placeholder="777000"
            type="text"
            pattern="[0-9]{6}"
            maxLength={6}
            required
            onChange={handleInputChange}
          />
          <span className="">Индекс</span>
        </label>
      </div>
      <Link to="/thankyou">
        <button
          type="submit"
          className="form__button"
          disabled={!valid}
        >
          Перейти к оплате
        </button>
      </Link>
    </div>
  );
}

export default Form;