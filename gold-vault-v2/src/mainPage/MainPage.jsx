import React from 'react'
import Slide from '../carousel/Slide'
import ProductCardMiniPage from '../products/ProductCardMiniPage'
import PromoCalculator from '../extras/PromoCalculator'
import './MainPage.css'
import Products from '../products/Products'


function MainPage() {

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }

  const prodListSize = Products.length;

  function fillArray(arr){
      let temp = [];
      while(temp.length < 4){
        let p = getRandomInt(0, prodListSize)
        if(temp.indexOf(p) === -1) temp.push(p);
      }
      temp.forEach(elm => {
        arr.push(Products[elm])
      });
  }
  
  const forYou = [];
  const topProds = [];

  fillArray(forYou)
  fillArray(topProds)

  return (
    <div className='mainPage-container'>
      <Slide/>
      <h4 className='productList-header'>Polecane dla Ciebie</h4>
      <ProductCardMiniPage header="Polecane produkty" products={forYou}/>
      <PromoCalculator/>
      <h4 className='productList-header'>Najczęsciej kupowane</h4>
      <ProductCardMiniPage header="Polecane dla Ciebie" products={topProds}/>
    </div>
    
  )
}

export default MainPage