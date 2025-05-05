export default function Progress({
  index,
  numQuestions,
  answer,
  maxPossiblePoints,
  points,
}) {
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
