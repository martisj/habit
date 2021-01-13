import m from 'mithril';
import dayjs from 'dayjs';

const theFuture = Array(7)
  .fill(-3)
  .map((day, idx) =>
    dayjs()
      .add(idx + day, 'day')
      .format('DD. MMM')
  );

export const FutureDays = {
  view: () => (
    <div className="FutureDays">
      {theFuture.map((day) => (
        <div className="Day">{day}</div>
      ))}
    </div>
  ),
};
