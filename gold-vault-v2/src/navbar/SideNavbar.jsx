
import React from 'react'
import './SideNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react'

function SideNavbar(param){

    const [isShow, setIsShow] = useState(param);
    function clickHandler(){
        setIsShow(!isShow);
    }

    if(isShow){
        return(
        
            <div className='side-navbar-container bg-gold txt-black side-bar-active'>
                <div className='side-navbar-items '>
                    <FontAwesomeIcon className='side-bar-close-btn' onClick={clickHandler} icon={faXmark} />
                    <ul className='side-navbar-list'>
                        <li className='side-bar-nav-item menu-header'>
                            <h1>Menu</h1>
                        </li>
                        <li className='side-bar-nav-item'>
                            <a href='#' className='txt-black'>
                                <span className='side-bar-item-text'>
                                    Złoto
                                </span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                        <li className='side-bar-nav-item'>
                            <a className='txt-black' href='#' >
                                <span className='side-bar-item-text'>
                                    Srebro
                                </span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                        <li className='side-bar-nav-item'>
                            <a className='txt-black' href='#'>
                                <span className='side-bar-item-text'>
                                    Akcesoria
                                </span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                        <li className='side-bar-nav-item'>
                            <a className='txt-black' href='#'>
                                <span className='side-bar-item-text'>
                                    Cennik
                                </span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                    
                        <li className='side-bar-nav-item'>
                            <a className='txt-black' href='#'>
                                <span className='side-bar-item-text'>
                                    Kontakt
                                </span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </a>
                        </li>
                    </ul>
                    <div className='copyright-container'>
                        <span className='copyright-text'>
                            <h5>Gold Vault ©</h5>
                            <h5>Wszelkie prawa zastrzeżone</h5>
                        </span>
                    </div>
                </div>
            </div>
          
        )
    }

    

}

export default SideNavbar;