import { Link } from "react-router-dom";
import { Box } from "../Box/Box";
import { useDispatch, useSelector } from "react-redux";
import { themeReducer } from "../../store/ThemeReducer";

function HomePage() {

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme.theme); // Получаем текущую тему

    
    return (
        <div className={theme}>
            <nav className="navlink">
                <Link to="/">Главная</Link>
                <Link to="/about">О нас</Link>
            </nav>
            <h1>Главная</h1>
            <Box>
                <p>Контент с главной страницы 1</p>
            </Box>
            <Box>
                <p>Контент с главной страницы 2</p>
            </Box>
        </div>
    );
}

export default HomePage;