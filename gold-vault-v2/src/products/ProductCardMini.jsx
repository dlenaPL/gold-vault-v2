
import React, { useContext } from 'react'
import './ProductCardMini.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function ProductCardMini({id, title, imgSrc, weight, price}) {

  const {addToCart, cartItems} = useContext(ShopContext);
  

  return (
    <div className='mini-card-container txt-grey-light bg-black'>
      <Link to={`/products/${id}`}>
        <div className='name-container'>
            <h4 className='product-name'>{title}</h4>
            <h4 className='product-name product-weight'>{weight}</h4>
        </div>
        <div className='img-container'>
            <img className='product-img' src={imgSrc} alt="prod_img"></img>
        </div>
        <div className='price-container'>
            <h4 className='product-price-tag'>{price} </h4>
        </div>
     </Link>
        <div className='buy-btn-container'>
            <a className='add-to-cart-btn' onClick={()=>addToCart(id)}>Do koszyka</a>
           
        </div>
       
    </div>
  )
}

export default ProductCardMini;
