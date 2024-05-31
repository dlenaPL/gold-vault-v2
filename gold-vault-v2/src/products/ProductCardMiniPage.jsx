import React from 'react'
import ProductCardMini from './ProductCardMini'
import './ProductCardMiniPage.css'


function ProductCardMiniPage({header, products}) {

  let dataArray = []; 
  if(products){
    dataArray = products.map(product => 
      <ProductCardMini 
        key={product.id}
        title={product.title} 
        imgSrc={product.imgSrc}
        weight={product.weight}  
        price={product.price}
      />)
  }
  

  return (

    <div className='mini-cards-container'>
      <div className='product-promo-text'>
        <h4>{header}</h4>
      </div>
      <div className='mini-cards-content'>
        {dataArray}
      </div>
    </div>
    
  )
}

export default ProductCardMiniPage;