import React from 'react'
import './PromoCalculator.css'
import promo_calc from '../assets/promo_calc.png'

function PromoCalculator() {
  return (
    <div className='promo-calc-container'>
        <div className='promo-calc-content'>
            
            <div className='promo-box'>
                
                
                <div className='promo-text'>
                    <h5 className='top-text'>Sprawdź nasz kalkulator inwestycyjny!</h5>
                    <div className='middle'>
                        <div className='img-container'>
                            <img src={promo_calc}/>
                        </div>
                        <h5>Pomoże Ci wybrać najlepszą <br></br> formę inwestycji za podana kwotę!</h5>
                    </div>
                    <div className='bottom'>
                        <a href='#'>Sprawdź!</a>
                    </div>
                </div>
                
                

            </div>
        </div>
    </div>
  )
}

export default PromoCalculator