export const validateCommaSeparatedNumbers = (input: string) => {
  if (!/^[0-9, ]+$/.test(input)) {
    return false;
  }

  return true;
};
