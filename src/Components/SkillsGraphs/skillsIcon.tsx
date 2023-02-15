import { ReactElement } from "react";
import type { generalSkill } from "../../types/skillComponent";

interface props {
  generalSkills: generalSkill[];
}

const skillsIcon = ({ generalSkills }: props): ReactElement => {
  const genericSkills = generalSkills.map((element) => {
    return (
      <li
        key={`general-skill-${element.title}`}
        className="p-4 flex flex-col items-center"
      >
        <div className="burst flex w-32 h-32 md:w-40 md:h-40 justify-center items-center">
          <img
            src={element.icon}
            alt="skill"
            className="h-14 w-14 items-center mx-8"
          />
        </div>
        <h6 className="text-center mt-6 text-custom-color">{element.title}</h6>
      </li>
    );
  });

  return <ul className="flex justify-between md:my-4">{genericSkills}</ul>;
};

export default skillsIcon;
