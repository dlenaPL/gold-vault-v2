
import './App.css'
import Slide from './carousel/Slide'
import Navbar from './navbar/Navbar'
import ProductCardMiniPage from './products/ProductCardMiniPage'
import Footer from './footer/Footer'
import PromoCalculator from './extras/PromoCalculator'

import gb1oz from'./assets/gold-bars/valcambi_1oz_gold_bar.png'
import gb1g from'./assets/gold-bars/valcambi_1g_gold_bar.png'
import gb5g from'./assets/gold-bars/valcambi_5g_gold_bar.png'
import gb10g from'./assets/gold-bars/valcambi_10g_gold_bar.png'

import kangaroo from './assets/gold-coins/1-oz-australian-kangaroo.jpg'
import philh from './assets/gold-coins/austrian-philharmonicer-2024-1oz-gold-obverse-2.png'
import brit from './assets/gold-coins/britannia-1-oz-gold-coin-reverse-2024.png'
import krug from './assets/gold-coins/krugerrand-gold-coin-1-oz-reverse.png'



const bars = [
  {
    id: 1,
    title: "Sztabka Valcambi",
    imgSrc: gb1g,
    weight: "1g",
    price: "380,00 PLN"
  },
  {
    id: 2,
    title: "Sztabka Valcambi",
    imgSrc: gb5g,
    weight: "5g",
    price: "1660,00 PLN"
  },
  {
    id: 3,
    title: "Sztabka Valcambi",
    imgSrc: gb10g,
    weight: "10g",
    price: "3276,00 PLN"
  },
  {
    id: 4,
    title: "Sztabka Valcambi",
    imgSrc: gb1oz,
    weight: "1oz",
    price: "9917,00 PLN"
  },
];


const coins = [
  {
    id: 101,
    title: "Australijski Kangur",
    imgSrc: kangaroo,
    weight: "1oz",
    price: "9917,00 PLN"
  },
  {
    id: 102,
    title: "Złoty Filharmonik",
    imgSrc: philh,
    weight: "1oz",
    price: "9917,00 PLN"
  },
  {
    id: 103,
    title: "Złota Britannia",
    imgSrc: brit,
    weight: "1oz",
    price: "9917,00 PLN"
  },
  {
    id: 104,
    title: "Złoty Krugerrand",
    imgSrc: krug,
    weight: "1oz",
    price: "9917,00 PLN"
  }
];



function App() {

  return (
    <div className='app-container'>
      <Navbar/>
      <Slide/>
      <ProductCardMiniPage header="Polecane produkty" products={bars}/>
      <PromoCalculator/>
      <ProductCardMiniPage header="Polecane dla Ciebie" products={coins}/>
      <Footer/>
    </div>
   
  )
}

export default App
