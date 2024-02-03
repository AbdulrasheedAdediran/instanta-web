import { formatDate } from "./formatDate";

export const downloadFile = async (
  url: string,
  token: string,
): Promise<void> => {
  // console.log({ token });
  // console.log({ url });
  const path = `/api/proxy?url=${encodeURIComponent(url)}`;
  try {
    const response = await fetch(path, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log({ response });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const filename = url.split("/").pop();
    const fileBlob = URL.createObjectURL(blob);
    // console.log({ blob });
    // console.log({ url });
    // console.log({ filename });
    // console.log({ fileBlob });
    const link = document.createElement("a");
    link.href = fileBlob;
    const date = new Date().toISOString();
    link.download = filename || `downloaded_file_${formatDate(date)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
