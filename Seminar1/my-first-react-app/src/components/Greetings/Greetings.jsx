function Greetings() {
    let timeRange;
    const hours = new Date().getHours();
    if (hours > 5 && hours < 12) {
        timeRange = 'утро';
    } else if (hours > 12 && hours < 16) {
        timeRange = 'день';
    } else if (hours > 16 && hours < 24) {
        timeRange = 'вечер';
    }  else {
        timeRange = 'ночь';
    }
    return (
    <div className='App'>
        <h1>Привет, React!</h1>
        <h2>Сейчас на дворе {timeRange}</h2>
        </div>)
};

export default Greetings;