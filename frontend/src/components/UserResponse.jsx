import PropTypes from "prop-types";
import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse({ setSubmitResponse }) {
  // function handleChange(e) {
  //   setInputMessage(e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitResponse(e.target[0].value);
    // console.log(e.target[0].value);
  }

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
        // onChange={handleChange}
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

/* À vérifier */
UserResponse.propTypes = {
  // inputMessage: PropTypes.string.isRequired,
  // setInputMessage: PropTypes.string.isRequired,
  setSubmitResponse: PropTypes.string.isRequired,
};

export default UserResponse;
