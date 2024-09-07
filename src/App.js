import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Weather from "./Weather";

export default function App() {
  return (
    <>
      {" "}
      <div className="Weather-app">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/celinatoloczko/"
            target="_blank"
            rel="noreferrer"
          >
            Celina Toloczko-Mastalerz
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/ctoloczko/react-weather-final"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://fluffyforecast.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .{" "}
        </footer>
      </div>
    </>
  );
}
