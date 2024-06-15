import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import React, { useState, useEffect } from 'react';
import Products from './products/Products';
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import MainPage from './mainPage/MainPage'
import NoMatch from './noMatch/NoMatch'
import GoldCoinsPage from './goldCoinsPage/GoldCoinsPage'
import GoldHistoricalCoinsPage from './goldHistoricalCoinsPage/GoldHistoricalCoinsPage'
import GoldBarsPage from './goldBarsPage/GoldBarsPage'
import GoldBestsellersPage from './goldBestsellersPage/GoldBestsellersPage'
import GoldBuyPage from './goldBuyPage/GoldBuyPage'
import MetalVeryficationPage from './metalVeryficationPage/MetalVeryficationPage'
import ShoppingCart from './shoppingCart/ShoppingCart'
import GoldCoinProductPage from './goldCoinProductPage/GoldCoinProductPage'
import SilverCoinsPage from './silverCoinsPage/SilverCoinsPage'
import ProductList from './products/ProductList'
import ProductPage from './products/ProductPage'
import ShopContextProvider from './context/ShopContext';


function App() {



  return (

    <div className='app-container'>
      <ShopContextProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/gold/bullion-coins/" element={<GoldCoinsPage/>}/>
          <Route path="/gold/historical-coins/" element={<GoldHistoricalCoinsPage/>}/>
          <Route path="/gold/bars/" element={<GoldBarsPage/>}/>
          <Route path="/gold/bestsellers/" element={<GoldBestsellersPage/>}/>
          <Route path="/gold/buy/" element={<GoldBuyPage/>}/>
          <Route path="/gold/metal-verification/" element={<MetalVeryficationPage/>}/>
          <Route path='/shopping-cart' element={<ShoppingCart/>}/>
          <Route path='/gold/coins/kangaroo-1oz' element={<GoldCoinProductPage/>}/>
          <Route path='/silver/coins/' element={<SilverCoinsPage/>}/>
          <Route path='/products/' element={<ProductList/>}/>
          <Route path='/products/:id' element={<ProductPage />}></Route>

          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>
      </ShopContextProvider>
    </div>

   
  )
}

export default App

