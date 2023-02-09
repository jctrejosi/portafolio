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
      <li className="flex items-center" key={element.label}>
        <div className="w-[30rem] rounded-full" id="skill">
          <div
            className="bg-main-color h-5 rounded-full"
            style={{ width: `${element.value}%` }}
          />
        </div>
        <label className="ml-4 label-base" htmlFor="skill">
          {element.label}
        </label>
      </li>
    );
  });
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center flex-col relative">
      <div className="block absolute top-12">
        <h1 className="title-base text-custom-color">{title}</h1>
        <p className="p-base">{introduction}</p>
      </div>
      <ul>{list}</ul>
    </div>
  );
};

export default SkillsGraphs;
