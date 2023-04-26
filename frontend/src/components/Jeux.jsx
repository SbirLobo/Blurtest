import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import CardFilm from "./CardFilm";
import UserResponse from "./UserResponse";
import ApiAnswers from "./ApiAnswers";
import Score from "./Score";

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

export default function Jeux() {
  //   const { id, name } = useParams(); // ID DU GENRE
  const [next, setNext] = useState(true);
  const [submitResponse, setSubmitResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showResultTitle, setShowResultTitle] = useState("hidden");
  const [showResultYear, setShowResultYear] = useState("hidden");
  const [showResultReal, setShowResultReal] = useState("hidden");
  const [showResultActing1, setShowResultActing1] = useState("hidden");
  const [showResultActing2, setShowResultActing2] = useState("hidden");

  const [index, setIndex] = useState(0);
  const API = `https://api.themoviedb.org/3/discover/movie?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR&sort_by=vote_count.desc&include_adult=false&page=${pageIndex[index]}`;
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
    }, 45000);

    return () => clearInterval(timer);
  }, [next]);

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

  if (submitResponse.toLowerCase() === filmTitle.toLowerCase()) {
    setShowResultTitle("");
    setSubmitResponse("");
  }
  if (submitResponse.toLowerCase() === filmYear.toLowerCase()) {
    setShowResultYear("");
    setSubmitResponse("");
  }
  if (submitResponse.toLowerCase() === filmDirector.toLowerCase()) {
    setShowResultReal("");
    setSubmitResponse("");
  }
  if (submitResponse.toLowerCase() === filmActing1.toLowerCase()) {
    setShowResultActing1("");
    setSubmitResponse("");
  }
  if (submitResponse.toLowerCase() === filmActing2.toLowerCase()) {
    setShowResultActing2("");
    setSubmitResponse("");
  }

  return (
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
          showResultTitle={showResultTitle}
          showResultYear={showResultYear}
          showResultReal={showResultReal}
          showResultActing1={showResultActing1}
          showResultActing2={showResultActing2}
        />
        <Score />
      </div>
    </div>
  );
}
export { Jeux };
