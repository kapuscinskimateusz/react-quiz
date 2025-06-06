import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

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
