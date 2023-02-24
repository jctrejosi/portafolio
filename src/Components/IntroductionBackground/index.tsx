import { ReactElement } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

interface props {
  image: string;
  title: string;
  name: string;
  subtitle: string;
  textButton: string;
}

const scrollToJobs = () => {
  const jobs = document.querySelector("#jobs");
  jobs?.scrollIntoView({ behavior: "smooth" });
};

const IntroductionBackground = ({
  image,
  title,
  name,
  subtitle,
  textButton,
}: props): ReactElement => {
  return (
    <section
      className="relative w-full h-screen overlay bg-local bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" max-w-[39ch] absolute flex-col flex left-0 top-0 bottom-0 right-0 m-auto justify-center items-center">
        <h1 className="flex whitespace-nowrap flex-col md:flex-row">
          <span className="mr-4">{title}</span>
          <span className="text-main-color">{name}</span>
        </h1>
        <h2 className="write">{subtitle}</h2>
        <button type="submit" className="mt-8" onClick={scrollToJobs}>
          {textButton}
          <ArrowLongRightIcon />
        </button>
      </div>
    </section>
  );
};

export default IntroductionBackground;
