import React from 'react'
import ProductCardMiniPage from '../products/ProductCardMiniPage'
import {GoldBarsResources} from './GoldBarsResources'
import "./GoldBarsPage.css"
import ProductPagginationList from './ProductPagginationList'



function GoldBarsPage() {
  return (
    <div className='gold-page-container'>
      <div className='gold-page-content'>
        <div className='title'>
          <div className='title-text'>
            <h2>Złote sztabki</h2>
          </div>
          <div className='title-paragraph'>
            <span>
            Inwestycje w złote sztabki stanowią idealne rozwiązanie dla tych inwestorów, 
            którzy w złocie upatrują formy długoterminowej lokaty kapitału i
             cenią sobie bezpieczeństwo inwestycji. Podobnie jak monety bulionowe sztabki złota 
             doskonale wpisują się w kanon produktów tworzonych bezpośrednio z myślą o inwestycji ze
              względu na takie walory jak: wysoka próba, konkurencyjna cena w przeliczeniu na gram 
              złota czy wysoka płynność. Wobec tego złote sztabki stanowią doskonałą odpowiedź na pytanie,
               jak inwestować w złoto. Zważywszy, że jednym z czynników determinujących płynność danej sztabki 
               złota oprócz jej wagi, jest jej popularność warto wybierać sztabki inwestycyjne, 
            za których produkcję odpowiadają światowej sławy mennice, m.in.: Valcambi | Pamp | Perth Mint.
            </span>  
          </div>    
        </div>  
        <div className='products-container'>
          <div className='menu'>
            <div className='gold-menu-btn filter-btn'>Filtruj</div>
            <div className='gold-menu-btn sort-btn'>Sortuj</div>
          </div>
          <div className='product-list'>
            <ProductCardMiniPage header="" products={GoldBarsResources}/> 
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

export default GoldBarsPage