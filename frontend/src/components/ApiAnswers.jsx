import PropTypes from "prop-types";

function ApiAnswers({
  filmTitle,
  filmYear,
  filmDirector,
  filmActing1,
  filmActing2,
  showResultTitle,
  showResultYear,
  showResultReal,
  showResultActing1,
  showResultActing2,
}) {
  return (
    <section className="p-3 m-5 flex flex-col bg-secondary rounded w-[70%] md:w-[90%] xl:w-full xl:max-w-[500px]">
      <div className="neumorphResponse md:h-14">
        <p className="md:text-xl">
          Titre :
          <span className={`font-bold ${showResultTitle}`}> {filmTitle}</span>
        </p>
      </div>
      <div className="neumorphResponse">
        <p className="md:text-xl">
          Année :{" "}
          <span className={`font-bold ${showResultYear}`}> {filmYear}</span>
        </p>
      </div>
      <div className="neumorphResponse">
        <p className="md:text-xl">
          Réalisateur :{" "}
          <span className={`font-bold ${showResultReal}`}>{filmDirector}</span>
        </p>
      </div>
      <div className="neumorphResponse h-[57.5px] md:h-[92px] xl:h-[84]">
        <p className="md:text-xl">Acteurs Principaux :</p>
        <p className={`md:text-xl font-bold ${showResultActing1}`}>
          {filmActing1}
        </p>
        <p className={`md:text-xl font-bold ${showResultActing2}`}>
          {filmActing2}
        </p>
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
  showResultTitle: PropTypes.string.isRequired,
  showResultYear: PropTypes.string.isRequired,
  showResultReal: PropTypes.string.isRequired,
  showResultActing1: PropTypes.string.isRequired,
  showResultActing2: PropTypes.string.isRequired,
};

export default ApiAnswers;
