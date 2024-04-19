
import './App.css'
import Slide from './carousel/Slide'
import Navbar from './navbar/Navbar'
import ProductCardMiniPage from './products/ProductCardMiniPage'
import Footer from './footer/Footer'
import PromoCalculator from './extras/PromoCalculator'

function App() {

  return (
    <div className='app-container'>
      <Navbar/>
      <Slide/>
      <ProductCardMiniPage/>
      <PromoCalculator/>
      <ProductCardMiniPage/>
      <Footer/>
    </div>
   
  )
}

export default App
