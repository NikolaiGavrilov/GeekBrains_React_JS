import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} style={{ width: "120px" }} className="App-logo" alt="logo" />
        <Message text="Привет тебе, друг!" />

        <Message text="Этот текст передан через пропсы к компоненту Message" />
      </header>


    </div>
  );
}

export default App;
