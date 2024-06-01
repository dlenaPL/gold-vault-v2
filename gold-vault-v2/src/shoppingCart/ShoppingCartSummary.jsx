import React from 'react'
import './ShoppingCartSummary.css'

function ShoppingCartSummary() {
  return (
    <div className='summary-container'>
        <div className='summary-title'>
            <h3>Podsumowanie</h3>
        </div>
        <div className='cart-value'> 
            <span>Wartość koszyka: </span>
            <span className='item-value'>27651 zł</span>
        </div>
        <div className='shipping-method-container'>
            <div className='shipping-method-title'>
                <span>Wybierz metodę dostawy: </span>
            </div>
            <div className='radio-group'>
                <input type="radio" value="Pocztex PUNKT" name="shopping-method" /> Pocztex PUNKT
            </div>
            <div className='radio-group'>
                <input type="radio" value="Pocztex KURIER" name="shopping-method" /> Pocztex KURIER
            </div>
            <div className='radio-group'>
                <input type="radio" value="Odbiór osobisty" name="shopping-method" /> Odbiór osobisty
            </div>
        </div>
        <div className='shipping-method-cost'>
            <span>
                Koszt dostawy: 
            </span>
            <span className='item-value'>
                19.00 zł
            </span>
        </div>
        <div className='summary-cart-summary'>
            <h3>Podsumowanie: </h3>
            <h3 className='cart-summary-value item-value'>27670 zł</h3>
        </div>
        <div className='coupon-form'>
            <div className='coupon-title'>
                Jeśli posiadasz, wpisz kod rabatowy:
            </div>
            <div className='coupon-apply-container'>
                <input className='voucher-input' type="text" placeholder=""/>
                <div className='apply-voucher-btn'>
                    {'>>'}
                </div>
            </div>
        </div>
        <div className='cashout-btn'>Do kasy</div>
    </div>
  )
}

export default ShoppingCartSummary