// eslint-disable-next-line react/prop-types
function CardFilm({ theme }) {
  return (
    <div
      // className="flex flex-col bg-primary items-center justify-start content-stretch"
      style={{
        backgroundColor: "rgb(38, 70, 83)",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignContent: "space-around",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="order-1 flex-none">
        <h3
          style={{
            backgroundColor: "#FAF9F0",
            borderRadius: "8px",
            padding: "8px 50px",
            border: "solid 1px",
          }}
        >
          {theme}
        </h3>
      </div>
      <div className="order-1 flex-none">
        <img
          src="https://www.themoviedb.org/t/p/original/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg"
          alt={theme}
        />
      </div>
    </div>
  );
}

export default CardFilm;
