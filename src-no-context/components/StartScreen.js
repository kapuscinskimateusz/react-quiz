export default function StartScreen({ numQuestions, dispatch }) {
  return (
    <div>
      <h2>Welcome to the React Quiz</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "start" })}>Let's start</button>
    </div>
  );
}
