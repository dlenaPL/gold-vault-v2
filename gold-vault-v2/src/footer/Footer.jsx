import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import heraeus from '../assets/mints/heraeus.png'
import perthmint from '../assets/mints/perthmint.png'
import metalor from '../assets/mints/metalor.png'
import umicore from '../assets/mints/umicore.png'

function Footer() {
  return (
    <div className='footer-container txt-grey-light'>
        <div className='mints-bar'>
            <ul className='mints-list'>
                <li className='mint-item'><img src={heraeus}/></li>
                <li className='mint-item'><img src={perthmint}/></li>
                <li className='mint-item wide-scr'><img src={metalor}/></li>
                <li className='mint-item wide-scr'><img src={umicore}/></li>
            </ul>
        </div>
        <div className='footer-content bg-black'>
            
            <ul className='footer-navbar'>
                <li>
                    <a href='#'>Dane firmy</a>
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li>
                    <a href='#'>Regulamin</a>
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li>
                    <a href='#'>Sposób dostawy</a>
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li>
                    <a href='#'>Skontaktuj się z nami</a>
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li>
                    <a href='#'>Polityka prywatności</a>
                    <FontAwesomeIcon icon={faChevronRight} />
                </li>
                <li>
                    <div className='menu-item-content newsletter-sign-up-content'>
                        <h5 className='menu-item-header'>Newsletter</h5>
                        <span className='menu-item-txt txt-grey-light'>
                            Zapisz się do naszego newslettera!<br></br>
                            Nie przegap żadnej okazji ani promocji.<br></br>
                            Otrzymuj specjalne oferty specjalnie dla Ciebie!<br></br>
                        </span>
                        <div className='newsletter-sign-up-form'>
                            <input type="text" placeholder="Twój email..."/>
                            <button>Zapisz się! </button>
                        </div>
                    </div>
                </li>
            </ul>
            
        </div>

        {/* Footer screen over 769 */}

        <ul className='footer-navbar-big-screen bg-black'>
            <li>
                <div className='menu-item-content'>
                    <h5 className='menu-item-header'>Dane firmy</h5>
                    <span className='menu-item-txt txt-grey-light'>
                        Gold Vault Company<br></br>
                        Wileńska 17<br></br>
                        80-379 Gdańsk<br></br>
                        email: kontakt@goldvault.pl<br></br>
                        tel.: +48 58 112 11 11<br></br>
                    </span>
                </div>
            </li>
            <li>
                <h5 className='menu-item-header'>Więcej o nas</h5>
                <ul className='more-about-list'>
                    <li>
                        <a href='#'>Dane firmy</a>
                        <FontAwesomeIcon icon={faChevronRight} /></li>
                    <li>
                        <a href='#'>Regulamin</a>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li>
                        <a href='#'>Sposób dostawy</a>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li>
                        <a href='#'>Skontaktuj się z nami</a>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                    <li>
                        <a href='#'>Polityka prywatności</a>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </li>
                </ul>
            </li>
            <li>
                <div className='menu-item-content newsletter-sign-up-content'>
                    <h5 className='menu-item-header'>Newsletter</h5>
                    <span className='menu-item-txt txt-grey-light'>
                        Zapisz się do naszego newslettera!<br></br>
                        Nie przegap żadnej okazji ani promocji.<br></br>
                        Otrzymuj specjalne oferty specjalnie dla Ciebie!<br></br>
                    </span>
                    <div className='newsletter-sign-up-form'>
                        <input type="text" placeholder="Twój email..."/>
                        <button>Zapisz się! </button>
                    </div>
                    
                </div>
            </li>
            
        </ul>
        <div className='copyright-container bg-black'>
            <span className='copyright-text'>
                <h5>Gold Vault ©</h5>
                <h5>Wszelkie prawa zastrzeżone</h5>
            </span>
            <div className='go-up-container '>
                <a href='#'>
                    <FontAwesomeIcon className='go-up' icon={faChevronUp} />
                </a> 
            </div>
        </div>
    </div>
  )
}

export default Footer