import { ReactElement } from "react";
import whatsappIcon from "./whatsapp.webp";

const WhatsappAnchor = (): ReactElement => {
  return (
    <a
      className="fixed bottom-6 right-6 w-16 h-16"
      href="https://api.whatsapp.com/send?phone=573148854358"
      target="_blank"
      rel="noreferrer"
    >
      <img className="w-full h-full" src={whatsappIcon} alt="whatsapp" />
    </a>
  );
};

export default WhatsappAnchor;
