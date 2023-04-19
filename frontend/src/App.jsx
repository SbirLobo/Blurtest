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
  const API = `https://api.themoviedb.org/3/movie/top_rated?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR&page=${randomPage}`;
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const filmId = movie.id;
  const creditsAPI = `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR`;

  useEffect(() => {
    axios
      .get(API)
      .then((response) => setMovie(response.data.results[randomFilm]));

    axios.get(creditsAPI).then((creditsResponse) => {
      setCredits(creditsResponse.data);
    });
  }, []);
  console.info(credits);
  const filmTitle = movie.title;
  const filmYear = movie.release_date ? movie.release_date.split("-")[0] : "";

  // const filmDirector = creditsAPI.crew.filter(
  //   (crewItem) => crewItem.job === "Director"
  // )[0].name;
  // const filmActing1 = creditsAPI.cast[0].name;
  // const filmActing2 = creditsAPI.cast[1].name;

  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <NavBar />
      <div className="w-full md:flex md:flex-row md:justify-center gap-10 xl:ml-[191px]">
        <CardFilm testarr={movie} />
        <div className="flex flex-col justify-end items-center">
          <UserResponse />
          <ApiAnswers
            filmTitle={filmTitle}
            filmYear={filmYear}
            // filmDirector={filmDirector}
            // filmActing1={filmActing1}
            // filmActing2={filmActing2}
          />
          <Score />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
