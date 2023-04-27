import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full h-16 bg-secondary p-2 flex items-center absolute top-0 z-10">
      <Link to="/">
        <img
          src="./assets/Blogo.png"
          alt="Blur Logo"
          className="h-16 mr-2 p-1"
        />
      </Link>
      <Link to="/">
        <h1 className="text-5xl font-playfair">
          <span className="blur-xs">Blur</span>test
        </h1>
      </Link>
    </header>
  );
}

export default Header;
