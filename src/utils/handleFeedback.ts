export const handleFeedback = (message: string | undefined) => {
  // console.log({ message });

  if (!message) return "An error occured";
  return message as string;
};

export default handleFeedback;
