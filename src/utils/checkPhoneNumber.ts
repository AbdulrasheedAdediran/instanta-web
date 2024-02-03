import axios from "axios";

export default async function checkPhoneNumber(phoneNumber: string) {
  try {
    const response = await axios.get(
      `/api/check-phone?phoneNumber=${phoneNumber.trim()}`,
    );
    return response.data;
  } catch (error) {
    return;
    console.error(error);
    // return { error: "Server Error" };
  }
}
