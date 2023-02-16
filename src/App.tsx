import IntroductionBackground from "./Components/IntroductionBackground";
import JobsList from "./Components/JobsList";
import SkillsGraphs from "./Components/SkillsGraphs";
import WhatsappPopup from "./Components/WhatsappPopup";
import GitPopup from "./Components/GitPopup";
import Footer from "./Components/Footer";
import {
  background,
  technicalSkills,
  softSkills,
  jobs,
  gitPopups,
  footer,
} from "./Content/Home";

const App = () => {
  return (
    <div id="app">
      <IntroductionBackground
        image={background.image}
        title={background.title}
        name={background.name}
        subtitle={background.subtitle}
        textButton={background.textButton}
      />
      <JobsList jobs={jobs} />
      <SkillsGraphs
        skills={technicalSkills.skills}
        title={technicalSkills.title}
        introduction={technicalSkills.introduction}
        generalSkills={technicalSkills.skillsGeneric}
      />
      <SkillsGraphs
        skills={softSkills.skills}
        title={softSkills.title}
        introduction={softSkills.introduction}
        generalSkills={softSkills.skillsGeneric}
      />
      <WhatsappPopup />
      <GitPopup icons={gitPopups} />
      <Footer socialNets={footer.socialNets} phrase={footer.phrase} />
    </div>
  );
};

export default App;
