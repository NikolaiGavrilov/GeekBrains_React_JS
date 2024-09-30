import React from 'react'
import Header from '../Header/Header'
import './MainPage.scss'
import GoodsList from '../GoodsList/GoodsList';
import Footer from '../Footer/Footer';

const MainPage = () => {
  return (
    <>
        <Header />

        <section className="brand center">
        <div className="brand_left">
            <img className="brang_img" src="img/Layer_57-removebg-preview 1.png" alt="brand_photo" />
        </div>
        <div className="brand_right">
            <span className="upper_brand_inscription">THE BRAND</span><br></br>
            <span className="brand_inscription">OF LUXERIOUS</span>&nbsp;
            <span className="brand_inscription" style={{ color: '#F16D7F' }}>FASHION</span>
        </div>
        </section>

        <section className="main center">
        <div className="sections">
            <div className="section1"><img className="section_img" src="img/Layer 43.png" alt="women section img"/></div>
            <div className="section1"><span className="upper_sections_inscription">30% OFF</span><br/><span
                    className="big_sections_inscription">FOR WOMEN</span></div>
            <div className="section2"><img className="section_img" src="img/Rectangle 30.png" alt="man section img"/></div>
            <div className="section2"><span className="upper_sections_inscription">HOT DEAL</span><br/><span
                    className="big_sections_inscription">FOR MEN</span></div>
            <div className="section3"><img className="section_img" src="img/Rectangle 30 (1).png" alt="children section img"/>
            </div>
            <div className="section3"><span className="upper_sections_inscription">NEW ARRIVALS</span><br/><span
                    className="big_sections_inscription">FOR KIDS</span></div>
            <div className="section4"><img className="section_img" src="img/Rectangle 20 (1).png" alt="accessories section img"/>
            </div>
            <div className="section4"><span className="upper_sections_inscription">LUXIROUS & TRENDY</span><br/><span
                    className="big_sections_inscription">ACCESORIES</span></div>
                    </div>
        </section>

        <GoodsList />

        <Footer />
    </>
  );
}

export default MainPage;