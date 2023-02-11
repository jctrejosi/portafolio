import { ReactElement } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

interface props {
  image: string;
  title: string;
  name: string;
  subtitle: string;
  textButton: string;
}

const IntroductionBackground = ({
  image,
  title,
  name,
  subtitle,
  textButton,
}: props): ReactElement => {
  return (
    <article
      className="relative w-full h-screen overlay bg-local bg-cover"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className=" max-w-[39ch] absolute flex-col flex left-0 top-0 bottom-0 right-0 m-auto justify-center items-center">
        <h1 className="write flex-col md:flex-row">
          <span className="mr-4">{title}</span>
          <span className="text-main-color">{name}</span>
        </h1>
        <h2 className="write">{subtitle}</h2>
        <button type="button" className="btn-secondary mt-8">
          {textButton}
          <ArrowLongRightIcon />
        </button>
      </div>
    </article>
  );
};

export default IntroductionBackground;
