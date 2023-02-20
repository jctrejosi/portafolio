import { FormEvent, ReactElement } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";

const sendEmail = (event: FormEvent) => {
  event.preventDefault();

  const obj = {
    email: "james.das@asd",
    phone: 314885435,
    message: "mensaje del ads",
  };
  emailjs
    .send("service_h1gs28d", "template_zcbiegi", obj, "Y7GRNBxNZJ9PjD9zd")
    .then(
      (response) => {
        return response;
      },
      (err) => {
        return err;
      }
    );
};

const ContactForm = (): ReactElement => {
  return (
    <div className="flex flex-row flex-wrap mb-12">
      <h4 className="w-full text-center">Envíame un mensaje:</h4>
      <form className="w-full flex flex-wrap" onSubmit={sendEmail}>
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
      </form>
    </div>
  );
};

export default ContactForm;
