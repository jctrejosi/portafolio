import { FormEvent, ReactElement, useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import emailjs from "emailjs-com";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import LoadingScreen from "../LoadingScreen";

const ContactForm = (): ReactElement => {
  const [phoneState, setPhone] = useState("");
  const [emailState, setEmail] = useState("");
  const [messageState, setMessage] = useState("");
  const [loading, showLoading] = useState(Boolean);
  const [error, setError] = useState("");

  const emailChange = (event: FormEvent) => {
    setEmail(event.target.value);
  };

  const messageChange = (event: FormEvent) => {
    setMessage(event.target.value);
  };

  const resetValues = () => {
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (event: FormEvent) => {
    event.preventDefault();

    showLoading(true);

    const obj = {
      email: emailState,
      phone: phoneState,
      message: messageState,
    };

    emailjs
      .send("service_h1gs28d", "template_zcbiegi", obj, "Y7GRNBxNZJ9PjD9zd")
      .then(
        (response) => {
          resetValues();
          setError("checkin");
          setTimeout(() => {
            showLoading(false);
            setError("");
          }, 2000);
          return response;
        },
        (err) => {
          setError("checkout");
          setTimeout(() => {
            showLoading(false);
            setError("");
          }, 3000);
          return err;
        }
      );
  };

  return (
    <div className="flex flex-row flex-wrap mb-12">
      {loading ? <LoadingScreen error={error} /> : null}
      <h4 className="w-full text-center">Envíame un mensaje:</h4>
      <form className="w-full flex flex-wrap" onSubmit={sendEmail}>
        <label
          className="text-light-color flex flex-col w-full md:w-1/2 font-custom p-4"
          htmlFor="phone"
        >
          <span className="border-b-[.1rem] pb-2 mb-6">Teléfono:</span>
          <PhoneInput
            defaultCountry="CO"
            placeholder="3148854358"
            value={phoneState}
            onChange={setPhone}
            id="phone"
          />
          <input hidden />
        </label>
        <label
          className="text-light-color flex flex-col w-full md:w-1/2 font-custom p-4"
          htmlFor="email"
        >
          <span className="border-b-[.1rem] pb-2 mb-6">Email:</span>
          <input
            type="email"
            id="email"
            placeholder="jctrejoss@unal.edu.co"
            value={emailState}
            onChange={emailChange}
          />
        </label>
        <label className="w-full flex flex-col p-4" htmlFor="message">
          <span className="border-b-[.1rem] pb-2 mb-6 text-light-color">
            Mensaje:
          </span>
          <textarea
            id="message"
            cols={30}
            rows={4}
            value={messageState}
            onChange={messageChange}
          />
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
