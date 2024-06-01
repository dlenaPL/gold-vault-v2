import React from 'react'
import './ProductPagginationList.css'


function ProductPagginationList() {
  return (
    <ul className='paggination-list'>
        <li className='paggination-item'><p>{'<'}</p></li>
        <li className='paggination-item'><p>1</p></li>
        <li className='paggination-item'><p>2</p></li>
        <li className='paggination-item'><p>3</p></li>
        <li className='paggination-item'><p>...</p></li>
        <li className='paggination-item'><p>{'Następna >'}</p></li>
    </ul>
  )
}

export default ProductPagginationList