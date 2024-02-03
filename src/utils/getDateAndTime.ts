export default function getDateAndTime(timestamp: any): string {
  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "UTC",
  });
  return formattedDate;
}
