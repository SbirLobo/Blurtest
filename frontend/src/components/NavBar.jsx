import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ active, setActive, handleClickLink }) {
  const handleClick = () => {
    setActive(active === "" ? "active" : "");
  };

  return (
    <>
      <label className="absolute top-3 right-5 z-20 xl:hidden">
        <input
          type="checkbox"
          onChange={handleClick}
          checked={active === "active"}
        />
        <span>{}</span>
        <span>{}</span>
        <span>{}</span>
      </label>
      <nav
        className={`bg-secondary absolute flex flex-col max-xl:right-0 top-16 text-center rounded-bl-md menu ${active} xl:deskmenu xl:active xl:bg-primary xl:text-secondary`}
      >
        <Link
          to="/"
          className="p-5 xl:p-8 hover:text-tertiary"
          onClick={handleClickLink}
        >
          Accueil
        </Link>
        <Link
          to="/profile"
          className="p-5 xl:p-8 hover:text-tertiary"
          onClick={handleClickLink}
        >
          Profil
        </Link>
        <Link
          to="/rules"
          className="p-5 xl:p-8 hover:text-tertiary"
          onClick={handleClickLink}
        >
          Règles du jeu
        </Link>
        <Link
          to="/contact"
          className="p-5 xl:p-8 hover:text-tertiary"
          onClick={handleClickLink}
        >
          Contact
        </Link>
      </nav>
    </>
  );
}

NavBar.propTypes = {
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
  handleClickLink: PropTypes.func.isRequired,
};

export default NavBar;
