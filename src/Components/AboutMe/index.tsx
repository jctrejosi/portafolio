import { ReactElement } from "react";

interface props {
  title: string;
  paragraph: string;
}

const AboutMe = ({ title, paragraph }: props): ReactElement => {
  return (
    <section id="aboutMe" className="mx-auto max-w-[62rem] pb-40 pt-14">
      <h1 className="text-custom-color text-center md:text-left">{title}</h1>
      <p className="whitespace-pre-line">{paragraph}</p>
    </section>
  );
};

export default AboutMe;
