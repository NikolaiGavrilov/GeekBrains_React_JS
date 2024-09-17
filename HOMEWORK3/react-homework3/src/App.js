import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter/TemperatureConverter';
import ToDoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <div className="seminar3-hometask">
        <TemperatureConverter />
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
