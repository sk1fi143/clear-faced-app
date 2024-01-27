import penka from '../../assets/img/penka.png';
import tonik from '../../assets/img/tonik.png';

import Product from "../produt";

function MainPageLiders() {
  return (
    <div className="mainPageLiders">
      <h3 className="mainPageLiders__title">ЛИДЕРЫ ПРОДАЖ</h3>
      <div className="mainPageLiders__row">
        <Product
          title="Пенка для лица"
          text="Пенка для умывания, серии «Ясноликая» "
          price="400.0"
          url={penka}
          id={0}
          link="/penka"
        />
        <Product
          title="Тоник для лица"
          text={"Тоник \nдля лица"}
          price="500.0"
          url={tonik}
          id={1}
          link="/tonik"
        />
      </div>
    </div>
  );
}
export default MainPageLiders;
