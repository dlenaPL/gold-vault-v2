import React from 'react'
import './ShoppingCart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import ShoppingCartItem from './ShoppingCartItem'
import ShoppingCartSummary from './ShoppingCartSummary'
import {useContext} from 'react'
import Products from '../products/Products'
import { ShopContext } from '../context/ShopContext'


function ShoppingCart() {

const {cartItems} = useContext(ShopContext);


  return (
    <div className='shopping-cart-container'>
        <div className='shopping-cart-title'>
            <FontAwesomeIcon className='icon' icon={faCartShopping} />
            <h3>Koszyk</h3>
        </div>
        <div className='product-list-container'>
            <div className='product-list'>
                <div className='product-list-header'>
                    <h3>Produkt</h3>
                    <h3 className='amount-title'>Ilość</h3>
                    <h3>Cena z vat</h3>
                </div>
                <div className='product-item'>
                    {Products.map((product)=>{
                        if(cartItems[product.id] !== 0){
                            return <ShoppingCartItem 
                            key={product.id}
                            id={product.id}
                            title={product.title} 
                            imgSrc={product.imgSrc}
                            weight={product.weight}  
                            price={product.price}/>
                        }
                    })}
                </div>
            </div>
            <div className='shopping-cart-summary'>
                <ShoppingCartSummary/>
            </div>
        </div>
    </div>
  )
}

export default ShoppingCart

