import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/basketSlice";
import { Link } from "react-router-dom";

function Product({ id, url, title, text, price, link }) {
  const dispatch = useDispatch();
  const basketItem = useSelector((state) =>
    state.basketSlice.items.find((obj) => obj.id === id)
  );

  const addedCount = basketItem ? basketItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      url,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="productSection">
      <Link to={link}>
        <div className="product-card">
          <img src={url} alt="" className="product-card__image"></img>
        </div>
      </Link>
      <div className="productSection__row">
        <div className="productSection__row__col">
          <h6 className="productSection__row__col__title">{title}</h6>
          <span
            className="productSection__row__col__span"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {text}
          </span>
        </div>
        <div className="productSection__row__col2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="97"
            height="17"
            viewBox="0 0 97 17"
            fill="none"
          >
            <path
              d="M28.4839 0L30.3851 5.85142H36.5377L31.5602 9.4678L33.4614 15.3192L28.4839 11.7028L23.5064 15.3192L25.4076 9.4678L20.4301 5.85142H26.5826L28.4839 0Z"
              fill="#108C3D"
            />
            <path
              d="M8.46825 0L10.3695 5.85142H16.522L11.5445 9.4678L13.4458 15.3192L8.46825 11.7028L3.49074 15.3192L5.39198 9.4678L0.414466 5.85142H6.56701L8.46825 0Z"
              fill="#108C3D"
            />
            <path
              d="M48.4995 0L50.4007 5.85142H56.5533L51.5758 9.4678L53.477 15.3192L48.4995 11.7028L43.522 15.3192L45.4232 9.4678L40.4457 5.85142H46.5983L48.4995 0Z"
              fill="#108C3D"
            />
            <path
              d="M68.5151 0L70.4164 5.85142H76.5689L71.5914 9.4678L73.4926 15.3192L68.5151 11.7028L63.5376 15.3192L65.4389 9.4678L60.4613 5.85142H66.6139L68.5151 0Z"
              fill="#108C3D"
            />
            <path
              d="M88.5308 0L90.432 5.85142H96.5845L91.607 9.4678L93.5083 15.3192L88.5308 11.7028L83.5532 15.3192L85.4545 9.4678L80.477 5.85142H86.6295L88.5308 0Z"
              fill="#108C3D"
            />
          </svg>
          <span className="productSection__row__col2__price">{price} ₽</span>
        </div>
      </div>
      <button className="button-add" onClick={onClickAdd}>
        Добавить в корзину
      </button>
    </div>
  );
}
export default Product;
