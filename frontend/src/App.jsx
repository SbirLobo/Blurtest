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

const pageIndex = [];
const filmIndex = [];
for (let i = 0; i < 7; i += 1) {
  let randomPage = 0;
  let randomFilm = 0;
  do {
    randomPage = Math.floor(Math.random() * 99) + 1;
  } while (pageIndex.includes(randomPage));
  do {
    randomFilm = Math.floor(Math.random() * 20);
  } while (filmIndex.includes(randomFilm));
  pageIndex.push(randomPage);
  filmIndex.push(randomFilm);
}

function App() {
  const [submitResponse, setSubmitResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitResponse(e.target[0].value);
    e.target.reset();
  };

  const [index, setIndex] = useState(0);
  const API = `https://api.themoviedb.org/3/discover/movie?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR&sort_by=vote_count.desc&include_adult=false&page=${pageIndex[index]}`;
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [blurAnimation, setBlurAnimation] = useState("affiche");

  /* Question suivante */
  const [next, setNext] = useState(true);

  useEffect(() => {
    axios.get(API).then((response) => {
      const movieData = response.data.results[filmIndex[index]];
      const creditsAPI = `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR`;

      const moviePromise = axios.get(API);
      const creditsPromise = axios.get(creditsAPI);

      axios
        .all([moviePromise, creditsPromise])
        .then((responses) => {
          const movieResponse = responses[0];
          const creditsResponse = responses[1];

          setMovie(movieResponse.data.results[filmIndex[index]]);
          setCredits(creditsResponse.data);
          setBlurAnimation("affiche");
          setIndex(index + 1);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  }, [next]);

  if (isLoading) return <div>Loading...</div>;

  const filmTitle = movie.title;
  const filmYear = movie.release_date.split("-")[0];
  const filmDirector = credits.crew.filter(
    (crewItem) => crewItem.job === "Director"
  )[0].name;
  const filmActing1 = credits.cast[0].name;
  const filmActing2 = credits.cast[1].name;

  if (submitResponse === filmTitle) {
    return null;
  }

  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <NavBar />
      <div className="w-full xl:w-auto md:flex md:flex-row md:justify-center gap-10 xl:ml-[191px]">
        <CardFilm testarr={movie} blurAnimation={blurAnimation} />
        <div className="flex flex-col justify-end items-center">
          <UserResponse
            next={next}
            setNext={setNext}
            handleSubmit={handleSubmit}
            setBlurAnimation={setBlurAnimation}
          />
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
