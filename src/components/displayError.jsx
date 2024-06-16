/* eslint-disable react/prop-types */
export default function DisplayErrorView({ errorMsg }) {
  return (
    <div className="error-container">
      <div className="error-img-container">
        <img src="/error-icon-32.png" alt="failed view icon" />
      </div>
      <h1>
        {errorMsg
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      <p>Try again with valid city name</p>
    </div>
  );
}
