import Product from "./produt.jsx";
import penka from '../assets/img/penka.png';
import tonik from '../assets/img/tonik.png';

function YouCanLike() {
  return (
    <div className="YouCanLike">
      <h3 className="YouCanLike__title">ВАМ МОЖЕТ ПОНРАВИТЬСЯ</h3>
      <div className="mainPageLiders__row">
        <Product
          title="Пенка для лица"
          text="Пенка для умывания, серии «Ясноликая» "
          price={400}
          url={penka}
          id={0}
          link="/penka"

        />
        <Product
          title="Тоник для лица"
          text={"Тоник \nдля лица"}
          price={500}
          url={tonik}
          id={1}
          link="/tonik"
        />
      </div>
    </div>
  );
}
export default YouCanLike;