import { ReactElement } from "react";

interface props {
  image: string;
  title: string;
  name: string;
  subtitle: string;
}

const IntroductionBackground = ({
  image,
  title,
  name,
  subtitle,
}: props): ReactElement => {
  return (
    <div className="relative w-screen h-screen overlay">
      <img
        className="object-cover h-screen w-screen"
        src={image}
        alt="introduction background"
      />
      <div className="absolute flex-col flex h-screen left-0 top-0 justify-center items-left p-40">
        <p className="title-base text-light-color write">
          <span className="mr-4">{title}</span>
          <span className="text-main-color">{name}</span>
        </p>
        <p className="subtitle-base text-light-color write">{subtitle}</p>
      </div>
    </div>
  );
};

export default IntroductionBackground;
