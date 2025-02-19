import React, {useEffect, useState} from 'react';

import './style.css';
import Weathercard from './Weathercard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune");
const[tempInfo, setTempInfo] = useState({});
    const getWeatherInfo = async() => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&
            units=metric&appid=589102e04824d3b874623ae6d48357dc`;
         
            let res = await  fetch(url);
            let data = await  res.json();
           const {temp, humidity, pressure} = data.main;
           const {main: weathermood} = data.weather[0];
           const { name } = data;
           const { speed } = data.wind;
           const { country, sunset } = data.sys;
           const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
           };

            console.log(temp);
            console.log(data);
            setTempInfo(myNewWeatherInfo)

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

  return (
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={ searchValue}
            onChange={(e) =>setSearchValue(e.target.value)}/>
            
            <button className='searchButton' type="button"  onClick={getWeatherInfo}>
                search

            </button>
          
        </div>
    
      
    </div>
  
         
<Weathercard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp;
