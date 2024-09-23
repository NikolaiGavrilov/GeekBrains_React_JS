import { Link } from "react-router-dom";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeReducer } from "../../store/ThemeReducer";

function AboutPage() {
    const contactInfo = [
        { name: "Телефон", value: "888888888888888" },
        { name: "Email", value: "email@email.ru" },
        { name: "Адрес", value: "Москва, проспект Кличко, 888" }
    ];

    const renderElem = (elem, i) => {
        
        return (
            <li key={i}>
                {elem.name}: {elem.value}
            </li >
        );
    };

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme); 

    return (
        <div className={theme}>
            <nav className="navlink">
                <Link to='/'>Главная</Link>
                <Link to='/about'>О нас</Link>
            </nav>
            <h1>Контакты:</h1>
            <ul>
                {contactInfo.map(renderElem)}
            </ul>
        </div>
    );
}

export default AboutPage;