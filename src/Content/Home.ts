import imageBg from "../assets/images/introductionBg.webp";
import github from "../assets/images/github.webp";
import gitlab from "../assets/images/gitlab.webp";

import responsive from "../assets/icons/responsive.svg";
import git from "../assets/icons/git.svg";
import design from "../assets/icons/design.svg";
import creative from "../assets/icons/creative.svg";
import retailer from "../assets/icons/retailer.svg";
import adaptability from "../assets/icons/adaptability.svg";

import githubfooter from "../assets/icons/github.svg";
import gitlabfooter from "../assets/icons/gitlab.svg";
import linkein from "../assets/icons/linkedin.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";

export const background = {
  image: imageBg,
  title: "Hola, mi nombre es",
  name: "Juan Carlos Trejos",
  subtitle: "Y soy desarrollador Front-end",
  textButton: "Conoce mi trabajo",
};

export const gitPopups = [
  {
    text: "jctrejosi",
    url: "https://github.com/jctrejosi",
    icon: github,
  },
  {
    text: "juan.trejos",
    url: "https://git.roiback.com/juan.trejos",
    icon: gitlab,
  },
];

export const jobs = [
  {
    title: "title1",
    image: "https://dummyimage.com/350x350/695369/fff",
    language: "language",
    url: "www.google.com",
    description: "description asdadf asdfasfadsf dasfasdfdasf",
    technologies: ["js", "vue", "otra"],
    participation: 80,
  },
  {
    title: "title2",
    image: "https://dummyimage.com/350x350/696969/fff",
    language: "language",
    url: "www.google.com",
    description: "description asdadf asdfasfadsf dasfasdfdasf",
    technologies: ["js", "vue", "otra"],
    participation: 100,
  },
  {
    title: "title3",
    image: "https://dummyimage.com/350x350/535353/fff",
    language: "language",
    url: "www.google.com",
    description: "description asdadf asdfasfadsf dasfasdfdasf",
    technologies: ["js", "vue", "otra"],
    participation: 40,
  },
];

export const technicalSkills = {
  title: "Habilidades técnicas",
  introduction: "",
  skills: [
    {
      value: 80,
      label: "Vue.js",
    },
    {
      value: 75,
      label: "React.js",
    },
    {
      value: 75,
      label: "ES6",
    },
    {
      value: 70,
      label: "Typescript",
    },
    {
      value: 85,
      label: "HTML",
    },
    {
      value: 85,
      label: "CSS",
    },
    {
      value: 75,
      label: "Sass",
    },
    {
      value: 75,
      label: "Tailwind",
    },
    {
      value: 60,
      label: "Docker",
    },
    {
      value: 50,
      label: "SQL",
    },
    {
      value: 45,
      label: "Node.js",
    },
  ],
  skillsGeneric: [
    {
      icon: responsive,
      title: "Diseño responsivo",
      description:
        "description asdasd asdfasfasdf asdfasdfasd fasdfasdfa adasdasd",
    },
    {
      icon: design,
      title: "Maquetación",
      description:
        "description asdasd asdfasfasdf asdfasdfasd fasdfasdfa adasdasd",
    },
    {
      icon: git,
      title: "Versionamiento",
      description:
        "description asdasd asdfasfasdf asdfasdfasd fasdfasdfa adasdasd",
    },
  ],
};

export const softSkills = {
  title: "Habilidades blandas",
  introduction: "",
  skills: [
    {
      value: 80,
      label: "Comunicación",
    },
    {
      value: 75,
      label: "Trabajo en equipo",
    },
    {
      value: 85,
      label: "Responsabilidad",
    },
    {
      value: 65,
      label: "Gestión del tiempo",
    },
    {
      value: 85,
      label: "Productividad",
    },
    {
      value: 90,
      label: "Adaptabilidad",
    },
  ],
  skillsGeneric: [
    {
      icon: creative,
      title: "Creativo",
      description: "",
    },
    {
      icon: retailer,
      title: "Detallista",
      description: "",
    },
    {
      icon: adaptability,
      title: "Adaptable",
      description: "",
    },
  ],
};

export const filesDownload = {
  title: "Documentos de interés",
  files: [
    {
      file: gitlab,
      icon: responsive,
      text: "texto1",
    },
    {
      file: gitlab,
      icon: responsive,
      text: "texto2",
    },
    {
      file: gitlab,
      icon: responsive,
      text: "texto3",
    },
  ],
};

export const footer = {
  socialNets: [
    {
      icon: githubfooter,
      url: "https://github.com/jctrejosi",
    },
    {
      icon: gitlabfooter,
      url: "https://git.roiback.com/juan.trejos",
    },
    {
      icon: linkein,
      url: "https://www.linkedin.com/in/juan-carlos-trejos-26605b142",
    },
    {
      icon: facebook,
      url: "https://www.facebook.com/juanktrejos",
    },
    {
      icon: instagram,
      url: "https://www.instagram.com/juanktrejos",
    },
  ],
  phrase: "Entre más sopla el viento más firmes son las raíces del árbol",
};
