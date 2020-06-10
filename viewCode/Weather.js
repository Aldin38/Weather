import React, { useState } from 'react';
import moment from 'moment';
import "./Weather.css"





const api = {
  key: "2c51f99af252cadfc2f0892a7824bd59",
  base: "https://api.openweathermap.org/data/2.5/"
} 

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

const search = evt =>{
if(evt.key === "Enter"){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
   .then(res => res.json())
   .then(result => { 
     setWeather(result);
     setQuery('');
   console.log(result);
    console.log(result.dt)

  
  });
}
}

const day = () =>{
  
    if(weather.weather[0].main === "Rain"){
     return 'app rainy';
    }else if (weather.weather[0].main === "Clouds"){
      return 'app cloudy'
    }else if (weather.weather[0].main === "Snow"){
      return 'app snowy'
    }else if (weather.weather[0].main === "Thunderstorm"){
      return 'app thunder-rain'
    }else {return'app'};
  }

  const night = () =>{

    if(weather.weather[0].main === "Rain"){
      return 'app dark-rainy';
     }else if (weather.weather[0].main === "Clouds"){
       return 'app dark-clouds'
     }else if (weather.weather[0].main === "Snow"){
       return 'app dark-snowy'
     }else if (weather.weather[0].main === "Thunderstorm"){
       return 'app dark-thunder-rain'
     }else {return'app dark-clear'};
    
  }

  const imgChecker = () =>{
    if( weather.dt < weather.sys.sunset){
        return  day();
    }else return night();
  }


const dataBuilder = (d) => {

   let days =["Sunday", "Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];



  return `${day} `

}

  return (
    <div className={(typeof weather.main != "undefined")  ? imgChecker(): "app"}>




      
      <div className="main">
        <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search" onChange={e => setQuery(e.target.value)} value={query} onKeyDownCapture={search}></input>
        </div>
        {(typeof weather.main != "undefined") ? (
          <div> 
        <div className="location-box">
  <div className="location">{weather.name}, {weather.sys.country} </div>
            <div className="date">
              {dataBuilder(new Date())}{ moment().format('LL')}
              </div>

        </div>
        <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp )}°C</div>
         
        <div className="weather">{weather.weather[0].main}</div>
        </div>
        </div>
         ) : ('')}
        
        
 </div>
    </div>
  );
}

export default App;
