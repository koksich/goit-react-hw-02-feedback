import { StatisticItem, StatisticList } from "./Statistics.styled";


export const Statistics = ({ good, neutral, bad, total, positivePersentage }) => (
  <StatisticList>
    <StatisticItem>
      <p>Good: {good}</p>
    </StatisticItem>
    <StatisticItem>
      <p>Neutral: {neutral}</p>
    </StatisticItem>
    <StatisticItem>
      <p>Bad: {bad}</p>
    </StatisticItem>
    <StatisticItem>
      <p>Total: {total()}</p>
    </StatisticItem>
    <StatisticItem>
      <p>Positive feedback: {positivePersentage()} %</p>
    </StatisticItem>
  </StatisticList>
);
