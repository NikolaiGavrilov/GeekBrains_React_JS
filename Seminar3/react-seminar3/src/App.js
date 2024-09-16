import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MessagesList from './components/MessagesList';
import TextDisplayForm from './components/TextDisplayForm';
import { ThemeSwitcher } from './components/ThemeSwitcher';

function App({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="Николай" />
        <Counter />
        <MessagesList messages={[{ id: 1, text: "Сообщение 1" }, { id: 2, text: "Сообщение 2" }, { id: 3, text: "Сообщение 3" }]} />
        <TextDisplayForm />
        <ThemeSwitcher />
      </header>
    </div>
  );
}

export default App;
