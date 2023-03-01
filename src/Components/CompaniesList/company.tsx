import { ReactElement } from "react";
import type { company } from "@/types/CompaniesList";
import { WrenchIcon } from "@heroicons/react/24/solid";

interface props {
  job: company;
}

const Company = ({ job }: props): ReactElement => {
  const tasks = job.tasks.map((item) => {
    return (
      <li key={`${item}-task`} className="flex items-start mb-2">
        <WrenchIcon className="mt-3 mr-3 min-w-[.6rem] max-w-[.6rem]" />
        <p>{item}</p>
      </li>
    );
  });
  return (
    <li className="mb-10 md:mb-0">
      <h5 className="text-custom-color mb-2 leading-10">{job.name}</h5>
      <h6 className="text-mid-color">{job.liability}</h6>
      <h6 className="text-mid-color text-md mb-4">{job.date}</h6>
      <ul>{tasks}</ul>
    </li>
  );
};

export default Company;
