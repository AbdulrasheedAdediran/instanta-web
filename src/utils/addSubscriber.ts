import axios from "axios";

export default async function addSubscriber(data: any) {
  if (!data) return;
  const addNewPath = `${window.location.origin}/api/subscription/add-new`;
  try {
    const response = await axios.post(addNewPath, data);
    return response;
  } catch (err: any) {
    return;
    // console.log(err);
  }
}
