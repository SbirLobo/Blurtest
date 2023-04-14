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
    <div className="h-screen bg-primary flex flex-col justify-center">
      <Header />
      <CardFilm />
      <UserResponse />
      <div className="bg-primary flex flex-col w-11/12">
        <Responses />
        <Score />
      </div>
      <Footer />
    </div>
  );
}

export default App;
