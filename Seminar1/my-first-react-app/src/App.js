import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings/Greetings';
import { ShowTime } from './components/ShowTime/ShowTime';
import EventCard from './components/EventCard/EventCard';

function App() {
  return (
    <div className="App">
      <h2>*Здесь изменился первоначальный контент*</h2>
      <Greetings />
      <ShowTime />

      <h1>Мероприятия:</h1>
      <EventCard title="Свадьба друзей" dateStart="31 августа" dateEnd="1 сентября" titleColor='green' />
      <EventCard title="Поездка в Беларусь" dateStart="2 сентября" dateEnd="10 сентября" titleColor='brown' />
      <EventCard title="Отдых на даче" dateStart="11 сентября" dateEnd="22 сентября" titleColor='orange' />
    </div>
  );
}

export default App;
