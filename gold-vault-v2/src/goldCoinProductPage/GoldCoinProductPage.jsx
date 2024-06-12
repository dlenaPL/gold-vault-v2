import React from 'react'
import kangarooB from '../assets/gold-coins/1-oz-australian-kangaroo-back.png'
import kangarooF from '../assets/gold-coins/1-oz-australian-kangaroo.jpg'
import './GoldCoinProductPage.css'


function GoldCoinProductPage() {
  return (
    <div className='product-page-container'>
        <div className='product-panel'>
            <div className='product-img-panel'>
                
                <div className='product-miniatures'>
                    <img className='product-image' src={kangarooF} alt=""/>
                    <img className='product-image' src={kangarooB} alt="" />
                </div>
                <div >
                    <img className='product-image-big' src={kangarooF} alt="" />
                </div>
                
            </div>
            <div className='product-description-panel'>
                <h3>Złoty australijski kangur 1 oz</h3>
                <div className='product-table-header'>
                    <div>
                        Waga
                    </div>
                    <div>Ilość</div>
                    <div>Cena</div>
                </div>
                <div className='product-table-data'>
                    <div>
                        1 uncja
                    </div>
                    <div className='product-amount'>
                        <div className='item-control-btn'>-</div>
                        <div className='item-control-amount'> 1 </div>
                        <div className='item-control-btn'>+</div>
                     </div>
                    <div>9471 zł</div>
                </div>
                <div className='cashout-btn'>Do koszyka</div>
            </div>
        </div>
        <div className='description-long'>
            <h3>Informacje</h3>
            <span>
            Gold Vault z przyjemnością przedstawia charakteryzująca się wyjątkowo wysoką 
            jakością złotą monetę Australijski Kangur (Australian Gold Kangaroo), która jest 
            najbardziej kultową spośród australijskich bulionowych złotych monet. Wydana po raz
             pierwszy w 1989 roku przez renomowaną mennicę Perth Mint, była pierwszą złotą monetą 
             bulionową, upamiętniającą jedno z najbardziej wyjątkowych zwierząt na świecie — australijskiego 
             kangura w złocie o czystości 99,99%. Prezentując niezrównane piękno i czystość jest ceniona zarówno
             przez kolekcjonerów, jak i inwestorów. Traktowana w Australii jako prawny środek płatniczy złota 
             moneta Australijski Kangur o wadze 1 uncja posiada nominał 100 dolarów australijskich
              i jest dostępna po cenie z marżą niewiele wyższej od obowiązującej ceny spot złota. 
            Jako długoletni partner Perth Mint, Gold Vault jest w stanie oferować dominujące na 
            rynku kwoty na każdą żądaną ilość tej eleganckiej złotej monety. 
            </span>
        </div>
    </div>
  )
}

export default GoldCoinProductPage