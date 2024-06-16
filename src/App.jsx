import { useEffect, useState } from "react";
import { Moon, Sun, Search } from "lucide-react";
import DisplayWeatherData from "./components/displayWeatherData";
import getTimeAndDate from "./utilities/getTimeAndDate";

function App() {
  const [searchValue, setSearchValue] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherError, setWeatherError] = useState(null);
  const [dateTime, setDateTime] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const getWeatherData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=88c90d955a9378d62ac5b95525ebb155`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      console.log(data);
      setWeatherData(data);
      setWeatherError(null);
      const { day, month, year, hours, minutes, seconds, ampm, weekDay } =
        getTimeAndDate(data.dt);
      setDateTime({ day, month, year, hours, minutes, seconds, ampm, weekDay });
    } catch (error) {
      setWeatherError(error.message);
      console.log("Error:", error.message);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();

    console.log(searchValue);
    getWeatherData();
  };

  const handleSearchInput = (event) => setSearchValue(event.target.value);

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="main-container" data-theme={isDark ? "dark" : "light"}>
      <section className="weather-app-container">
        <header>
          <h1 className="tittle">Weather</h1>
          <button
            type="button"
            onClick={() => setIsDark(!isDark)}
            className="toggle-btn"
          >
            {isDark ? (
              <Sun color="#ffffff" />
            ) : (
              <Moon fill="#262726" color="#262726" />
            )}
          </button>
        </header>
        <div className="weather-container-wrapper">
          <form onSubmit={handleSearch}>
            <input
              type="search"
              value={searchValue}
              onChange={handleSearchInput}
              placeholder="Search by city name"
            />
            <button type="submit" className="search-btn">
              <Search size={20} />
            </button>
          </form>
          {weatherError && <small>City not found, try a different name.</small>}
          {weatherData !== null && (
            <DisplayWeatherData weatherData={weatherData} dateTime={dateTime} />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
