import React from "react";
import "./App.css";
import Header from "./components/Header";
import CardFilm from "./components/CardFilm";
import UserResponse from "./components/UserResponse";
import Responses from "./components/Responses";
import Score from "./components/Score";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <div className="w-full md:flex md:flex-row md:justify-center">
        <CardFilm />
        <div className="flex flex-col justify-center items-center">
          <UserResponse />
          <Responses />
          <Score />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
