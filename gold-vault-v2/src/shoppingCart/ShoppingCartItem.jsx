import React from 'react'
import './ShoppingCartItem.css'
import kangaroo from '../assets/gold-coins/1-oz-australian-kangaroo.jpg'

function ShoppingCartItem({id, title, imgSrc, weight, price}) {
  
  return (
    <div className='shopping-cart-item-container'>
        <img className='product-image' src={imgSrc} alt="item" />
        <div className='item-description'>
        {title}
        </div>
        <div className='product-amount'>
            <div className='item-control-btn'>-</div>
            <div className='item-control-amount'> 1 </div>
            <div className='item-control-btn'>+</div>
        </div>
        <div className='product-price'>{price} zł</div>
    </div>
  )
}

export default ShoppingCartItem