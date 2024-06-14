import React, {useContext} from 'react'
import './ShoppingCartItem.css'
import { ShopContext } from '../context/ShopContext'


function ShoppingCartItem({id, title, imgSrc, weight, price}) {
  
  const {cartItems, addToCart, removeFromCart, updateCartItemAmount} = useContext(ShopContext);
  

  return (
    <div className='shopping-cart-item-container'>
        <img className='product-image' src={imgSrc} alt="item" />
        <div className='item-description'>
        {title} {weight}
        </div>
        <div className='product-amount'>
            <div className='item-control-btn' onClick={()=>removeFromCart(id)}>-</div>
            <div className='item-control-amount'> <input value={cartItems[id]} onChange={(e)=> updateCartItemAmount(Number(e.target.value), id)}/> </div>
            <div className='item-control-btn' onClick={()=>addToCart(id)}>+</div>
        </div>
        <div className='product-price'>{price} zł</div>
    </div>
  )
}

export default ShoppingCartItem