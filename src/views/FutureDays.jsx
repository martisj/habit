import m from 'mithril';
import dayjs from 'dayjs';

console.log(
  Array(7)
    .fill(-3)
    .map((day, idx) => dayjs().add(idx + day, 'day'))
);

export const FutureDays = {
  view: () => (
    <div className="FutureDays">
      {Array(7)
        .fill(-3)
        .map((day, idx) => (
          <div className="Day">{day}</div>
        ))}
    </div>
  ),
};
