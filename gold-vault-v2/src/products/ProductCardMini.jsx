
import React from 'react'
import './ProductCardMini.css'
import goldBar1g from '../assets/gold-bars/valcambi_1g_gold_bar.png'

function ProductCardMini() {
  return (
    <div className='mini-card-container txt-grey-light bg-black'>
         <div className='name-container'>
            <h4 className='product-name'>Sztabka Valcambi</h4>
            <h4 className='product-name product-weight'>1 gram</h4>
        </div>
        <div className='img-container'>
            <img className='product-img' src={goldBar1g} ></img>
        </div>
        <div className='price-container'>
            <h4 className='product-price-tag'>PLN 324.68 </h4>
        </div>
       
        <div className='buy-btn-container'>
            <a className='add-to-cart-btn' href='#'>Do koszyka</a>
        </div>
    </div>
  )
}

export default ProductCardMini;
