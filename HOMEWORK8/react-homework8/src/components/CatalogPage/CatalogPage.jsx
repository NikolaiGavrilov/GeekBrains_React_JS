import React, { useState } from 'react'
import Header from '../Header/Header'
import CatalogNav from '../CatalogNav/CatalogNav'
import './CatalogPage.scss'
import Footer from '../Footer/Footer'
// import GoodsListCatalog from '../GoodsListCatalog/GoodsListCatalog'
import GoodItem from '../GoodItem/GoodItem'

const CatalogPage = (goods) => {

    const goodsData = [
        { id: 1,
        imgSrc: 'img/Rectangle 1.jpg', 
        altDescr: 'товар1',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'XL',
        price: 134,}, 
        { id: 2,
            imgSrc: 'img/Rectangle 8.png', 
        altDescr: 'товар8',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Red',
        size: 'L',
        price: 45,}, 
        { id: 3,
            imgSrc: 'img/Rectangle 3.png', 
        altDescr: 'товар3',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'L',
        price: 76,}, 
        { id: 4,
            imgSrc: 'img/Rectangle 4.png', 
        altDescr: 'товар4',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Blue',
        size: 'XS',
        price: 66,}, 
        { id: 5,
            imgSrc: 'img/Rectangle 9.png', 
        altDescr: 'товар9',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'XXL',
        price: 45,}, 
        { id: 6,
            imgSrc: 'img/Rectangle 11.png', 
        altDescr: 'товар11',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 123,}, 
        { id: 7,
            imgSrc: 'img/Rectangle 7.png', 
        altDescr: 'товар7',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'White',
        size: 'M',
        price: 100,}, 
        { id: 8,
            imgSrc: 'img/Rectangle 10.png', 
        altDescr: 'товар10',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Black',
        size: 'XL',
        price: 77,}, 
        { id: 9,
            imgSrc: 'img/Rectangle 12.png', 
        altDescr: 'товар12',
        heading: "ELLERY X M'O CAPSULE",
        description: 'Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.', 
        color: 'Green',
        size: 'S',
        price: 52,}, 
    ]

    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSizeChoice = (size) => {
        setSelectedSizes(prev => 
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    const handleColorChoice = (color) => {
        setSelectedColors(prev => 
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    const filteredGoods = goodsData.filter(product => 
        (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
        (selectedSizes.length === 0 || selectedSizes.includes(product.size))
    );

  return (
    <>
    <Header />

    <CatalogNav /> 

    <section className="prod-catalogue">
        <div className="container">
            <div className="prod-catalogue__content">
                <div className="prod-catalogue__left">
                    <details className="prod-catalogue__details" open>
                        <summary className="prod-catalogue__summary mega-title">Category <i
                                className="fa fa-caret-down fa-caret-down__prod-catalogue"></i></summary>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Accessories</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Bags</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Denim</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Hoodies & Sweatshirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Jackets & Coats</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Pants</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Polos</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shoes</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shorts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Sweaters & Knits</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">T-Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Tanks</a>
                    </details>
                    <details className="prod-catalogue__details">
                        <summary className="prod-catalogue__summary mega-title">Brand<i
                                className="fa fa-caret-down fa-caret-down__prod-catalogue"></i></summary>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Accessories</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Bags</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Denim</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Hoodies & Sweatshirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Jackets & Coats</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Pants</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Polos</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shoes</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shorts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Sweaters & Knits</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">T-Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Tanks</a>
                    </details>
                    <details className="prod-catalogue__details">
                        <summary className="prod-catalogue__summary mega-title">Designer<i
                                className="fa fa-caret-down fa-caret-down__prod-catalogue"></i></summary>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Accessories</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Bags</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Denim</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Hoodies & Sweatshirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Jackets & Coats</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Pants</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Polos</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shoes</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Shorts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Sweaters & Knits</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">T-Shirts</a>
                        <a href="#" className="mega-link prod-catalogue__mega-link">Tanks</a>
                    </details>
                </div>
                <div className="prod-catalogue__right">
                    <div className="prod-catalogue__parameters">
                    <div className="prod-catalogue__trending">
                                <h2 className="prod-catalogue__heading">Color</h2>
                                <div className="prod-catalogue__text-flex">
                                    {['Black', 'Blue', 'Green', 'Red', 'White'].map(color => (
                                        <a 
                                            href="#" 
                                            className={`prod-catalogue__text prod-catalogue__text-link ${selectedColors.includes(color) ? 'active' : ''}`} 
                                            onClick={(e) => { e.preventDefault(); handleColorChoice(color); }}
                                            key={color}
                                        >
                                            {color}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="prod-catalogue__size">
                                <h2 className="prod-catalogue__heading">Size</h2>
                                <div className="prod-catalogue__size-flex">
                                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <div className="prod-catalogue__checkbox-flex" key={size}>
                                            <input 
                                                name="Size" 
                                                type="checkbox" 
                                                checked={selectedSizes.includes(size)}
                                                onChange={() => handleSizeChoice(size)} 
                                            />
                                            <label className="prod-catalogue__checkbox">{size}</label>
                                        </div>
                                    ))}
                                </div>
                            
                        </div>
                        <div className="prod-catalogue__price">
                            <h2 className="prod-catalogue__heading">Price</h2>
                            <div className="prod-catalogue__range">
                                <div className="prod-catalogue__range-circle"></div>
                                <div className="prod-catalogue__range-between"></div>
                                <div className="prod-catalogue__range-circle"></div>
                            </div>
                            <div className="prod-catalogue__prices"><span>$52</span>
                                <span>$400</span>
                            </div>

                        </div>
                    </div>
                    <div className="prod-catalogue__under-params">
                        <div className="prod-catalogue__sort">
                            <div><span className="prod-catalogue__select-text">Sort By</span>
                                <select className="prod-catalogue__select" name="" id="">
                                    <option selected="selected">Name</option>
                                    <option selected="selected">Size</option>
                                    <option selected="selected">Price</option>
                                    <option selected="selected">Rating</option>
                                    <option selected="selected">Date</option>
                                </select>
                            </div>
                        </div>
                        <div className="prod-catalogue__sort">
                            <div><span className="prod-catalogue__select-text">Show</span>
                                <select className="prod-catalogue__select" name="" id="">
                                    <option selected="selected">09</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="prod-catalogue__items-box">
        {filteredGoods.map(good => <GoodItem id={good.id} imgSrc={good.imgSrc} altDescr={good.altDescr} heading={good.heading} description={good.description} color={good.color} size={good.size} price={good.price}/>)}
        </div>
                    <nav className="prod-catalogue__under-items">
                        <div className="prod-catalogue__pages-select">
                            <a href="#" className="prod-catalogue__pages-select__link"><i className="fa fa-angle-left"></i></a>
                            <a href="#" className="prod-catalogue__pages-select__link">1</a>
                            <a href="#" className="prod-catalogue__pages-select__link">2</a>
                            <a href="#" className="prod-catalogue__pages-select__link">3</a>
                            <a href="#" className="prod-catalogue__pages-select__link">4</a>
                            <a href="#" className="prod-catalogue__pages-select__link">5</a>
                            <a href="#" className="prod-catalogue__pages-select__link">6.....20</a>
                            <a href="#" className="prod-catalogue__pages-select__link"><i className="fa fa-angle-right"></i></a>
                        </div>
                        <button className="prod-catalogue__button">View All</button>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <Footer isFullVersion={true}/>
    </>
  )
}

export default CatalogPage