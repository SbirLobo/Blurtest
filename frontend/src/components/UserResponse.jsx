import PropTypes from "prop-types";
import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse({ handleSubmit }) {
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
        <a href="." className="buttonArrow md:buttonArrowDesktop">
          <img
            className="arrowNext md:arrowNextDesktop"
            src={arrow}
            alt="Flèche suivante"
          />
        </a>
      </div>
    </form>
  );
}

UserResponse.propTypes = {
  handleSubmit: PropTypes.string.isRequired,
};

export default UserResponse;
