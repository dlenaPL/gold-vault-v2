import React from 'react'
import './TopNavbar.css'
import NavItem from './NavItem';


function TopNavbar() {
  return (
    <div className='top-nav-container bg-gold txt-black'>
        <nav className='top-navbar-content'>
            <ul className='top-navbar-list'>
                <NavItem title='Złoto' dropdownitems ={[
                  {name: 'Monety bulionowe', linkto: '/#'},
                  {name: 'Monety historyczne', linkto: '/#'},
                  {name: 'Sztabki', linkto: '/#'},
                  {name: 'Bestsellery', linkto: '/#'},
                  {name: 'Skup złota', linkto: '/#'},
                  {name: 'Weryfikacja i wycena', linkto: '/#'},
                 ]}/>

                 <NavItem title='Srebro' dropdownitems ={[
                  {name: 'Monety bulionowe', linkto: '/#'},
                  {name: 'Monety historyczne', linkto: '/#'},
                  {name: 'Sztabki', linkto: '/#'},
                  {name: 'Bestsellery', linkto: '/#'},
                  {name: 'Skup srebra', linkto: '/#'},
                 ]}/>

                <NavItem title='Akcesoria' dropdownitems ={[
                  {name: 'Pudełka na monety', linkto: '/#'}, 
                  {name: 'Pudełka na sztabki', linkto: '/#'},
                  {name: 'Narzędzia mennicze', linkto: '/#'},
                  {name: 'Akcesoria Gold Vault', linkto: '/#'},
                ]}/>


                <NavItem title='Cennik' dropdownitems ={[
                  {name: 'Cennik złota', linkto: '/#'}, 
                  {name: 'Cennik srebra', linkto: '/#'}
                ]}/>
                <NavItem title='Kontakt' dropdownitems ={[
                  {name: 'Skontaktuj się z nami', linkto: '/#'}, 
                  {name: 'Dane i numery kont', linkto: '/#'},
                  {name: 'O nas', linkto: '/#'},
                  {name: 'Newsletter', linkto: '/#'},
                  {name: 'Najczęstsze pytania (FAQ)', linkto: '/#'},

                ]}/>

            </ul>
        </nav>
    </div>
  )
}

export default TopNavbar;