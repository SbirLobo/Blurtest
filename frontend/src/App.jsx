import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/HomePage";
import JeuxComp from "./components/Jeux";
import Profile from "./pages/ProfilePage";
import Contact from "./pages/ContactPage";
import Rules from "./pages/RulesPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-primary flex flex-col justify-center items-center font-montserrat md:h-screen">
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes/:name/:id" element={<JeuxComp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
