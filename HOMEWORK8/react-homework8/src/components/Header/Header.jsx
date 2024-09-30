import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import Search from '../Search/Search';
import './Header.scss'

function Header() {
    return (
        <header className="header center">
            <div className="header_left">
                <a href="#"><img src="img/site-logo.png" alt="group2" /></a>
                {}
                <Search />
            </div>
            <nav className="header_right">
                
                <HamburgerMenu></HamburgerMenu>
                <img src="img/Button_copy_2.png" alt="header_button2" />
                <img src="img/Button_copy_3.png" alt="header_button3" />
            </nav>
        </header>
    );
}

export default Header;