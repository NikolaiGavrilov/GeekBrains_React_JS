import * as React from 'react';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import './TemperatureConverter.css'

function TemperatureConverter() {

    const [tempCelsius, setTempCelsius] = useState('');
    const [tempFahrenheit, setTempFahrenheit] = useState('');

    const updateCelsius = (e) => {
        const tempCelsius = e.target.value;
        setTempCelsius(tempCelsius);
        const tempFahrenheit = (tempCelsius * 1.8) + 32;
        setTempFahrenheit(tempFahrenheit);
    }

    const updateFahrenheit = (e) => {
        const tempFahrenheit = e.target.value;
        setTempFahrenheit(tempFahrenheit);
        const tempCelsius = (tempFahrenheit - 32) / 1.8;
        setTempCelsius(tempCelsius);
    };

    return (
        <div className='temperature-converter'>
            <h2>Конвертер температур</h2>
            <TextField
                value={tempCelsius}
                onInput={updateCelsius}
                label="Температура по Цельсию"
                variant="outlined"
                type="number"
            />
            <TextField
                value={tempFahrenheit}
                onInput={updateFahrenheit}
                label="Температура по Фаренгейту"
                variant="outlined"
                type="number"
            />
        </div>
    );
}

TextField.propTypes = {
    value: TextField.number,
}

export default TemperatureConverter;