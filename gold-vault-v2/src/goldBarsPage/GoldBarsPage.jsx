import React from 'react'
import ProductCardMiniPage from '../products/ProductCardMiniPage'
import Products from '../products/Products'
import "./GoldBarsPage.css"
import ProductPagginationList from './ProductPagginationList'



function GoldBarsPage() {

  const goldBars = [];
  Products.forEach(elm =>{
    if(elm.id > 0 && elm.id <= 100){
      goldBars.push(elm);
    }
  })

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
            <ProductCardMiniPage header="" products={goldBars}/> 
          </div>
          <div className='paggination-container'>
            <ProductPagginationList/>
          </div>
          <div className='summarry-container'>
            <div className='summary-content'>
              <span>
              Gold Vault należy do grona oficjalnych dystrybutorów największych 
              światowych mennic. Dzięki bezpośredniej współpracy jest w stanie oferować
               klientom złoto inwestycyjne (w tym sztabki złota) od renomowanych producentów w 
               bardzo atrakcyjnych cenach biorąc pod uwagę dostępność od ręki. Inwestowanie w sztabki
                lokacyjne w Gold Vault jest tożsame z wyborem produktów najwyższej jakości, które cechuje autentyczność 
                potwierdzona przez certyfikat i szeroka rozpoznawalność.
Niezależnie, czy rozważasz zakup sztabki o wadze 1 g, czy interesuje Cię złota sztabka 1 oz, a może inwestycje w duże sztabki o wadze 1 kg -
 dzięki szerokiemu asortymentowi złota w ofercie Gold Vault z pewnością znajdziesz produkt dostosowany do swoich potrzeb.
              </span>
            </div>
          </div>

      </div>

      </div>
      
      
    </div>
  )
}

export default GoldBarsPage