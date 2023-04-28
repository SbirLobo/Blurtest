import PropTypes from "prop-types";

function CardTheme({ theme }) {
  return (
    <div className="h-48 w-[40%] max-w-[176px] md:w-44 bg-secondary rounded flex flex-col">
      <div className="p-2 flex-1">
        <img className="rounded" src={theme.img} alt="" />
      </div>
      <p className="text-center h-12 flex-2 flex self-center">{theme.name}</p>
    </div>
  );
}

CardTheme.propTypes = {
  theme: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  }).isRequired,
};

export default CardTheme;
