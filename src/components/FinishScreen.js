export default function FinishScreen({
  points,
  maxPossiblePoints,
  dispatch,
  highscore,
}) {
  const percentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p>(Highscore: {highscore} points)</p>

      <button onClick={() => dispatch({ type: "restart" })}>
        Restart quiz
      </button>
    </>
  );
}
