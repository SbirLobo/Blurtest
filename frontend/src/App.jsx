import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CardFilm from "./components/CardFilm";
import UserResponse from "./components/UserResponse";
import ApiAnswers from "./components/ApiAnswers";
import Score from "./components/Score";
import Footer from "./components/Footer";
import fakeData from "./data/fakeData.json";
import credit from "./data/fakeDataCredits.json";
import "./App.css";

const API = fakeData.results[0];
//  const filmId = API.id;
//  const credit = `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=7d7003faa5a830e64ad23a79fc1e7657&language=fr-FR`;
const fakeCredit = credit;
const filmTitle = API.title;
const filmYear = API.release_date.split("-")[0];
const filmDirector = fakeCredit.crew.filter(
  (crewItem) => crewItem.job === "Director"
)[0].name;
const filmActing1 = fakeCredit.cast[0].name;
const filmActing2 = fakeCredit.cast[1].name;

function App() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <NavBar />
      <div className="w-full md:flex md:flex-row md:justify-center gap-10 xl:ml-[191px]">
        <CardFilm testarr={fakeData.results[0]} />
        <div className="flex flex-col justify-end items-center">
          <UserResponse />
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
