import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import CardFilm from "./components/CardFilm";
import themes from "./data/film.json";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {Object.keys(themes).map((theme) => (
              <li key={theme}>
                <Link to={`/${theme}`}>{theme}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center justify-center content-center">
          <div className="flex-0 flex-auto order-0 self-auto">
            <Routes>
              {Object.entries(themes).map((theme) => (
                <Route
                  key={theme[0]}
                  path={`/${theme[0]}`}
                  element={
                    <CardFilm theme={theme[0]} img={theme[1].imageUrl} />
                  }
                />
              ))}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
