import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CardTheme from "../components/CardTheme";

function HomePage({ themes, setThemeId }) {
  return (
    <div className="h-[60%] xl:ml-[191px] flex flex-col items-center">
      <h2 className="text-2xl text-center mb-16 text-secondary">
        Le 7ème art comme vous ne l'avez jamais{" "}
        <span className="blur-xs">VU</span> !
      </h2>
      <div className="max-w-[400px] md:max-w-[800px] md:w-[80%] flex flex-wrap justify-center gap-6 mb-6 self-center">
        {themes.map((theme) => {
          return (
            <Link to="/game" key={theme.id}>
              <CardTheme theme={theme} setThemeId={setThemeId} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

HomePage.propTypes = {
  themes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  setThemeId: PropTypes.func.isRequired,
};

export default HomePage;
