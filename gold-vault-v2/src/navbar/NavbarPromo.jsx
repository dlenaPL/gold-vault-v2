

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './NavbarPromo.css'

function NavbarPromo(){

    return(
        <div className='navbar-promo-container bg-black txt-grey-light'>
            <div className='navbar-promo'>
                <FontAwesomeIcon icon={faPhone} />
                <label className='navbar-promo-text'> Zadzwoń do nas !</label>
                <label className='navbar-promo-text'> +48 789 789 789</label>

            </div>
        </div>
    )

}

export default NavbarPromo;