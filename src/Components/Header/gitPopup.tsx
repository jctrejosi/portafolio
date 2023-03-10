import { ReactElement, useState } from "react";
import type { social } from "../../types/Header";

interface props {
  icons: social[];
}

const GitPopup = ({ icons }: props): ReactElement => {
  const [close, closePopup] = useState(false);
  const list = icons.map((element) => {
    return (
      <a
        key={`git-popup-${element.url}`}
        href={element.url}
        className="group flex items-center mr-4"
        target="_blank"
        rel="noreferrer"
      >
        <img className="w-9 h-9 mr-1" src={element.icon} alt="git" />
        <p className="text-main-color group-hover:text-extra-color normal-case first-letter:normal-case duration-300">
          {element.text}
        </p>
      </a>
    );
  });
  return (
    <div
      className={`flex fixed top-0 right-0 md:relative bg-glass-700 px-4 py-2 rounded-md max-h-[4rem] md:max-h-full ${
        close ? "hidden" : "visible"
      }`}
    >
      {list}
      <button
        type="button"
        className="btn-close-sm absolute -left-4 top-10"
        onClick={() => closePopup(true)}
      >
        x
      </button>
    </div>
  );
};

export default GitPopup;
