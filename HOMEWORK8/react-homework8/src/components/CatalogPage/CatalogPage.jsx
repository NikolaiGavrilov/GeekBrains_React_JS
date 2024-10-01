import React from 'react'
import Header from '../Header/Header'
import CatalogNav from '../CatalogNav/CatalogNav'
import './CatalogPage.scss'
import Footer from '../Footer/Footer'
import GoodsListCatalog from '../GoodsListCatalog/GoodsListCatalog'

const CatalogPage = () => {
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
                            <h2 className="prod-catalogue__heading">Trending now</h2>
                            <div className="prod-catalogue__text-flex">
                                <a href="#" className="prod-catalogue__text prod-catalogue__text-link">Bohemian</a>
                                <a href="#" className="prod-catalogue__text prod-catalogue__text-link">Floral</a>
                                <a href="#" className="prod-catalogue__text prod-catalogue__text-link">Lace</a>
                                <a href="#" className="prod-catalogue__text prod-catalogue__text-link">Floral</a>
                                <a href="#" className="prod-catalogue__text prod-catalogue__text-link">Lace</a>
                                <a href="#" className="prod-catalogue__text prod-catalogue__text-link">Bohemian</a>
                            </div>
                        </div>
                        <div className="prod-catalogue__size">
                            <h2 className="prod-catalogue__heading">Size</h2>
                            <div className="prod-catalogue__size-flex">
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">XXS</label>
                                </div>
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">XS</label>
                                </div>
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">S</label>
                                </div>
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">M</label>
                                </div>
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">L</label>
                                </div>
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">XL</label>
                                </div>
                                <div className="prod-catalogue__checkbox-flex">
                                    <input name="Size" type="checkbox" />
                                    <label for="Size" className="prod-catalogue__checkbox">XXL</label>
                                </div>
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
                    <GoodsListCatalog />
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