import YouCanLike from "./youCanLike";
import listRightCat from "../assets/img/listRightCat.png";
import CatalogProduct from "./catalogProduct";
import penkaCat from "../assets/img/penkaCat.png";
import tonikCat from "../assets/img/tonikCat.png";
import penka from "../assets/img/penka.png";
import tonik from "../assets/img/tonik.png";
import { useLayoutEffect } from "react";

function Catalog() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div className="catalog">
      <img className="list" src={listRightCat} alt=""></img>
      <h1 className="catalog__title">КАТАЛОГ</h1>
      <div className="catalog__row">
        <CatalogProduct
          title={"Пенка для\nумывания"}
          text="Пенка для умывания, серии «Ясноликая» "
          price={400}
          urlCatalogImage={penkaCat}
          url={penka}
          id={0}
          link="/penka"
        />
        <CatalogProduct
          title={"Тоник для\nлица"}
          text="Тоник для лица, серии «Ясноликая» "
          price={500}
          urlCatalogImage={tonikCat}
          url={tonik}
          id={1}
          link="/tonik"
        />
      </div>
      <YouCanLike />
    </div>
  );
}
export default Catalog;
