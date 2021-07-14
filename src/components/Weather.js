import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {WeatherContext} from '../index';
import '../styling/weather.scss';
import Icon from './Icon';
import CitySelector from  './CitySelector';


const Weather = () => {
  const [weather, updateWeather] = useState(new Array(5));
  const [icon, updateIcons] = useState(new Array(5));
  const [cities, updateCities] = useState(new Array(0));
  
  const city = React.useContext(WeatherContext);
  const [searchedCity, updateSearchedCity] = React.useState(city);

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&cnt=48&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`).then(res => {
      console.log(res)
      let weatherResults = new Array(5);
      let iconResults = new Array(5);
      for(let i = 0;i<5; i++){
        weatherResults[i] = res.data.list[i*8].weather[0].description;
        iconResults[i] = res.data.list[i*8].weather[0].icon;
        console.log(i);

      }

      updateWeather(weatherResults);
      updateIcons(iconResults);
      if (!cities.some( c => c === searchedCity )){
        updateCities([...cities, searchedCity]);
      }
    })
  }, [searchedCity])

  return (
    <div className="background">
    <div data-testid="weather" className="weather">
      {weather.map((cWeather) =>       {
      <div>The aaaa weather in {city} is: {cWeather}</div>
}
)}    <h1>{searchedCity}</h1>

      {weather.length != 0}{<div>
      <div className = "text">The current weather in {searchedCity} is: {weather[0]} 
      <Icon iconId = {icon[0]} />
      </div>

      <div>The weather tomorrow in {searchedCity} is: {weather[1]}
      <Icon iconId = {icon[1]} />
      </div>

      <div>The weather in 3 days time in {searchedCity} is: {weather[2]}
      <Icon iconId = {icon[2]} />
      </div>

      <div>The weather in 4 days time in {searchedCity} is: {weather[3]}
      <Icon iconId = {icon[3]} />
      </div>

      <div>The weather in 5 days time in {searchedCity} is: {weather[4]}
      <Icon iconId = {icon[4]} />
      </div>
      </div>
}
      <div className="search">
    <input type="text" value={searchedCity} onChange={(e) => updateSearchedCity(e.target.value)} />

</div>
{console.log(city)}
    <CitySelector cities = {cities} citySelected = {(city)=>{
      console.log(city);
      updateSearchedCity(city);
      }}/>
    </div>

    </div>
  );
}

export default Weather;
