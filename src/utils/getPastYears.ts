export const getPastYears = (yearsToGet: number) => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let i = 0; i < yearsToGet; i++) {
    years.push((currentYear - i).toString());
  }

  return years;
};
