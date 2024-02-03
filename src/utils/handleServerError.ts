export const handleServerError = (
  error: any,
  defaultError: string = "An error occured, please try again.",
) => {
  // console.log({ error });
  const errorMessage =
    error?.body?.message?.[0] ??
    error?.body?.message ??
    error?.message[0] ??
    error?.message;
  const status = error?.status;

  if (status >= 500) {
    return { error: defaultError, status };
  }

  if (typeof errorMessage !== "string") {
    return { error: defaultError, status };
  }

  return { error: errorMessage, status };
};
