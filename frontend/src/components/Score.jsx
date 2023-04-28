import PropTypes from "prop-types";

function Score({ score }) {
  return (
    <div className="mb-8">
      <p className="text-2xl font-bold text-secondary mb-5 flex justify-center">
        Score : {score}
      </p>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
