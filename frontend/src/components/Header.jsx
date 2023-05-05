import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ handleClickLink }) {
  return (
    <header className="w-full h-16 bg-secondary p-2 flex items-center absolute top-0 z-10">
      <Link to="/" onClick={handleClickLink}>
        <img
          src="../assets/Blogo.png"
          alt="Blur Logo"
          className="h-16 mr-2 p-1"
        />
      </Link>
      <Link to="/" onClick={handleClickLink}>
        <h1 className="text-5xl font-playfair">
          <span className="blur-xs">Blur</span>test
        </h1>
      </Link>
    </header>
  );
}

Header.propTypes = {
  handleClickLink: PropTypes.func.isRequired,
};

export default Header;
