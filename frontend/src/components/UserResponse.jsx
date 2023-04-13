function UserResponse() {
  return (
    <div className="inputButton">
      <input
        type="text"
        id="response"
        name="response"
        className="inputResponse"
      />
      <button type="button" className="okButton">
        Ok
      </button>
    </div>
  );
}

export default UserResponse;
