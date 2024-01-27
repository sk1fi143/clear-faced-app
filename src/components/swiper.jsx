import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

function SwiperPage() {
  const [activeSlide, setActiveSlide] = useState(4);
  
  return (
    <div className="mainSwiper">
    <h3 className="mainSwiper__title">Преимущества:</h3>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={7}
        navigation
      >
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(1)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 1 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">Универсальность</h4>
          <p className="swiper-slide__text">
            подходит для длительного использования, разных состояний, реактивной
            кожи, любого климата
          </p>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(2)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 2 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">Некомедогенно</h4>
          <p className="swiper-slide__text">
            не способствует образованию черных точек и нормализует работу
            сальных желез
          </p>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(3)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 3 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">Подходит во время лечения</h4>
          <p className="swiper-slide__text">
            это нейтральная база, к которой можно добавлять лечебные средства
          </p>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(4)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 4 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">Экономия времени и денег</h4>
          <p className="swiper-slide__text">
            вместо множества баночек, всего 3-4 работающих средства
          </p>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(5)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 5 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">Авторские разработки</h4>
          <p className="swiper-slide__text">
            формулы на основе научных данных и практического опыта работы с
            проблемной коже
          </p>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(6)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 6 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">
            Сокращает походы к косметологу
          </h4>
          <p className="swiper-slide__text">
            восстанавливает физиологические процессы в коже и возвращает ее к
            здоровому состоянию
          </p>
        </SwiperSlide>
        <SwiperSlide
          onMouseEnter={() => setActiveSlide(7)}
          onMouseLeave={() => setActiveSlide(4)}
          className={activeSlide === 7 ? "active" : ""}
        >
          <div className="swiper-green"></div>
          <h4 className="swiper-slide__title">Готовые схемы</h4>
          <p className="swiper-slide__text">
            средств в линейке достаточно для удовлетворения основных
            потребностей кожи
          </p>
        </SwiperSlide>
      </Swiper>
      <Link to="/catalog"><button className="mainSwiper__button">Узнать больше</button></Link>
    </div>
  );
}
export default SwiperPage;
