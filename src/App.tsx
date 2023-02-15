import IntroductionBackground from "./Components/IntroductionBackground";
import JobsList from "./Components/JobsList";
import SkillsGraphs from "./Components/SkillsGraphs";
import WhatsappPopup from "./Components/WhatsappPopup";
import { background, technicalSkills, softSkills, jobs } from "./Content/Home";

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
    </div>
  );
};

export default App;
