import { ReactElement } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ContactForm = (): ReactElement => {
  return (
    <div className="flex flex-row flex-wrap mb-12">
      <h4 className="w-full text-center">Envíame un mensaje:</h4>
      <div className="w-full flex flex-wrap">
        <label
          className="text-light-color flex flex-col w-full md:w-1/2 font-custom p-4"
          htmlFor="phone"
        >
          <span className="border-b-[.1rem] pb-2 mb-6">Teléfono:</span>
          <input type="tel" id="phone" placeholder="(+57)3148854358" />
        </label>
        <label
          className="text-light-color flex flex-col w-full md:w-1/2 font-custom p-4"
          htmlFor="email"
        >
          <span className="border-b-[.1rem] pb-2 mb-6">Email:</span>
          <input type="email" id="email" placeholder="jctrejoss@unal.edu.co" />
        </label>
        <label className="w-full flex flex-col p-4" htmlFor="message">
          <span className="border-b-[.1rem] pb-2 mb-6 text-light-color">
            Mensaje:
          </span>
          <textarea id="message" cols={30} rows={4} />
        </label>
        <button className="mx-auto my-8" type="submit">
          Enviar
          <PaperAirplaneIcon />
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
