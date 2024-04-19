
import React from 'react'
import './ProductCardMini.css'


function ProductCardMini({title, imgSrc, weight, price}) {
  return (
    <div className='mini-card-container txt-grey-light bg-black'>
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
       
        <div className='buy-btn-container'>
            <a className='add-to-cart-btn' href='#'>Do koszyka</a>
        </div>
    </div>
  )
}

export default ProductCardMini;
