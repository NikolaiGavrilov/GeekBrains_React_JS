import React from 'react'
import './GoodItem.scss'

const GoodItem = ( {imgSrc, altDescr, heading, description, price}) => {
  return (
    <div className="products__item">
                    <a className="products__item__link" href="single_page.html">
                        <img className="products__item__image" src={imgSrc} alt={altDescr} />
                        <div className="catalogue_down_part">
                        <h3 className="catalogue_heading">{heading}</h3>
                        <p className="catalogue_description">{description}</p>
                        <p className="catalogue_price">{price}</p>
                        </div>
                    </a>
                    <div className="products__add__box">
                        <a className="products__add__flex" href="shopping_cart.html">
                            <p className="products__add__text">Add to Cart</p>
                        </a>
                    </div>    
                    </div>    
  )
}

export default GoodItem
                