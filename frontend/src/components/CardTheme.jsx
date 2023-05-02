import PropTypes from "prop-types";

function CardTheme({ theme, setThemeId }) {
  const handleClick = () => {
    setThemeId(theme.id);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className="h-48 w-[100%] max-w-[176px] md:w-44 bg-secondary rounded flex flex-col"
    >
      <div className="flex-1">
        <img className="rounded" src={theme.img} alt="" />
      </div>
      <p className="text-center h-12 flex-2 flex items-center self-center">
        {theme.name}
      </p>
    </button>
  );
}

CardTheme.propTypes = {
  theme: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
  setThemeId: PropTypes.func.isRequired,
};

export default CardTheme;
