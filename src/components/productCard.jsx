import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/basketSlice";

function ProductCard({ id, price, title, text, size, url, url1, url2, url3}) {
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
    };

    return (
      <div className='ProductCard'>
        <div className='ProductCard__col'>
            <div className='ProductCard__col__mainImage'>
                <img src={url1} alt='' />
            </div>
            <div className='ProductCard__col__rowImage'>
                <div className='ProductCard__col__rowImage__grey'>
                    <img src={url2} alt=''/>
                </div>
                <div className='ProductCard__col__rowImage__grey'>
                    <img src={url3} alt=''/>
                </div>
                <div className='ProductCard__col__rowImage__grey'>
                    <img src={url} alt=''/>
                </div>
            </div>
        </div>
        <div className='ProductCard__col'>
            <div className='ProductCard__col__rowTitle'>
                <h1>{title}</h1>
                <span className='size'>{size} мл</span>
            </div>
            <h2>серии "Ясноликая"</h2>
            <p>{text}</p>
            <div className='ProductCard__col__rowBtn'>
                <span className='price'>{price} ₽</span>
                <button onClick={onClickAdd}>Добавить в корзину</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default ProductCard
