import React from 'react'
import './ShoppingCartItem.css'
import kangaroo from '../assets/gold-coins/1-oz-australian-kangaroo.jpg'

function ShoppingCartItem() {
  return (
    <div className='shopping-cart-item-container'>
        <img className='product-image' src={kangaroo} alt="item" />
        <div className='item-description'>
        Złota moneta Australijski Kangur 1 oz
        </div>
        <div className='product-amount'>
            <div className='item-control-btn'>-</div>
            <div className='item-control-amount'> 1 </div>
            <div className='item-control-btn'>+</div>
        </div>
        <div className='product-price'>9217,00 zł</div>
    </div>
  )
}

export default ShoppingCartItem