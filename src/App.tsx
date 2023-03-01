import IntroductionBackground from "./Components/IntroductionBackground";
import JobsList from "./Components/JobsList";
import SkillsGraphs from "./Components/SkillsGraphs";
import FilesDownload from "./Components/FilesDownload";
import WhatsappPopup from "./Components/WhatsappPopup";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import CompaniesList from "./Components/CompaniesList";
import Header from "./Components/Header";
import {
  background,
  technicalSkills,
  softSkills,
  jobs,
  header,
  footer,
  filesDownload,
  aboutMe,
  companies,
} from "./Content/Home";

const App = () => {
  return (
    <div id="app">
      <Header git={header.gitPopups} navbar={header.navbar} />
      <IntroductionBackground
        image={background.image}
        title={background.title}
        name={background.name}
        subtitle={background.subtitle}
        textButton={background.textButton}
      />
      <JobsList jobs={jobs} id="projects" />
      <AboutMe title={aboutMe.title} paragraph={aboutMe.paragraph} />
      <CompaniesList companies={companies.list} title={companies.title} />
      <SkillsGraphs
        skills={technicalSkills.skills}
        title={technicalSkills.title}
        introduction={technicalSkills.introduction}
        generalSkills={technicalSkills.skillsGeneric}
        id="technicalSkills"
      />
      <SkillsGraphs
        skills={softSkills.skills}
        title={softSkills.title}
        introduction={softSkills.introduction}
        generalSkills={softSkills.skillsGeneric}
        id="softSkills"
      />
      <FilesDownload
        files={filesDownload.files}
        title={filesDownload.title}
        id="files"
      />
      <WhatsappPopup />
      <Footer
        socialNets={footer.socialNets}
        phrase={footer.phrase}
        id="contact"
      />
    </div>
  );
};

export default App;
