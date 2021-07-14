import React from 'react';
import axios from 'axios';
import '../styling/weather.scss';


const Icon = (props) => {
    return (
        <img className = "icon" src = {`https://openweathermap.org/img/wn/${props.iconId}@2x.png`} />
    );
}

export default Icon;