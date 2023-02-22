import { ReactElement } from "react";
import type { skill, generalSkill } from "../../types/skillComponent";
import Graph from "./graph";
import SkillsIcon from "./skillsIcon";

interface props {
  skills: skill[];
  generalSkills: generalSkill[];
  title: string;
  introduction: string;
  id: string;
}

const SkillsGraphs = ({
  skills,
  title,
  introduction,
  generalSkills,
  id,
}: props): ReactElement => {
  return (
    <section
      id={id}
      className="bg-primary flex justify-start pb-60 pt-12 items-center flex-col relative"
    >
      <div className="block w-[90%] max-w-[62rem]">
        <h1 className="text-custom-color text-center">{title}</h1>
        <p className="text-center">{introduction}</p>
        <SkillsIcon generalSkills={generalSkills} />
        <Graph skills={skills} />
      </div>
    </section>
  );
};

export default SkillsGraphs;
