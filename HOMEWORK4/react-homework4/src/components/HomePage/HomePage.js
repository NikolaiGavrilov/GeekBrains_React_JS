import { Link } from "react-router-dom";
import { Box } from "../Box/Box";
import linkStyles from "../AboutPage/AboutPage.module.css"
import classNames from "classnames";

function HomePage() {
    return (
        <div>
            <nav className={classNames(linkStyles.links)}>
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>
            </nav>
            <h1>Главная</h1>
            <Box>
                <p>Контент с главной страницы с использованием модуля Box и стилями, протянутыми из css файла через библиотеку classNames</p>
            </Box>
            <Box styleToSet={{ border: "3px solid red" }}>
                <p>Контент с главной страницы с использованием модуля Box и заданным поверх всего пропсом стиля</p>
            </Box>
        </div>
    );
}

export default HomePage;