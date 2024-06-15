import React from 'react'
import './ShoppingCartSummary.css'
import {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react'
import vouchers from '../context/vouchers'



function ShoppingCartSummary() {

    const {getTotal} = useContext(ShopContext);
    const total = getTotal();
    const [shippingCost, setShippingCost] = useState();

    const applyVoucher = ()=>{
        let userEntered = document.getElementById("voucher-input").value;
        let isValid = false;
        let voucherErr = document.getElementById("voucher-msg")
        vouchers.forEach(elm => {
            if(userEntered.toLowerCase() === elm){
                isValid = true;
                setShippingCost(0);
                voucherErr.innerText = "Zastosowano kupon"
                voucherErr.style.display = "inline"
                setTimeout(
                    function() {
                      voucherErr.style.display = "none"
                    }, 1000);
            }
        });
        
    }

  return (
    <div className='summary-container'>
        <div className='summary-title'>
            <h3>Podsumowanie</h3>
        </div>
        <div className='cart-value'> 
            <span>Wartość koszyka: </span>
            <span className='item-value'>{total} zł</span>
        </div>
        <div className='shipping-method-container'>
            <div className='shipping-method-title'>
                <span>Wybierz metodę dostawy: </span>
            </div>
            <div className='radio-group'>

                <input type="radio" name="shopping-method" id="pocztex-punkt" value="15.20" onChange={(e)=>setShippingCost(Number(e.target.value).toFixed(2))} /> 
                <label htmlFor="pocztex-punkt">Pocztex PUNKT</label>

            </div>
            <div className='radio-group'>
                <input type="radio" name="shopping-method" id="pocztex-kurier" value="19.60" onChange={(e)=>setShippingCost(Number(e.target.value).toFixed(2))}/> 
                <label htmlFor="pocztex-kurier">Pocztex KURIER</label>
            </div>
            <div className='radio-group'>
                <input type="radio" name="shopping-method" id="osobisty" value="0.00" onChange={(e)=>setShippingCost(Number(e.target.value).toFixed(2))} /> 
                <label htmlFor="osobisty">Odbiór osobisty</label>
            </div>
        </div>
        <div className='shipping-method-cost'>
            <span >
                Koszt dostawy: 
            </span>
            <span className='item-value' id="shipping-cost">
                {shippingCost} zł
            </span>
        </div>
        <div className='summary-cart-summary'>
            <h3>Podsumowanie: </h3>
            <h3 className='cart-summary-value item-value'>{(shippingCost === undefined ? Number(total).toFixed(2) : (Number(shippingCost)+total).toFixed(2))} zł</h3>
        </div>
        <div className='coupon-form'>
            <div className='coupon-title'>
                Jeśli posiadasz, wpisz kod rabatowy:
            </div>
            <div className='coupon-apply-container'>
                <input className='voucher-input' id="voucher-input" type="text" placeholder=""/>
                <div className='apply-voucher-btn' onClick={applyVoucher}>
                    {'>>'}
                </div>
                
            </div>
            <label id="voucher-msg"></label>
        </div>
        <div className='cashout-btn'>Do kasy</div>
    </div>
  )
}

export default ShoppingCartSummary