import { ToastContainer, toast, Bounce  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Exportá el container (para renderizar) y el toast (para usar)
export const ToastNotify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
};

//este es el toast que se va a usar para los errores
export const notifyError = (msg) => toast.error(msg)
