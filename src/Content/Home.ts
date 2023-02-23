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

import geoportal from "../assets/images/jobs/geoportal.webp";
import bqhoteles from "../assets/images/jobs/bqhoteles.webp";
import mynd from "../assets/images/jobs/mynd.webp";
import shambhala from "../assets/images/jobs/shambhala.webp";
import ciutatbarcelona from "../assets/images/jobs/ciutatbarcelona.webp";
import fairplay from "../assets/images/jobs/fairplay.webp";
import carema from "../assets/images/jobs/carema.webp";
import bhmallorca from "../assets/images/jobs/bhmallorca.webp";
import spacehotels from "../assets/images/jobs/spacehotels.webp";
import spiwak from "../assets/images/jobs/spiwak.webp";
import lalocadelosgatos from "../assets/images/jobs/lalocadelosgatos.webp";
import recetasaranda from "../assets/images/jobs/recetasaranda.webp";

import csv from "../assets/icons/csv.svg";
import coverLetter from "../assets/icons/cover_letter.svg";
import certificates from "../assets/icons/certificates.svg";
import coverLetterDoc from "../assets/docs/cover_letter.pdf";
import csvDoc from "../assets/docs/csv.pdf";
import certificadoRoiback from "../assets/docs/certificado_roiback.pdf";

export const background = {
  image: imageBg,
  title: "Hola, mi nombre es",
  name: "Juan Carlos Trejos",
  subtitle: "Y soy desarrollador Front-end",
  textButton: "Conoce mi trabajo",
};

export const header = {
  navbar: [
    {
      text: "Mi trabajo",
      id: "#jobs",
    },
    {
      text: "Habilidades técnicas",
      id: "#technicalSkills",
    },
    {
      text: "Habilidades blandas",
      id: "#softSkills",
    },
    {
      text: "Archivos",
      id: "#files",
    },
    {
      text: "Contacto",
      id: "#contact",
    },
  ],

  gitPopups: [
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
  ],
};

