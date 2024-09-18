import classNames from "classnames";
import { Link } from "react-router-dom";
import linkStyles from "./AboutPage.module.css"

function AboutPage() {
    const contactInfo = [
        { name: "Телефон", value: "888888888888888" },
        { name: "Email", value: "email@email.ru" },
        { name: "Адрес", value: "Москва, проспект Кличко, 888" }
    ];

    const renderElem = (elem, i) => {
        const style = {
            padding: "50px",
            margin: "5px 7%",
            backgroundColor: i % 2 ? "azure" : "aliceblue",
            border: i > 0 && i < 2 ? "1px solid blue" : "1px solid green",
            width: "80%",
        };
        return (
            <li key={i} style={style}>
                {elem.name}: {elem.value}
            </li >
        );
    };

    return (
        <div>
            <nav className={classNames(linkStyles.links)}>
                <Link to='/'>Главная</Link>
                <Link to='/about'>О нас</Link>
            </nav>
            <h1>О нас</h1>
            <ul>
                {contactInfo.map(renderElem)}
            </ul>
        </div>
    );
}

export default AboutPage;