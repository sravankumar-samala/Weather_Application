/* eslint-disable react/prop-types */

export default function DisplayWeatherData({ weatherData, dateTime }) {
  return (
    <div className="weather-display-container">
      <h2 className="city-name">{weatherData?.name}</h2>
      <div className="display-temperature">
        <img
          src={`http://openweathermap.org/img/w/${weatherData?.weather[0]?.icon}.png`}
          alt="weather icon"
        />
        <h2 className="temperature">
          {Math.round(weatherData?.main?.temp)}&deg;C
        </h2>
      </div>
      <div className="time-date-display-container">
        <h2 className="time">
          {`${dateTime.hours}:${dateTime.minutes}`}
          <span>{dateTime.ampm}</span>
        </h2>
        <p className="date">{`${dateTime.weekDay} ${dateTime.day} ${dateTime.month}, ${dateTime.year}`}</p>
      </div>
    </div>
  );
}
