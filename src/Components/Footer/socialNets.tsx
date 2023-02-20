import { ReactElement } from "react";
import type { socialNet } from "../../types/Footer";

interface props {
  socialNets: socialNet[];
}

const SocialNets = ({ socialNets }: props): ReactElement => {
  const items = socialNets.map((element) => {
    return (
      <li key={`social-neet-footer-${element.url}`}>
        <a
          href={element.url}
          className="flex justify-center items-center mx-4 rounded-full border-light-color p-3 border-2 hover:bg-extra-color transition-colors duration-300"
        >
          <img src={element.icon} alt="social-net" className="w-8 h-8" />
        </a>
      </li>
    );
  });
  return <ul className="flex justify-center w-full">{items}</ul>;
};

export default SocialNets;
