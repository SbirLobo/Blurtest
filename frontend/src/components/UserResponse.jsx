import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse() {
  return (
    <form className="inputButton md:inputButtonDesktop md:w-[90%]">
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
        <a href="www.google.fr" className="buttonArrow md:buttonArrowDesktop">
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

export default UserResponse;
