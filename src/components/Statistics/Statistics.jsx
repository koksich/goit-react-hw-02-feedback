export const Statistics = ({ good, neutral, bad, total, positivePersentage }) => (
  <ul>
    <li>
      <p>Good: {good}</p>
    </li>
    <li>
      <p>Neutral: {neutral}</p>
    </li>
    <li>
      <p>Bad: {bad}</p>
    </li>
    <li>
      <p>Total: {total()}</p>
    </li>
    <li>
      <p>Positive feedback: {positivePersentage()} %</p>
    </li>
  </ul>
);
