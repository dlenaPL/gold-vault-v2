import React from 'react'
import ProductCardMiniPage from '../products/ProductCardMiniPage'
import {GoldCoinsResources} from './GoldCoinsResources'
import "./GoldCoinsPage.css"
import ProductPagginationList from './ProductPagginationList'




function GoldCoinPage() {
  return (
    <div className='gold-page-container'>
      <div className='gold-page-content'>
        <div className='title'>
          <div className='title-text'>
            <h2>Złote monety</h2>
          </div>
          <div className='title-paragraph'>
            <span>
              Złote monety bulionowe to doskonała inwestycja dla osób poszukujących długoterminowego 
              zabezpieczenia kapitału. Dzięki trwałym relacjom z największymi mennicami produkującymi złoto,
              takimi jak: PAMP, Valcambi, Münze Österreich, 
              The Royal Mint czy Perth Mint, mamy możliwość oferować naszym klientom złote monety w 
              najbardziej konkurencyjnych cenach w kraju i co istotne z dostępnością od ręki!
            </span>  
          </div>    
        </div>  
        <div className='products-container'>
          <div className='menu'>
            <div className='gold-coins-menu-btn filter-btn'>Filtruj</div>
            <div className='gold-coins-menu-btn sort-btn'>Sortuj</div>
          </div>
          <div className='product-list'>
            <ProductCardMiniPage header="" products={GoldCoinsResources}/> 
          </div>
          <div className='paggination-container'>
            <ProductPagginationList/>
          </div>
          <div className='summarry-container'>
            <div className='summary-content'>
              <span>
                Inwestycje w złote monety stanowią formę lokaty dla inwestorów poszukujących długoterminowego 
                zabezpieczenia kapitału. Podobnie jak złote sztabki inwestycyjne są szczególnie chętnie wybierane ze 
                względu na liczne walory inwestycyjne, takie jak: wysoka próba, atrakcyjna cena w przeliczeniu na gram złota czy 
                duża płynność i stanowią odpowiedź na pytanie, jak inwestować w złoto. Ostatnia z wymienionych cech jest szczególnie 
                charakterystyczna dla monet takich, jak Krugerrand, Wiedeńscy Filharmonicy, Amerykański Orzeł, Kanadyjski Liść Klonowy, 
                Australijski Kangur czy Brytyjska Britannia, które cieszą się szeroką rozpoznawalnością w 
                każdym zakątku naszego globu, a za ich produkcję odpowiadają najbardziej renomowane mennice.
              </span>
            </div>
          </div>

      </div>

      </div>
      
      
    </div>
  )
}

export default GoldCoinPage