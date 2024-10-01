import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CatalogNav from '../CatalogNav/CatalogNav'
import GoodItem from '../GoodItem/GoodItem'
import './ProductPage.scss'

const ProductPage = () => {
  return (
    <>
    <Header />
    
    <CatalogNav /> 

    <section class="sing-page">
        <div class="container">
            <div class="sing-page__box">
                <div class="sing-page__arrow"><img src="img/arrowLeft.png" alt="стрелка" /></div>
                <img class="sing-page__image" src="img/single_page_woman.jpg" alt="" />
                <div class="sing-page__arrow"><img src="img/arrowRight.png" alt="стрелка" /></div>
            </div>
            <div class="sing-page__info">
                <h3 class="sing-page__info__collection-title">WOMEN COLLECTION</h3>
                <div class="ing-page__info__border-middle"></div>
                <h2 class="sing-page__info__title">Moschino Cheap And Chic</h2>
                <p class="sing-page__info__description">Compellingly actualize fully researched processes before
                    proactive
                    outsourcing. Progressively syndicate
                    collaborative architectures before cutting-edge services. Completely visualize parallel core
                    competencies rather than exceptional portals.</p>
                <div class="sing-page__info__productionflex">
                    <span class="sing-page__info__production-category">MATERIAL: <span
                            class="sing-page__info__production-category__value">COTTON</span></span>
                    <span class="sing-page__info__production-category">DESIGNER: <span
                            class="sing-page__info__production-category__value">BINBURHAN</span></span>
                </div>
                <span class="sing-page__info__price">$561</span>
                <div class="sing-page__info__paramChoice">
                    <div>
                        <h2 class="sing-page__info__production-category__value">CHOOSE COLOR</h2>
                        <select class="sing-page__info__input_select" name="" id="">
                            <option class="sing-page__info__input_select-value" selected="selected">
                                <span>Red</span>
                            </option>
                        </select>
                    </div>
                    <div>
                        <h2 class="sing-page__info__production-category__value">CHOOSE COLOR</h2>
                        <select class="sing-page__info__input_select" name="" id="">
                            <option class="sing-page__info__input_select-value" selected="selected">XXL</option>
                        </select>
                    </div>
                    <div>
                        <h2 class="sing-page__info__production-category__value">QUANTITY</h2>
                        <input class="sing-page__info__input" type="number" value="2" min="1" />
                    </div>
                </div>

                <a href="shopping_cart.html"><button class="sing-page__info__button">
                        <img class="sing-page__info__button_img" src="img/addCart.png" alt="" />
                        <span class="sing-page__info__button_add-inscription">Add to Cart</span></button></a>
            </div>
        </div>

        <div class="sing-page__products_box">
            <div class="container">
                <div class="sing-page__items_title">you may like also</div>
                <div class="sing-page__items_box">
                <GoodItem imgSrc="img/Rectangle 4.png" altDescr="товар4" heading="ELLERY X M'O CAPSULE" description="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi." price="$52"/>    
                <GoodItem imgSrc="img/Rectangle 3.png" altDescr="товар3" heading="ELLERY X M'O CAPSULE" description="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi." price="$52"/>    
                <GoodItem imgSrc="img/Rectangle 6.png" altDescr="товар6" heading="ELLERY X M'O CAPSULE" description="Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi." price="$52"/>    
                </div>
                </div>
            </div>
        </section>

    <Footer isFullVersion={false}/>
    </>
  )
}

export default ProductPage