import React from 'react'
import ProductCardMini from './ProductCardMini'
import './ProductCardMiniPage.css'

function ProductCardMiniPage() {
  return (
    <div className='mini-cards-container'>
      <div className='product-promo-text'>
          <h4>Polecane produkty</h4>
      </div>
      <div className='mini-cards-content'>
        <ProductCardMini/>
        <ProductCardMini/>
        <ProductCardMini/>
        <ProductCardMini/>
      </div>
        
    </div>
    
  )
}

export default ProductCardMiniPage