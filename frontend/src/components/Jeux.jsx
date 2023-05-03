import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import CardFilm from "./CardFilm";
import UserResponse from "./UserResponse";
import ApiAnswers from "./ApiAnswers";
import Score from "./Score";

function Jeux({ themeId, themes }) {
  const pageIndex = [];
  const filmIndex = [];
  for (let i = 0; i < 7; i += 1) {
    let randomPage = 0;
    let randomFilm = 0;
    do {
      if (themeId === "") {
        randomPage = Math.floor(Math.random() * 99) + 1;
      } else if (themeId === 27 || themeId === 10749) {
        randomPage = Math.floor(Math.random() * 19) + 1;
      } else {
        randomPage = Math.floor(Math.random() * 29) + 1;
      }
    } while (pageIndex.includes(randomPage));
    do {
      randomFilm = Math.floor(Math.random() * 20);
    } while (filmIndex.includes(randomFilm));
    pageIndex.push(randomPage);
    filmIndex.push(randomFilm);
  }
  const [next, setNext] = useState(true);
  const [submitResponse, setSubmitResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showResultTitle, setShowResultTitle] = useState("hidden");
  const [showResultYear, setShowResultYear] = useState("hidden");
  const [showResultReal, setShowResultReal] = useState("hidden");
  const [showResultActing1, setShowResultActing1] = useState("hidden");
  const [showResultActing2, setShowResultActing2] = useState("hidden");
  const [score, setScore] = useState(0);
  const [hiddenEndGame, setHiddenEndGame] = useState("");
  const [visibleEndGame, setVisibleEndGame] = useState("hidden");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const [index, setIndex] = useState(0);
  const API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=vote_count.desc&include_adult=false&page=${pageIndex[index]}&with_genres=${themeId}`;
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [blurAnimation, setBlurAnimation] = useState("affiche");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitResponse(e.target[0].value);
    e.target.reset();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setShowResultTitle("");
      setShowResultYear("");
      setShowResultReal("");
      setShowResultActing1("");
      setShowResultActing2("");
      if (index === 7) {
        setHiddenEndGame("hidden");
        setVisibleEndGame("");
      }
    }, 45000);

    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    axios.get(API).then((response) => {
      const movieData = response.data.results[filmIndex[index]];
      const creditsAPI = `https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=${API_KEY}&language=fr-FR`;

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
          setShowResultTitle("hidden");
          setShowResultYear("hidden");
          setShowResultReal("hidden");
          setShowResultActing1("hidden");
          setShowResultActing2("hidden");
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

  if (
    submitResponse
      .toLowerCase()
      .replace(": ", "")
      .replace(" - ", " ")
      .replace("partie ", "")
      .replace("partie", "")
      .replace("(", "")
      .replace(")", "")
      .replace(", ", " ")
      .trim() ===
      filmTitle
        .toLowerCase()
        .replace(": ", "")
        .replace(" - ", " ")
        .replace("partie ", "")
        .replace("partie", "")
        .replace("(", "")
        .replace(")", "")
        .replace(", ", " ")
        .trim() &&
    showResultTitle === "hidden"
  ) {
    setShowResultTitle("");
    setSubmitResponse("");
    setScore(score + 100);
  }
  if (
    submitResponse.toLowerCase() === filmYear.toLowerCase() &&
    showResultYear === "hidden"
  ) {
    setShowResultYear("");
    setSubmitResponse("");
    setScore(score + 50);
  }
  if (
    submitResponse.toLowerCase() === filmDirector.toLowerCase() &&
    showResultReal === "hidden"
  ) {
    setShowResultReal("");
    setSubmitResponse("");
    setScore(score + 50);
  }
  if (
    submitResponse.toLowerCase() === filmActing1.toLowerCase() &&
    showResultActing1 === "hidden"
  ) {
    setShowResultActing1("");
    setSubmitResponse("");
    setScore(score + 60);
  }
  if (
    submitResponse.toLowerCase() === filmActing2.toLowerCase() &&
    showResultActing2 === "hidden"
  ) {
    setShowResultActing2("");
    setSubmitResponse("");
    setScore(score + 40);
  }

  return (
    <div className="w-full xl:w-auto md:flex md:flex-row md:justify-center gap-10 xl:ml-[191px]">
      <CardFilm
        testarr={movie}
        blurAnimation={blurAnimation}
        themeId={themeId}
        themes={themes}
      />
      <div className="flex flex-col justify-end items-center">
        <UserResponse
          next={next}
          setNext={setNext}
          handleSubmit={handleSubmit}
          setBlurAnimation={setBlurAnimation}
          hiddenEndGame={hiddenEndGame}
          visibleEndGame={visibleEndGame}
          score={score}
          index={index}
          themeId={themeId}
          themes={themes}
        />
        <ApiAnswers
          filmTitle={filmTitle}
          filmYear={filmYear}
          filmDirector={filmDirector}
          filmActing1={filmActing1}
          filmActing2={filmActing2}
          showResultTitle={showResultTitle}
          showResultYear={showResultYear}
          showResultReal={showResultReal}
          showResultActing1={showResultActing1}
          showResultActing2={showResultActing2}
        />
        <Score score={score} />
      </div>
    </div>
  );
}

Jeux.propTypes = {
  themeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  themes: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Jeux;
