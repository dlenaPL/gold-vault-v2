import React, { createContext, useState } from 'react'
import Products from '../products/Products';



export const ShopContext = createContext(null);

const setDefaultCart = () => {
    let cart = {};
    let quantity = 0;
    Products.forEach((elm) =>{
        
        cart[elm.id] = 0;
    })
    return cart;
}




const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(setDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] +1 }))
    
    }

    const removeFromCart = (itemId) => {
        if(cartItems[itemId] > 0){
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId] -1 }))
        }
            
    }


    const updateCartItemAmount = (newAmount, itemId)=>{

            setCartItems((prev)=>({...prev, [itemId]: newAmount}))

    }

    const getTotal = ()=>{
        let total = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemProps = Products.find((product)=>(product.id) === Number(item));
                total += cartItems[item] * Number(itemProps.price);
            }
        }
        return total;
    }

    const contextValues = {cartItems, addToCart, removeFromCart, updateCartItemAmount, getTotal};

  return (
    <ShopContext.Provider value = {contextValues} >{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider