import { ReactElement, useState } from "react";
import useModal from "./useModal";
import Modal from "./modal";
import type { job } from "../../types/jobsComponent";

interface props {
  jobs: job[];
}

const JobsList = ({ jobs }: props): ReactElement => {
  const [jobFocus, setJob] = useState({} as job);
  const { isShowing, toggle } = useModal();

  const jobsList = jobs.map((element) => {
    return (
      <li
        key={`job-${element.title}`}
        className="group w-full sm:w-1/2 xl:w-1/4 relative overflow-hidden"
      >
        <img className="w-full" src={element.image} alt="" />
        <div className="absolute top-0 left-0 bg-glass-400 md:bg-glass-700 w-full h-full p-8 md:translate-y-full items-start justify-end flex flex-col group-hover:translate-y-0 transition-transform duration-300">
          <h5 className="md:group-hover:bottom-auto md:bottom-[25rem] relative">
            {element.title}
          </h5>
          <p className="text-light-color mt-4">Participación:</p>
          <div
            className="rounded-full flex items-center max-h-8 mt-2 flex-1 w-full bg-main-color"
            id="skill"
          >
            <div
              className="bg-custom-color h-full rounded-full"
              style={{ width: `${element.participation}%` }}
            />
            <p className="pl-4 text-light-color absolute">
              {element.participation}%
            </p>
          </div>
          <button
            type="button"
            className="mt-8"
            onClick={() => {
              setJob(element);
              toggle();
            }}
          >
            Saber más
          </button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <ul className="flex flex-wrap">{jobsList}</ul>
      <Modal item={jobFocus} show={isShowing} hide={toggle} />
    </div>
  );
};

export default JobsList;