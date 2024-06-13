import React, { createContext, useState } from 'react'
import Products from '../products/Products';



export const ShopContext = createContext(null);

const setDefaultCart = () => {
    let cart = {};
    let quantity = 0;
    Products.forEach((elm) =>{
        
        cart[elm.id] = 0;
    })
    // for(let i = 0; i < Products.length; i++){
    //     cart[i] = 0;
    // }
    return cart;
}




const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(setDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] +1 }))
        console.log(itemId)
    }

    

    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] -1 }))
    }

console.log(cartItems)
    const contextValues = {cartItems, addToCart, removeFromCart};

  return (
    <ShopContext.Provider value = {contextValues} >{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider