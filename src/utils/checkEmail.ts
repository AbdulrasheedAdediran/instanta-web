import axios from "axios";

export default async function checkEmail(email: string) {
  try {
    const response = await axios.get(`/api/check-email?email=${email}`);
    return response.data;
  } catch (error) {
    return;
    console.error(error);
    // return { error: "Server Error" };
  }
}
