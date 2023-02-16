import { ReactElement } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import type { job } from "../../types/jobsComponent";

interface props {
  item: job;
  show: boolean;
  hide: () => void;
}

const modal = ({ item, show, hide }: props): ReactElement | null => {
  const technologiesList = item.technologies?.map((element) => {
    return (
      <li key={element}>
        <p>{element}</p>
      </li>
    );
  });

  return show ? (
    <div className="fixed w-screen h-screen bg-glass-600 backdrop-blur-sm left-0 top-0 z-10 flex justify-center items-center">
      <div
        className="w-full h-full absolute z-0"
        aria-hidden="true"
        onClick={hide}
      />
      <div className="w-[90%] md:w-[62rem] relative h-[90%] overflow-auto rounded-sm z-10">
        <img
          className="w-full h-[30rem] object-cover"
          src={item.image}
          alt="job-modal"
        />
        <div className="bg-light-color p-4">
          <h6 className="text-custom-color">{item.title}</h6>
          <p>{item.description}</p>
          <p>Escrito en {item.language}</p>
          <p>Tecnologías:</p>
          <ul className="pl-12">{technologiesList}</ul>
          <a href={item.url} className="my-2">
            Ir a la web{" "}
            <ArrowUpRightIcon className="border-l border-b pl-1 pb-1 rounded-sm" />
          </a>
          <p>Participación:</p>
          <div
            className="rounded-full flex items-center h-8 mt-2 flex-1 w-full bg-main-color"
            id="skill"
          >
            <div
              className="bg-custom-color h-full rounded-full"
              style={{ width: `${item.participation}%` }}
            />
            <p className="pl-4 text-light-color absolute">
              {item.participation}%
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="absolute top-10 right-8 btn-close z-10"
        onClick={hide}
      >
        X
      </button>
    </div>
  ) : null;
};

export default modal;
