import Pill from "./Pill";

type Props = {
  time?: string;
  title?: string;
  note?: string;
  status?: string;
};

export default function CalendarItem({ time, title, note, status }: Props) {
  return (
    <div className="cal">
      <time>{time}</time>
      <div>
        <b>{title}</b>
        <small>{note}</small>
      </div>
      {status && <Pill>{status}</Pill>}
    </div>
  );
}
