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
    <div className="relative w-full h-screen overlay">
      <img
        className="object-cover h-screen w-screen"
        src={image}
        alt="introduction background"
      />
      <div className=" max-w-[39ch] absolute flex-col flex left-0 top-0 bottom-0 right-0 m-auto justify-center items-center">
        <p className="title-base text-light-color write flex-col md:flex-row">
          <span className="mr-4">{title}</span>
          <span className="text-main-color">{name}</span>
        </p>
        <p className="subtitle-base text-light-color write">{subtitle}</p>
        <button type="button" className="btn-secondary mt-8">
          {textButton}
          <ArrowLongRightIcon />
        </button>
      </div>
    </div>
  );
};

export default IntroductionBackground;
