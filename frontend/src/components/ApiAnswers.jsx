import PropTypes from "prop-types";

function ApiAnswers({
  filmTitle,
  filmYear,
  filmDirector,
  filmActing1,
  filmActing2,
}) {
  return (
    <section className="m-5 flex flex-col bg-secondary rounded w-[70%] md:w-[90%] xl:w-full">
      <div className="neumorphResponse">
        <p className="md:text-xl">
          Titre : <span className="font-bold">{filmTitle}</span>{" "}
        </p>
      </div>
      <div className="neumorphResponse">
        <p className="md:text-xl">
          Année : <span className="font-bold">{filmYear}</span>
        </p>
      </div>
      <div className="neumorphResponse">
        <p className="md:text-xl">
          Réalisateur : <span className="font-bold">{filmDirector}</span>
        </p>
      </div>
      <div className="neumorphResponse">
        <p className="md:text-xl">Acteurs Principaux :</p>
        <p className="md:text-xl font-bold">{filmActing1}</p>
        <p className="md:text-xl font-bold">{filmActing2}</p>
      </div>
    </section>
  );
}

ApiAnswers.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  filmYear: PropTypes.string.isRequired,
  filmDirector: PropTypes.string.isRequired,
  filmActing1: PropTypes.string.isRequired,
  filmActing2: PropTypes.string.isRequired,
};

export default ApiAnswers;
