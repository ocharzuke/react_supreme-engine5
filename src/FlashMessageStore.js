import { atom, useAtom } from "jotai";

export const flashMessageAtom = atom({
  message: "",
  type: "info",
});

export const useFlashMessage = () => {
  const [flashMessage, setFlashMessage] = useAtom(flashMessageAtom);

  const showMessage = (message, type) => {
    if (message && ["info", "success", "danger"].includes(type)) {
      setFlashMessage({
        message: message,
        type: type,
      });
    }

    setTimeout(() => {
      clearMessage();
    }, 3000);
  };

  const clearMessage = () => {
    setFlashMessage({
      message: "",
      type: "info",
    });
  };

  const getMessage = () => {
    return flashMessage;
  };

  return {
    getMessage,
    showMessage,
    clearMessage,
    flashMessage,
  };
};
