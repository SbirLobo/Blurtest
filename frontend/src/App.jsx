import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CardFilm from "./components/CardFilm";
import UserResponse from "./components/UserResponse";
import ApiAnswers from "./components/ApiAnswers";
import Score from "./components/Score";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const randomPage = Math.floor(Math.random() * 9) + 1;
  const randomFilm = Math.floor(Math.random() * 20);
  const API = `https://api.themoviedb.org/3/discover/movie?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR&sort_by=vote_count.desc&include_adult=false&page=${randomPage}`;
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});

  /* test suivant */
  const [next, setNext] = useState(false);

  useEffect(() => {
    axios.get(API).then((response) => {
      const movieData = response.data.results[randomFilm];
      const creditsAPI = `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR`;

      const moviePromise = axios.get(API);
      const creditsPromise = axios.get(creditsAPI);

      axios.all([moviePromise, creditsPromise]).then((responses) => {
        const movieResponse = responses[0];
        const creditsResponse = responses[1];

        setMovie(movieResponse.data.results[randomFilm]);
        setCredits(creditsResponse.data);
      });
    });
  }, [next]);

  const filmTitle = movie.title;
  const filmYear = movie.release_date ? movie.release_date.split("-")[0] : "";
  const filmDirector = credits.crew
    ? credits.crew.filter((crewItem) => crewItem.job === "Director")[0].name
    : "";
  const filmActing1 = credits.cast ? credits.cast[0].name : "";
  const filmActing2 = credits.cast ? credits.cast[1].name : "";

  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <NavBar />
      <div className="md:flex md:flex-row md:justify-center gap-10 xl:ml-[191px]">
        <CardFilm testarr={movie} />
        <div className="flex flex-col justify-end items-center">
          <UserResponse next={next} setNext={setNext} />
          <ApiAnswers
            filmTitle={filmTitle}
            filmYear={filmYear}
            filmDirector={filmDirector}
            filmActing1={filmActing1}
            filmActing2={filmActing2}
          />
          <Score />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
