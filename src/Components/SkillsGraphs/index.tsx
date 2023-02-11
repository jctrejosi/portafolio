import { ReactElement } from "react";
import type { skill } from "../../types/skillComponent";

interface props {
  skills: skill[];
  title: string;
  introduction: string;
}

const SkillsGraphs = ({ skills, title, introduction }: props): ReactElement => {
  const list = skills.map((element) => {
    return (
      <li
        className="flex items-center w-[32rem] sm:w-[42rem] md:w-[62rem] my-2"
        key={element.label}
      >
        <div className="rounded-full flex-1 w-9/12" id="skill">
          <div
            className="bg-custom-color h-5 rounded-full"
            style={{ width: `${element.value}%` }}
          />
        </div>
        <label className="ml-4 label-base w-1/4" htmlFor="skill">
          {element.label}
        </label>
      </li>
    );
  });
  return (
    <article className="h-screen bg-primary flex justify-center items-center flex-col relative">
      <div className="block absolute top-12 w-[32rem] sm:w-[42rem] md:w-[62rem]">
        <h1 className="text-custom-color text-center">{title}</h1>
        <p className="text-center">{introduction}</p>
      </div>
      <ul>{list}</ul>
    </article>
  );
};

export default SkillsGraphs;
