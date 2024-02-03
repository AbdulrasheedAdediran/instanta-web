import { toast } from "react-toastify";

const createStripeCheckout = async () => {
  try {
    const response = await fetch(`${window.location.origin}/api/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    toast.error(`Connection error. Please try again later`);
    // console.log("error from api payment call:", error);
    return;
  }
};

export default createStripeCheckout;
