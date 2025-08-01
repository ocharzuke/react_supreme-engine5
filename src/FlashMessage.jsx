import { useFlashMessage } from "./FlashMessageStore";

export default function FlashMessage() {
  const { getMessage } = useFlashMessage();
  const message = getMessage();

  return (
    <>
      {message.message && (
        <div className={`flash-alert alert alert-${message.type}`}>
          {message.message}
        </div>
      )}
    </>
  );
}
