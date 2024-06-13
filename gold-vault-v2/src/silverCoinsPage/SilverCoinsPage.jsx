import React from 'react'
import ProductCardMiniPage from '../products/ProductCardMiniPage'
import Products from '../products/Products'
import "./SilverCoinsPage.css"
import ProductPagginationList from './ProductPagginationList'



function SilverCoinsPage() {

  const goldCoins = [];
  Products.forEach(elm =>{
    if(elm.id > 300 && elm.id <= 400){
      goldCoins.push(elm);
    }
  })

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
            <ProductCardMiniPage header="" products={goldCoins}/> 
          </div>
          <div className='paggination-container'>
            <ProductPagginationList/>
          </div>
          <div className='summarry-container'>
            <div className='summary-content'>
              <span>
                Metal szlachetny jakim jest srebro to obok złota jedna z najpopularniejszych 
                form lokowania kapitału w kruszcach. Zarówno srebrne monety bulionowe jak 
                i srebrne sztabki inwestycyjne doskonale sprawdzą się jako uzupełnienie portfeli 
                tych inwestorów, którzy zdają sobie sprawę z istoty dywersyfikacji w kontekście budowania
                portfela inwestycyjnego. Inwestycje w srebrne monety bulionowe są chętnie wybierane ze względu 
                na szereg walorów, takich jak: wysoka próba, atrakcyjna cena w przeliczeniu na gram srebra czy 
                duża płynność i stanowią odpowiedź na pytanie, jak inwestować w srebro fizyczne.
                Inwestowanie w srebrne monety bulionowe stanowi rozwiązanie dla tych inwestorów, 
                którzy upatrują w tym kruszcu długoterminowej lokaty kapitału i cenią sobie bezpieczeństwo inwestycji.
              </span>
            </div>
          </div>

      </div>

      </div>
      
      
    </div>
  )
}

export default SilverCoinsPage