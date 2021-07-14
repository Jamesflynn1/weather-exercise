import React from 'react';
import ReactDOM from 'react-dom';
import './styling/index.scss';
import Weather from './components/Weather';


export const WeatherContext = React.createContext('');

const timeInADay = 8;

const App = () => {
  return(  <React.StrictMode>
    <WeatherContext.Provider value = {"london"} timePeriod = {timeInADay}>
    <Weather />
    </ WeatherContext.Provider>
  </React.StrictMode>);
};
ReactDOM.render(<App/>,
  document.getElementById('root')
);