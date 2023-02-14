import { ReactElement } from "react";
import type { skill } from "../../types/skillComponent";

interface props {
  skills: skill[];
}

const graph = ({ skills }: props): ReactElement => {
  const mainSkills = skills.map((element) => {
    return (
      <li
        className="flex items-center w-full md:w-[62rem] my-2 flex-col-reverse md:flex-row"
        key={element.label}
      >
        <div
          className="rounded-full flex items-center flex-1 w-full md:w-9/12 bg-main-color pr-3"
          id="skill"
        >
          <div
            className="bg-custom-color h-10 rounded-full"
            style={{ width: `${element.value}%` }}
          />
          <p className="pl-4 text-light-color">{element.value}%</p>
        </div>
        <label className="ml-4 label-base w-full md:w-1/4" htmlFor="skill">
          {element.label}
        </label>
      </li>
    );
  });

  return <ul className="w-full">{mainSkills}</ul>;
};

export default graph;
