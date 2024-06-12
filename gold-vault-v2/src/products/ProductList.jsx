import React from 'react'
import Products from './Products'
import ProductCardMiniPage from './ProductCardMiniPage'

function ProductList() {
  return (
    <div>
        
        <ProductCardMiniPage header="" products={Products}/>
    </div>
    

  )
}

export default ProductList