import arrow from "../assets/chevron-forward-outline.svg";

function UserResponse() {
  return (
    <div className="inputButton">
      <input
        type="text"
        id="response"
        name="response"
        className="inputResponse"
      />
      <div className="buttonArrow">
        <button type="button" className="okButton">
          Ok
        </button>
        <img src={arrow} alt="Flèche suivante" className="arrowNext" />
      </div>
    </div>
  );
}

export default UserResponse;
