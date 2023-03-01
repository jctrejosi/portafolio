import { ReactElement } from "react";
import type { company } from "@/types/CompaniesList";
import Company from "./company";

interface props {
  companies: company[];
  title: string;
}

const CompaniesList = ({ companies, title }: props): ReactElement => {
  const lists = companies.map((element) => {
    return <Company job={element} key={element.date} />;
  });

  return (
    <section
      id="jobs"
      className="mx-auto max-w-[90%] md:max-w-[62rem] pt-20 pb-40"
    >
      <h1 className="text-custom-color mb-5">{title}</h1>
      <ul className="grid md:grid-cols-2 gap-8">{lists}</ul>
    </section>
  );
};

export default CompaniesList;
