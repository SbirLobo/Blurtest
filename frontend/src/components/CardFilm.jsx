import PropTypes from "prop-types";

function CardFilm({ testarr, blurAnimation, themeId, themes }) {
  const theme = themes.filter((e) => e.id === themeId)[0].name;
  return (
    <div className="cardfilm md:mt-0 xl:w-[442px]">
      <h3 className="cardfilmTitle h-7 md:text-2xl mb-5 xl:hidden font-bold">
        {theme}
      </h3>

      <div className=" mt-3 mb-2 overflow-hidden rounded xl:w-[400px]">
        <img
          className={`${blurAnimation} w-52 rounded md:w-80 md:mt-0 xl:w-fit`}
          src={`https://image.tmdb.org/t/p/w500${testarr.poster_path}`}
          alt="affiche film"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        />
      </div>
    </div>
  );
}

CardFilm.propTypes = {
  testarr: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
  blurAnimation: PropTypes.string,
}.isRequired;

export default CardFilm;
