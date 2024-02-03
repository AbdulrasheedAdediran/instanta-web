export const getPastMonthsInWords = (monthsToGet: number) => {
  const currentDate = new Date();
  const months = [];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = monthsToGet - 1; i >= 0; i--) {
    let year = currentDate.getFullYear() % 100;
    let month = currentDate.getMonth() - i;

    if (month < 0) {
      year -= 1;
      month += 12;
    }

    months.push(`${monthNames[month]} ${year.toString().padStart(2, "0")}`);
  }

  return months;
};
