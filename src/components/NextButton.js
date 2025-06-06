import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { answer, index, numQuestions, dispatch } = useQuiz();

  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>
    );

  return <button onClick={() => dispatch({ type: "finish" })}>Finish</button>;
}
