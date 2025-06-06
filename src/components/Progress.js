import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { numQuestions, index, answer, points, maxPossiblePoints } = useQuiz();

  return (
    <header>
      <progress max={numQuestions} value={index + Number(answer !== null)} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
