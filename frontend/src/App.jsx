import { React } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CardFilm from "./components/CardFilm";
import UserResponse from "./components/UserResponse";
import ApiAnswers from "./components/ApiAnswers";
import Score from "./components/Score";
import Footer from "./components/Footer";
import fakeData from "./data/fakeData.json"; // Fake data

function App() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <NavBar />
      <div className="w-full md:flex md:flex-row md:justify-center gap-10 ml-[191px]">
        <CardFilm testarr={fakeData.results[0]} />
        <div className="flex flex-col justify-end items-center">
          <UserResponse />
          <ApiAnswers />
          <Score />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
