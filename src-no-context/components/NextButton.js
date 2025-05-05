export default function NextButton({ dispatch, answer, numQuestions, index }) {
  if (answer === null) return null;

  if (index < numQuestions - 1)
    return (
      <button onClick={() => dispatch({ type: "nextQuestion" })}>Next</button>
    );

  return <button onClick={() => dispatch({ type: "finish" })}>Finish</button>;
}
