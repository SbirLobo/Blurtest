import PropTypes from "prop-types";

function UserResponse({
  next,
  setNext,
  handleSubmit,
  setBlurAnimation,
  hiddenEndGame,
  visibleEndGame,
  score,
  index,
  themeId,
  themes,
}) {
  const handleClick = () => {
    setNext(!next);
    if (index !== 7) {
      setBlurAnimation(null);
    }
  };

  const theme = themes.filter((e) => e.id === themeId)[0].name;
  let endText = "";
  if (score === 0) {
    endText =
      "Tu es certainement plus doué dans d'autres domaines... Mais, c'est officiel, tu es NUL à ce jeu !";
  } else if (score < 200) {
    endText = "As-tu bien compris le principe du jeu ?";
  } else if (score < 500) {
    endText = "Oh, tu vois flou ?!";
  } else if (score < 800) {
    endText = "Pas mal... Mais certains joueurs sont bien meilleurs que toi !";
  } else if (score < 1000) {
    endText = "Bravo, c'est une belle performance !";
  } else if (score < 1300) {
    endText =
      "Incroyable! Essaie un autre thème pour tester tes connaissances.";
  } else if (score < 1600) {
    endText =
      "Les concepteurs te saluent bien bas, Ô grand maître du 7ème art!";
  } else if (score < 1900) {
    endText = "Hallucinant ! Tu figure au Panthéon du Blurtest désormais.";
  } else if (score < 2100) {
    endText =
      "Quelle puissance, quelle fougue, quel talent ! Félicitations, tu es sans conteste un expert.";
  } else {
    endText =
      "2100 ! Le score maximum ! Merci, bravo... C'est tellement d'émotions !";
  }
  return (
    <div className="infoBlockXl">
      <h3 className="cardfilmTitle h-10 md:text-2xl mb-[5rem] max-xl:hidden font-bold">
        {theme}
      </h3>
      <p
        className={`text-3xl font-bold text-secondary mb-5 flex justify-center ${visibleEndGame}`}
      >
        Good Game !
      </p>
      <p
        className={`text-center italic text-xl text-secondary mb-5 flex justify-center w-[70%] md:w-[90%] xl:w-full xl:max-w-[500px] ${visibleEndGame}`}
      >
        {endText}
      </p>
      <form
        className="inputButton md:inputButtonDesktop md:w-[90%]"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="response"
          name="response"
          placeholder="Une idée ?"
          className={`inputResponse md:text-xl ${hiddenEndGame}`}
        />
        <div className="okArrow md:okArrowDesktop">
          <button
            type="submit"
            className={`okButton hover:okButtonHover md:okButtonDesktop md:text-xl ${hiddenEndGame}`}
          >
            Ok
          </button>
          <button
            type="button"
            onClick={handleClick}
            className={`${
              index === 7 ? "hidden" : ""
            } buttonArrow md:buttonArrowDesktop ${hiddenEndGame}`}
          >
            <img
              className="arrowNext md:arrowNextDesktop"
              src="../assets/chevron-forward-outline.svg"
              alt="Flèche suivante"
            />
          </button>
          <div
            className={`${
              index === 7 ? "" : "hidden"
            } buttonArrow md:buttonArrowDesktop ${hiddenEndGame}`}
          >
            <img
              className="arrowNext md:arrowNextDesktop"
              src="../assets/chevron-forward-inactive.svg"
              alt="Flèche suivante"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

UserResponse.propTypes = {
  next: PropTypes.bool.isRequired,
  setNext: PropTypes.func.isRequired,
  setBlurAnimation: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  hiddenEndGame: PropTypes.string.isRequired,
  visibleEndGame: PropTypes.string.isRequired,
  themes: PropTypes.arrayOf(PropTypes.shape).isRequired,
  themeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserResponse;
