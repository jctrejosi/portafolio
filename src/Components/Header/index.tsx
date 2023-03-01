import { ReactElement, useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import GitPopup from "./gitPopup";
import type { social, itemNavbar } from "../../types/Header";

interface props {
  git: social[];
  navbar: itemNavbar[];
}

const scrollToJobs = (id: string) => {
  const jobs = document.querySelector(id);
  jobs?.scrollIntoView({ behavior: "smooth" });
};

const Header = ({ git, navbar }: props): ReactElement => {
  const [dropdown, dropdownNavbar] = useState(false);
  const list = navbar.map((element) => {
    return (
      <li key={element.id} className="border-x-[.05rem] border-glass-300 py-3">
        <button
          className="mx-5 btn-link"
          type="button"
          onClick={() => scrollToJobs(element.id)}
        >
          {element.text}
        </button>
      </li>
    );
  });

  return (
    <nav className="fixed top-0 left-0 bg-glass-700 md:bg-transparent flex flex-wrap flex-col md:flex-row justify-between z-10 md:w-full">
      <button
        type="button"
        className="btn-hidden justify-center"
        onClick={() => dropdownNavbar(!dropdown)}
      >
        <Bars2Icon className="mr-4" />
      </button>
      <ul
        className={`${
          dropdown ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
        } md:max-h-full overflow-hidden md:opacity-100 flex bg-glass-700 py-2 rounded-br-lg flex-col md:flex-row transition-opacity duration-300`}
      >
        {list}
      </ul>
      <GitPopup icons={git} />
    </nav>
  );
};

export default Header;
