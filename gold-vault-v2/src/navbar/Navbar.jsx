
import './Navbar.css'
import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons' 
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


import React from 'react'
import { useState } from 'react'
import SideNavbar from './SideNavbar'
import NavbarPromo from './NavbarPromo'
import TopNavbar from './TopNavbar'


function Navbar() {

    const [isShow, setIsShow] = useState(false);
    function clickHandler(){
        setIsShow(!isShow);
    }

    const [open, setOpen] = React.useState(false);

  


  return (
    
    <div className='nav-container'>
        <NavbarPromo/>
        <div className='navbar-container bg-gold txt-black '>
            <div className='navbar-items'>
                <ul className='navbar-list'>
                    <li >
                        <a onClick={clickHandler} className='menu-btn'  href='#'>
                            <FontAwesomeIcon className='icon' icon={faBars} />
                        </a>
                    </li>
                    <li className='search-icon-mobile'>
                        <a href='#'><FontAwesomeIcon className='icon' icon={faMagnifyingGlass}/></a>
                    </li>
                    <li>
                        <div className='logo-container'>
                            <img className='logo-icon' src={Logo}/>
                            <span className='logo-text'>Gold Vault</span>
                        </div>
                    </li>
                    <li className='search-input-bar'>
                            <input type="text" placeholder="Szukaj..."/>
                            <div className='search-icon-container'>
                                <FontAwesomeIcon className='icon' icon={faMagnifyingGlass}/>
                            </div>
                            
                        </li>
                    <li className='menu-elm-container'>
                        <a href='#'>
                            <FontAwesomeIcon className='icon' icon={faUser} />
                            <h5 className='menu-item-text'>Zaloguj się</h5>
                        </a>
                       
                        
                    </li>
                    <li className='menu-elm-container'>
                        <a href='#'>
                            <FontAwesomeIcon className='icon' icon={faCartShopping} />
                            <h5 className='menu-item-text'>Koszyk</h5>
                        </a>
                        
                    </li>
                </ul>
            </div>
        </div>
        {isShow ? <SideNavbar/> : <></>}
        <TopNavbar/>
        
    </div>
    
  )
}

export default Navbar;
