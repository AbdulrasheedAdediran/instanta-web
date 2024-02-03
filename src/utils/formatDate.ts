export const formatDate = (dateString?: string) => {
  if (!dateString) return;
  const date = new Date(dateString);
  const options: any = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

export const getMonthAndYear = (dateString: Date) => {
  if (!dateString) return;
  const date = new Date(dateString);
  const options: any = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
};
