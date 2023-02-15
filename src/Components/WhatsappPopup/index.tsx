import { ReactElement, useState } from "react";
import whatsappIcon from "./whatsapp.webp";

const WhatsappAnchor = (): ReactElement => {
  const [close, closePopup] = useState(false);
  return (
    <a
      className={`fixed bottom-6 right-6 w-16 h-16 ${
        close ? "hidden" : "visible"
      }`}
      href="https://api.whatsapp.com/send?phone=573148854358"
      target="_blank"
      rel="noreferrer"
    >
      <img className="w-full h-full" src={whatsappIcon} alt="whatsapp" />
      <button
        type="button"
        className="btn-close-sm absolute -left-5 -top-5"
        onClick={() => closePopup(true)}
      >
        x
      </button>
    </a>
  );
};

export default WhatsappAnchor;
