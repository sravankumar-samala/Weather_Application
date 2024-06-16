export default function getTimeAndDate(timestamp) {
  const date = new Date(timestamp * 1000);

  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  );
  const day = ("0" + date.getDate()).slice(-2);

  const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );

  let hours = date.getHours();
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  const ampm = hours <= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  return {
    year,
    month,
    day,
    hours: ("0" + hours).slice(-2),
    minutes,
    seconds,
    ampm,
    weekDay,
  };
}
