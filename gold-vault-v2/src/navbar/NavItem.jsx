import './NavItem.css'

import React from 'react'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function NavItem({ title, dropdownitems  }) {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }


  return (
    <li className='nav-item '>
        <div className="nav-item-container" onClick={toggleDropdown}>{title}
            <FontAwesomeIcon className='top-nav-icon' icon={faChevronDown} />
        </div>
        {isOpen && (
            <ul className='dropdown-list'>
                {dropdownitems.map((item, index) => (
                    <li className='dropdown-item' key={index}>
                        <a  href={item.linkto} className="dropdown-item-link">{item.name}
                            <FontAwesomeIcon className='dropdown-item-icon' icon={faChevronRight}/>
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </li>
  )
}

export default NavItem;