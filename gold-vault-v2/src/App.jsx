import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import MainPage from './mainPage/MainPage'
import NoMatch from './noMatch/NoMatch'
import GoldCoinsPage from './goldCoinsPage/GoldCoinsPage'
import GoldHistoricalCoinsPage from './goldHistoricalCoinsPage/GoldHistoricalCoinsPage'
import GoldBarsPage from './goldBarsPage/GoldBarsPage'
import GoldBestsellersPage from './goldBestsellersPage/GoldBestsellersPage'
import GoldBuyPage from './goldBuyPage/GoldBuyPage'
import MetalVeryficationPage from './metalVeryficationPage/MetalVeryficationPage'



function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          {/* zloto tab */}
          <Route path="/gold/bullion-coins/" element={<GoldCoinsPage/>}/>
          <Route path="/gold/historical-coin/" element={<GoldHistoricalCoinsPage/>}/>
          <Route path="/gold/bars/" element={<GoldBarsPage/>}/>
          <Route path="/gold/bestsellers/" element={<GoldBestsellersPage/>}/>
          <Route path="/gold/buy/" element={<GoldBuyPage/>}/>
          <Route path="/gold/metal-verification/" element={<MetalVeryficationPage/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>

    </div>
   
  )
}

export default App
