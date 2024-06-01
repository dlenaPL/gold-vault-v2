import React from 'react'
import ProductCardMiniPage from '../products/ProductCardMiniPage'
import {SilverCoinsResources} from './SilverCoinsResources'
import "./SilverCoinsPage.css"
import ProductPagginationList from './ProductPagginationList'



function SilverCoinsPage() {
  return (
    <div className='gold-page-container'>
      <div className='gold-page-content'>
        <div className='title'>
          <div className='title-text'>
            <h2>Srebrne monety</h2>
          </div>
          <div className='title-paragraph'>
            <span>
            Gold Vault jest niekwestionowanym liderem w zakresie dystrybucji inwestycyjnych
             metali szlachetnych w krajach Europy Północnej oraz jednym z wiodących 
             podmiotów w Europie Środkowej, a także Południowo-Wschodniej. Przeszło 
             30 lat obecności na rynku pozwoliło nam nawiązać trwałe relacje z największymi 
             mennicami produkującymi srebro, takimi jak PAMP, Valcambi, Münze Österreich, The 
             Royal Mint czy Perth Mint. Dzięki temu mamy możliwość oferować klientom
             srebro inwestycyjne w najbardziej konkurencyjnych cenach w kraju - co istotne z dostępnością od ręki!
            </span>  
          </div>    
        </div>  
        <div className='products-container'>
          <div className='menu'>
            <div className='gold-menu-btn filter-btn'>Filtruj</div>
            <div className='gold-menu-btn sort-btn'>Sortuj</div>
          </div>
          <div className='product-list'>
            <ProductCardMiniPage header="" products={SilverCoinsResources}/> 
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

export default SilverCoinsPage