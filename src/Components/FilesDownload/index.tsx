import { ReactElement } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import type { file } from "../../types/FilesDownloads";

interface props {
  title: string;
  files: file[];
}

const FilesDownload = ({ files, title }: props): ReactElement => {
  const items = files.map((element) => {
    return (
      <li key={element.text}>
        <a className="mx-10 my-5" href={element.file} download>
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
    <div className="bg-primary h-screen flex justify-center items-center flex-col">
      <h1 className="text-custom-color mb-14 text-center">{title}</h1>
      <ul className="flex md:max-w-[64rem] flex-wrap justify-around">
        {items}
      </ul>
    </div>
  );
};

export default FilesDownload;
