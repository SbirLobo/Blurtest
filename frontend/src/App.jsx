import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import HomePage from "./pages/HomePage";
import Jeux from "./components/Jeux";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import RulesPage from "./pages/RulesPage";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<Jeux />} />
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
