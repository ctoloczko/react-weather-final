import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";

export default function App() {
  return (
    <>
      {" "}
      <div className="Weather-app">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/celinatoloczko/">
            Celina Toloczko-Mastalerz
          </a>{" "}
          and is open-sourced on{" "}
          <a href="https://github.com/ctoloczko/react-weather-final">GitHub</a>{" "}
          and hosted on{" "}
          <a href="https://www.fluffyforecast.netlify.com">Netlify</a>.{" "}
        </footer>
      </div>
    </>
  );
}
