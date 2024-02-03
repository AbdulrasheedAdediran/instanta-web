import React from "react";

export const convertDateToISO = (dateString: string) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return null;
  }

  const isoDate = date.toISOString();

  return isoDate;
};
