import React from 'react'
import { useParams } from "react-router-dom";
import Products from './Products'
import '../goldCoinProductPage/GoldCoinProductPage.css'

function ProductPage() {

    let { id } = useParams();
    const product = Products.find(product => String(product.id) === id);

  return (
    <section key={id}>
        <div className='product-page-container'>
        <div className='product-panel'>
            <div className='product-img-panel'>
                
                <div className='product-miniatures'>
                    <img className='product-image' src={product.imgSrc} alt=""/>
                    <img className='product-image' src={product.imgSrc} alt="" />
                </div>
                <div >
                    <img className='product-image-big' src={product.imgSrc} alt="" />
                </div>
                
            </div>
            <div className='product-description-panel'>
                <h3>{product.title} {product.weight}</h3>
                <div className='product-table-header'>
                    <div>
                        Waga
                    </div>
                    <div>Ilość</div>
                    <div>Cena</div>
                </div>
                <div className='product-table-data'>
                    <div>
                    {product.weight}
                    </div>
                    <div className='product-amount'>
                        <div className='item-control-btn'>-</div>
                        <div className='item-control-amount'> 1 </div>
                        <div className='item-control-btn'>+</div>
                     </div>
                    <div>{product.price}</div>
                </div>
                <div className='cashout-btn'>Do koszyka</div>
            </div>
        </div>
        <div className='description-long'>
            <h3>Informacje</h3>
            <span>
            desc
            </span>
        </div>
    </div>
                {/* <img src={product.imgSrc} alt=""></img>
                <div>
                    <h3>{product.title}</h3>
                </div> */}
    </section>
  )
}

export default ProductPage