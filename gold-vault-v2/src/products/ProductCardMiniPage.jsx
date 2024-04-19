import React from 'react'
import ProductCardMini from './ProductCardMini'
import './ProductCardMiniPage.css'


import gb1g from'../assets/gold-bars/valcambi_1g_gold_bar.png'
import gb5g from'../assets/gold-bars/valcambi_5g_gold_bar.png'
import gb10g from'../assets/gold-bars/valcambi_10g_gold_bar.png'
import gb1oz from'../assets/gold-bars/valcambi_1oz_gold_bar.png'

import kangaroo from '../assets/gold-coins/1-oz-australian-kangaroo.jpg'
import philh from '../assets/gold-coins/austrian-philharmonicer-2024-1oz-gold-obverse-2.png'
import brit from '../assets/gold-coins/britannia-1-oz-gold-coin-reverse-2024.png'
import krug from '../assets/gold-coins/krugerrand-gold-coin-1-oz-reverse.png'


const itemsForProdPage = [
  {
    id: 1,
    title: "Sztabka Valcambi",
    imgSrc: gb1g,
    weight: "1g",
    price: "380,00 PLN"
  },
  {
    id: 2,
    title: "Sztabka Valcambi",
    imgSrc: gb5g,
    weight: "5g",
    price: "1660,00 PLN"
  },
  {
    id: 3,
    title: "Sztabka Valcambi",
    imgSrc: gb10g,
    weight: "10g",
    price: "3276,00 PLN"
  },
  {
    id: 4,
    title: "Sztabka Valcambi",
    imgSrc: gb1oz,
    weight: "1oz",
    price: "9917,00 PLN"
  },
]



function ProductCardMiniPage() {


  const dataArray = itemsForProdPage.map(bar => 
  <ProductCardMini 
    key={bar.id}
    title={bar.title} 
    imgSrc={bar.imgSrc}
    weight={bar.weight}  
    price={bar.price}
  />)


  return (
    <div className='mini-cards-container'>
      <div className='product-promo-text'>
          <h4>Polecane produkty</h4>
      </div>
      <div className='mini-cards-content'>
        {dataArray}
      </div>
        
    </div>
    
  )
}

export default ProductCardMiniPage;