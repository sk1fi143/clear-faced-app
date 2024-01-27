import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/basketSlice";
import { Link } from "react-router-dom";

const CatalogProduct = ({ id, url, title, price, urlCatalogImage, link }) => {
    const dispatch = useDispatch();
    const basketItem = useSelector((state) => state.basketSlice.items.find((obj) => obj.id === id));
  
    const addedCount = basketItem ? basketItem.count : 0;
    const onClickAdd = () => {
      const item = {
        id,
        title,
        price,
        url,
      };
      dispatch(addItem(item));
      window.alert('Добавлено в корзину!');
    };
  return (
      <div className="catalog__row__box">
        <Link to={link}><img src={urlCatalogImage} alt="" className="imageCatalog"></img></Link>
        <div className="catalog__row__box__row">
          <h6>Серия “Ясноликая”</h6>
          <span className="price">{price} ₽</span>
        </div>
        <div className="catalog__row__box__row">
          <span className="text">{title}</span>
          <svg
            onClick={onClickAdd}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="42"
            viewBox="0 0 32 42"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.60668 9.29297C8.05473 5.19357 11.5283 2.00361 15.747 2.00361C19.9657 2.00361 23.4393 5.19357 23.8873 9.29297H7.60668ZM5.79779 9.29297C6.2527 4.19771 10.5334 0.203613 15.747 0.203613C20.9606 0.203613 25.2413 4.19771 25.6962 9.29297H30.292H31.192V10.193V41.0962V41.9962H30.292H1.20664H0.306641V41.0962V10.193V9.29297H1.20664H5.79779ZM2.10664 40.1962V11.093H29.392V40.1962H2.10664Z"
              fill="#108C3D"
            />
          </svg>
        </div>
      </div>
  );
};

export default CatalogProduct;
