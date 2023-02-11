import IntroductionBackground from "./Components/IntroductionBackground";
import SkillsGraphs from "./Components/SkillsGraphs";
import { background, technicalSkills } from "./Content/Home";

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
    </div>
  );
};

export default App;
