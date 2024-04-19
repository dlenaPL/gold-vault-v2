import React from 'react'

import coins from '../assets/coins.png'
import './Slide.css'

function Slide() {
  return (
    <div className='slide-container bg-black txt-grey-light'>
        <div className='slide-content'>
            <div className='promo-txt-container'>
                <h2 className='promo-txt'>
                    Kupuj fizyczne złoto online i stacjonarnie!
                </h2>
                <h2 className='promo-txt'>
                    Wysyłka do 48h!
                </h2>
            </div>
            <img className='slide-img' src={coins}/>
            <div className='btn-container'>
                <a className='slide-action-btn txt-black bg-gold' href='#'>Sprawdź ofertę!</a>
            </div>
        </div>
        <div className='simple-divider'></div>
    </div>
  )
}


export default Slide;