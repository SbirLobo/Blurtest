import React, { useState } from "react";

function NavBar() {
  const [active, setActive] = useState("");

  function handleClick() {
    setActive(active === "" ? "active" : "");
  }
  return (
    <>
      <label className="absolute top-3 right-5 z-20">
        <input type="checkbox" onClick={handleClick} />
        <span>{}</span>
        <span>{}</span>
        <span>{}</span>
      </label>
      <nav
        className={`bg-secondary absolute flex flex-col right-0 top-16 text-center rounded-bl-md menu ${active}`}
      >
        <a href="." className="p-5">
          Accueil
        </a>
        <a href="." className="p-5">
          Profil
        </a>
        <a href="." className="p-5">
          Règles du jeu
        </a>
        <a href="." className="p-5">
          Contact
        </a>
      </nav>
    </>
  );
}

export default NavBar;
