import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jeux from "./components/Jeux";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import RulesPage from "./pages/RulesPage";
import "./App.css";

function App() {
  const themes = [
    {
      id: "",
      name: "Populaire",
      img: "./assets/themes/img_general.jpg",
    },
    {
      id: 12,
      name: "Aventure",
      img: "./assets/themes/img_aventure.jpg",
    },
    {
      id: 18,
      name: "Drame",
      img: "./assets/themes/img_drame.jpg",
    },
    {
      id: 14,
      name: "Fantastique",
      img: "./assets/themes/img_fantasy.jpg",
    },
    {
      id: 27,
      name: "Horreur",
      img: "./assets/themes/img_horror.jpg",
    },
    {
      id: 10749,
      name: "Romance",
      img: "./assets/themes/img_romance.jpg",
    },
  ];
  const [themeId, setThemeId] = useState("");
  return (
    <Router>
      <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<HomePage themes={themes} setThemeId={setThemeId} />}
          />
          <Route
            path="/game"
            element={<Jeux themeId={themeId} themes={themes} />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
