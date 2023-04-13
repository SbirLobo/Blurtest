import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse() {
  return (
    <div className="inputButton md:inputButtonDesktop">
      <input
        type="text"
        id="response"
        name="response"
        placeholder="Une idée ?"
        className="inputResponse"
      />
      <div className="okArrow md:okArrowDesktop">
        <button
          type="button"
          className="okButton hover:okButtonHover md:okButtonDesktop"
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
    </div>
  );
}

export default UserResponse;
