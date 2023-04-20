import PropTypes from "prop-types";
import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse({ next, setNext, handleSubmit }) {
  const handleClick = () => {
    setNext(!next);
  };
  
  return (
    <form
      className="inputButton md:inputButtonDesktop md:w-[90%]"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="response"
        name="response"
        placeholder="Une idée ?"
        className="inputResponse md:text-xl"
      />
      <div className="okArrow md:okArrowDesktop">
        <button
          type="submit"
          className="okButton hover:okButtonHover md:okButtonDesktop md:text-xl"
        >
          Ok
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="buttonArrow md:buttonArrowDesktop"
        >
          <img
            className="arrowNext md:arrowNextDesktop"
            src={arrow}
            alt="Flèche suivante"
          />
        </button>
      </div>
    </form>
  );
}

UserResponse.propTypes = {
  next: PropTypes.bool.isRequired,
  setNext: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default UserResponse;
