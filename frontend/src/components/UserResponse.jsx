import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse() {
  return (
    <div className="inputButton">
      <input
        type="text"
        id="response"
        name="response"
        placeholder="Une idée ?"
        className="inputResponse"
      />
      <div className="okArrow">
        <button type="button" className="okButton hover:okButtonHover">
          Ok
        </button>
        <a href="www.google.fr" className="buttonArrow">
          <img className="arrowNext" src={arrow} alt="Flèche suivante" />
        </a>
      </div>
    </div>
  );
}

export default UserResponse;
