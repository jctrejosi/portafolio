import { ReactElement } from "react";
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
    <div
      aria-hidden="true"
      className="fixed w-screen h-screen bg-glass left-0 top-0 z-10 flex justify-center items-center"
    >
      <div className="w-[32rem] relative">
        <img src={item.image} alt="job-modal" />
        <div className="bg-light-color p-4">
          <h6 className="text-custom-color">{item.title}</h6>
          <p>{item.description}</p>
          <p>Escrito en {item.language}</p>
          <a href={item.url}>Visita el proyecto</a>
          <p>Tecnologías:</p>
          <ul className="pl-12">{technologiesList}</ul>
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
        className="absolute top-8 right-8 btn-close"
        onClick={hide}
      >
        X
      </button>
    </div>
  ) : null;
};

export default modal;
