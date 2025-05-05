export default function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={[
            index === answer ? "answer" : "",
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : "",
          ].join(" ")}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
