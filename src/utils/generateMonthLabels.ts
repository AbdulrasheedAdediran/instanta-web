export const generateMonthLabels = (
  initialDate: string,
  numMonths: number = 12,
) => {
  if (!initialDate) return;
  const labels = [];
  const startYear = initialDate.split("-")[0];
  const startMonth = initialDate.split("-")[1];
  const startDate = new Date(`${startYear}-${startMonth}-01`);

  for (let i = 0; i < numMonths; i++) {
    const date = new Date(startDate);
    date.setMonth(startDate.getMonth() + i);
    labels.push(
      `${date.toLocaleString("default", {
        month: "short",
      })} ${date.getFullYear()}`,
    );
  }

  return labels;
};