export const jobs = [
  {
    title: "Geoportal SIMAC",
    image: geoportal,
    language: "Vue.js",
    url: "https://cdiac.manizales.unal.edu.co/geoportal-simac",
    description:
      "Construí esta web para la Universidad Nacional de Colombia, en ella se muestran distintas estaciones climatológicas ubicadas en el departamento de Caldas, las cuales despliegan gráficas de sus datos. Fue mi primer proyecto que salió a producción, para lograrlo aprendí varias tecnologías, entre ellas Laravel para realizar unas cuantas APIs, como la comunicación en tiempo real de los datos de las estaciones, Docker para el despliegue de su respectivo contenedor, SQL en Postgresql ya que hubo una reestructuración de la bodega de datos y trabajar en sistemas operativos Linux tanto para dar soporte a la configuración en el servidor de pruebas como para el desarrollo",
    technologies: ["Vue.js", "Sass", "Bootstrap", "Montado en Docker"],
    participation: 100,
  },
  {
    title: "Bq Hoteles",
    image: bqhoteles,
    language: "Vanilla js",
    url: "https://www.bqhoteles.com/es/",
    description:
      "Web corporativa de esta cadena de hoteles, maqueté todo el sitio, incluyendo sus subdominios. Fue mi primer proyecto empresarial, los componentes que se encuentran en este sitio son rehusables ya que es el marco de trabajo de la empresa, todo componente nuevo debe ser rehusable para cualquier proyecto, en este proyecto empecé con algo nuevo que es tener un diseñador gráfico de la mano y seguir el diseño propuesto por este al pie de la letra, un diseño que se provee por medio de sketch",
    technologies: ["Javascript", "Jquery", "Sass", "Django templates"],
    participation: 90,
  },
  {
    title: "Mynd Hoteles",
    image: mynd,
    language: "Vanilla js",
    url: "https://www.myndhotels.com/es/",
    description:
      "Web corporativa de esta cadena de hoteles, incluyendo sus subdominios. Algunas de las animaciones en este proyecto fueron nuevas para mi, por ejemplo las olas que se ven en el background, también el módulo de imagenes que se traen dinámicamente desde sus redes sociales con el uso de tokens",
    technologies: ["Javascript", "Jquery", "Sass", "Django templates"],
    participation: 70,
  },
  {
    title: "Shambhala",
    image: shambhala,
    language: "Vanilla js",
    url: "https://shambhala.backhotelengine.com/es/",
    description:
      "Web corporativa de esta cadena de hoteles, incluyendo sus subdominios. De este proyecto aprendí algo nuevo que es la integración de directivas de cookies desde la plataforma cookie-script.com, como configurarlas y su uso con google analytics",
    technologies: ["Javascript", "Jquery", "Sass", "Django templates"],
    participation: 85,
  },
  {
    title: "Ciutatbarcelona",
    image: ciutatbarcelona,
    language: "Vanilla js",
    url: "https://www.ciutatbarcelona.com/",
    description:
      "Web corporativa de esta cadena de hoteles, incluyendo sus subdominios. En este proyecto apliqué algunas transiciones nuevas, pero en general se parece bastante a Mynd-hotels",
    technologies: ["Javascript", "Jquery", "Sass", "Django templates"],
    participation: 90,
  },
  {
    title: "Fairplay",
    image: fairplay,
    language: "Vanilla js",
    url: "https://www.ciutatbarcelona.com/",
    description:
      "Web corporativa de esta cadena de hoteles, incluyendo sus subdominios. En este proyecto sólo me encargué de la versión responsive",
    technologies: ["Javascript", "Sass"],
    participation: 30,
  },
  {
    title: "Carema",
    image: carema,
    language: "Vanilla js",
    url: "https://www.caremahotels.com/es/",
    description:
      "Web corporativa de esta cadena de hoteles. En este proyecto me encargué de cambiar algunos módulos solicitados por el cliente, como el carousel con vídeo del background, el módulo de hoteles, la integración del motor de reservas, maquetación de páginas de ofertas y página de paquetes y la revisión y maquetación de la versión responsive",
    technologies: ["Javascript", "Sass", "Django Templates"],
    participation: 45,
  },
  {
    title: "Bhmallorca",
    image: bhmallorca,
    language: "Vanilla js",
    url: "https://bookings.bhmallorca.com/",
    description:
      "En esta web sólo se integró el motor de reservas. En este proyecto sólo se usan tres módulos, el header, el footer y el motor de reservas, es un proyecto sencillo, también algo nuevo que se realizó fue la activación de una versión mobile donde al abrirse en un dispositivo con resolución menor a 569px se cambian los módulos para una mejor legibilidad de la web, además de la versión responsive que debe quedar funcionando en caso de fallar el cambio de módulos",
    technologies: ["Javascript", "Sass", "Django Templates"],
    participation: 100,
  },
  {
    title: "Spacehotels",
    image: spacehotels,
    language: "Vanilla js",
    url: "https://www.spacehotels.it/it/",
    description:
      "Web corporativa de hoteles. En este proyecto me ecargué de maquetar algunos módulos solicitados por el cliente, y la revision y maquetación de la versión responsive",
    technologies: ["Javascript", "Sass", "Django Templates"],
    participation: 30,
  },
  {
    title: "Spiwak",
    image: spiwak,
    language: "Vanilla js",
    url: "https://hotelesspiwak.develop.pre.roibacktest.com/es/",
    description:
      "Este es un proyecto donde sólo se requiere la integración del motor de reservas, un footer y un header, es un proyecto sencillo, aún está en desarrollo (Ya que hace falta contenido por parte del cliente). Pt: para entrar a esta web se requiere de un login ya que está en el servidor de desarrollo, usuario: demo - contraseña : demo001133",
    technologies: ["Javascript", "Sass", "Django Templates"],
    participation: 100,
  },
  {
    title: "La loca de los gatos",
    image: lalocadelosgatos,
    language: "React.js",
    url: "http://lalocadelosgatosreac-20221122085403-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/",
    description:
      "Es una web que está en desarrollo, es para una fundación de mascotas, es un proyecto personal, tanto el diseño como el backend y frontend del proyecto es hecho por mi, está montado en Amazon web services y lo considero como un proceso de aprendizaje camino al full-stack, estoy aplicando metodología enfocada en el SEO y la accesibilidad web",
    technologies: ["React.js", "Sass", "Tailwind", "Node.js", "Mongodb"],
    participation: 100,
  },
  {
    title: "Recetas aranda",
    image: recetasaranda,
    language: "React.js",
    url: "http://recetasrandaeact-20230117215512-hostingbucket-dev.s3-website-us-east-1.amazonaws.com/",
    description:
      "Esta es una prueba técnica realizada a partir de la siguiente maqueta: https://xd.adobe.com/view/60cc30f3-d2eb-4c65-831f-76a81ad1722a-359f/ donde se evalúa el conocimiento en react.js con sass y el manejo de la store, apuntando a una API prediseñada para la prueba",
    technologies: ["React.js", "Sass"],
    participation: 100,
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
      description: "",
    },
    {
      icon: design,
      title: "Maquetación",
      description: "",
    },
    {
      icon: git,
      title: "Versionamiento",
      description: "",
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
      label: "Flexibilidad",
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
      file: csvDoc,
      icon: csv,
      text: "Hoja de vida",
    },
    {
      file: coverLetterDoc,
      icon: coverLetter,
      text: "Carta de presentación",
    },
    {
      file: certificadoRoiback,
      icon: certificates,
      text: "Certificado laboral Roiback",
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
  phrase: "Entre más sopla el viento más fuertes son las raíces del árbol",
};
