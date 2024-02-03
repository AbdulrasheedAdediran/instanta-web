import { Theme, ToastPosition, toast } from "react-toastify";

interface IToastOptions {
  position: ToastPosition | undefined;
  autoClose: number;
  // hideProgressBar: boolean
  newestOnTop: boolean;
  closeOnClick: boolean;
  rtl: boolean;
  pauseOnFocusLoss: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  theme: Theme | undefined;
  limit: number;
}

export const notify = (
  message: string,
  status?: "success" | "info" | "warning" | "error",
) => {
  const toastOptions: IToastOptions = {
    position: "top-center",
    autoClose: 5000,
    // hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "dark",
    limit: 3,
  };

  switch (status) {
    case "success":
      toast.success(message, toastOptions);
      break;
    case "info":
      toast.info(message, toastOptions);
      break;
    case "warning":
      toast.warning(message, toastOptions);
      break;
    case "error":
      toast.error(message, toastOptions);
      break;
    default:
      toast(message, toastOptions);
      break;
  }
};
