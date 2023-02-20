import imageBg from "../assets/images/introductionBg.webp";
import responsive from "../assets/images/responsive.webp";
import github from "../assets/images/github.webp";
import gitlab from "../assets/images/gitlab.webp";

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
      value: 70,
      label: "React.js",
    },
    {
      value: 75,
      label: "ES6",
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
      value: 80,
      label: "Git",
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
      title: "Diseño responsivo1",
      description:
        "description asdasd asdfasfasdf asdfasdfasd fasdfasdfa adasdasd",
    },
    {
      icon: responsive,
      title: "Diseño responsivo2",
      description:
        "description asdasd asdfasfasdf asdfasdfasd fasdfasdfa adasdasd",
    },
    {
      icon: responsive,
      title: "Diseño Responsivo3",
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
      icon: responsive,
      title: "title1",
      description: "",
    },
    {
      icon: responsive,
      title: "title2",
      description: "description",
    },
    {
      icon: responsive,
      title: "title",
      description: "description",
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
      icon: github,
      url: "www.google.com",
    },
    {
      icon: github,
      url: "ww.",
    },
    {
      icon: github,
      url: "ww.",
    },
    {
      icon: github,
      url: "ww.",
    },
    {
      icon: github,
      url: "ww.",
    },
  ],
  phrase: "Entre más sopla el viento más firmes son las raíces del árbol",
};
