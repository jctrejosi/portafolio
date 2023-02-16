import { ReactElement } from "react";
import SocialNets from "./socialNets";
import Contact from "./contact";
import type { socialNet } from "../../types/Footer";

interface props {
  socialNets: socialNet[];
  phrase: string;
}

const Footer = ({ phrase, socialNets }: props): ReactElement => {
  return (
    <section className="bg-gradient-to-t from-blue-color to-custom-color py-8 min-h-screen flex items-center justify-center flex-col">
      <div className="max-w-[62rem] w-[90%]">
        <Contact />
        <SocialNets socialNets={socialNets} />
        <h6 className="text-center italic mt-12 max-w-full">{`"${phrase}"`}</h6>
      </div>
    </section>
  );
};

export default Footer;
