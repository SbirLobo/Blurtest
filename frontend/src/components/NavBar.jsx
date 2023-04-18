import React, { useState } from "react";

function NavBar() {
  const [active, setActive] = useState("");

  function handleClick() {
    setActive(active === "" ? "active" : "");
  }
  return (
    <>
      <label className="absolute top-3 right-5 z-20 xl:hidden">
        <input type="checkbox" onClick={handleClick} />
        <span>{}</span>
        <span>{}</span>
        <span>{}</span>
      </label>
      <nav
        className={`bg-secondary absolute flex flex-col max-xl:right-0 top-16 text-center rounded-bl-md menu ${active} xl:deskmenu xl:active xl:bg-primary xl:text-secondary`}
      >
        <a href="." className="p-5 xl:p-8 hover:text-tertiary">
          Accueil
        </a>
        <a href="." className="p-5 xl:p-8 hover:text-tertiary">
          Profil
        </a>
        <a href="." className="p-5 xl:p-8 hover:text-tertiary">
          Règles du jeu
        </a>
        <a href="." className="p-5 xl:p-8 hover:text-tertiary">
          Contact
        </a>
      </nav>
    </>
  );
}

export default NavBar;
