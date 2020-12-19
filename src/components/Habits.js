import { h } from 'preact';

export default function Habits(props) {
  const { habits = [] } = props;
  return habits.length > 0 ? (
    <div className="Habits">
      <div style={{}}>Dates</div>
      {habits.map((habit) => (
        <div className="Habit">{habit}</div>
      ))}
    </div>
  ) : (
    <span>🥵 your habit list is awfully empty, time to get cracking</span>
  );
}
