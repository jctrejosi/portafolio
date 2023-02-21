import { ReactElement } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface props {
  error: string;
}

const LoadingScreen = ({ error }: props): ReactElement => {
  return (
    <div className="fixed bg-glass-900 top-0 left-0 right-0 bottom-0 w-full h-screen z-20 overflow-hidden opacity-75 flex flex-col items-center justify-center">
      <div
        className={`loader ${error} ease-linear rounded-full border-4 border-t-4 border-custom-color h-16 w-16 mb-5`}
      />
      {error === "checkin" ? (
        <h6 className="text-center text-main-color flex items-center">
          Enviado correctamente
          <CheckIcon />
        </h6>
      ) : null}
      {error === "checkout" ? (
        <h6 className="text-center text-extra-color flex items-center">
          Error al enviar mensaje
          <XMarkIcon />
        </h6>
      ) : null}
    </div>
  );
};

export default LoadingScreen;
