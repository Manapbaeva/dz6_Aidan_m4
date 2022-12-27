import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fbdb2478f680f2a4663c710fcce24342{API key}https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
    const searchLocation = (event) => {
      if (event.key === 'Enter') {
          axios.get(url).then((response) => {
              setData(response.data);
              console.log(response.data);
          });
          setLocation("")
          console.log(data)
      }
    };
  return (
    <div className="app">
      <div className="search">
        <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter the name"
            type="text"
        />
      </div>
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°С</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].description}</p> : null}
                </div>
            </div>
            {data.name !== undefined && (
                <div className="bottom">
                    <div className="feels">
                        {data.main ? (
                        <p className="bold">{data.main.feels_like.toFixed()}°С</p>
                            ) : null}
                        <p>Чувствуется как</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className="bold">{data.main.humidity%</p> : null}
                        <p>Влажность</p>
                    </div>
                    <div className="wind">
                        {data.wind ? (
                        <p className="bold">{data.wind.speed.toFixed()} м/с</p>
                        ) : null}
                        <p>Скорость ветра</p>
                    </div>
                </div>
            )}

        </div>
    </div>
  );
}

export default App;
