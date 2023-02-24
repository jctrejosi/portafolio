import { ReactElement } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import type { file } from "../../types/FilesDownloads";

interface props {
  title: string;
  files: file[];
  id: string;
}

const FilesDownload = ({ files, title, id }: props): ReactElement => {
  const items = files.map((element) => {
    return (
      <li key={element.text}>
        <a className="my-5" href={element.file} download>
          <img
            className="w-10 h-10 mr-4"
            src={element.icon}
            alt="file-download"
          />
          {element.text}
          <ArrowDownTrayIcon />
        </a>
      </li>
    );
  });

  return (
    <section
      id={id}
      className="bg-primary flex justify-center items-center flex-col pb-60 pt-12 max-w-[90%] md:max-w-[62rem] mx-auto"
    >
      <h1 className="text-custom-color mb-14 w-full">{title}</h1>
      <ul className="flex flex-col items-start w-full">{items}</ul>
    </section>
  );
};

export default FilesDownload;
