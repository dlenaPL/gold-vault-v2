import React from 'react'
import Accordion from './Accordion'
import './MetalVeryficationPage.css'

function MetalVeryficationPage() {
  return (
    <div className='container'>

    <div className='title-container'>
      <h1>Weryfikacja złota, srebra lub platyny.</h1>
      <div className='title-content'>
        <span className='text-content'>
          Zwykło się mówić, że „mądry Polak po szkodzie” i niestety w przypadku rynku metali szlachetnych
          to określenie również znajduje grupę osób,
          z którymi można je utożsamić - a przecież profesjonalna weryfikacja autentyczności i wycena monet, 
          sztabek czy biżuterii u dealera metali szlachetnych to szybki i sprawdzony sposób na uniknięcie 
          wpadki inwestycyjnej, utraty kapitału, a nawet kłopotów prawnych.
        </span>
      </div>
    </div>

    <Accordion/>

    </div>
  )
}

export default MetalVeryficationPage