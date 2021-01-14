import m from 'mithril';
import dayjs from 'dayjs';

const theFuture = (daysToShow: number) =>
  Array(daysToShow)
    .fill(Math.ceil(daysToShow / 2) * -1)
    .map((day, idx) =>
      dayjs()
        .add(idx + day, 'day')
        .format('DD. MMM')
    );

export const FutureDays = () => (
  <div className="FutureDays">
    {theFuture(7).map((day) => (
      <div className="Day">{day}</div>
    ))}
  </div>
);
