import './App.css';
import ThemeSwitcher from './components/ThemeSwitcher';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ThemeSwitcher />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
