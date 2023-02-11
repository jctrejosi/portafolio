import IntroductionBackground from "./Components/IntroductionBackground";
import SkillsGraphs from "./Components/SkillsGraphs";
import WhatsappPopup from "./Components/WhatsappPopup";
import { background, technicalSkills, softSkills } from "./Content/Home";

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
      <SkillsGraphs
        skills={technicalSkills.skills}
        title={technicalSkills.title}
        introduction={technicalSkills.introduction}
      />
      <SkillsGraphs
        skills={softSkills.skills}
        title={softSkills.title}
        introduction={softSkills.introduction}
      />
      <WhatsappPopup />
    </div>
  );
};

export default App;
