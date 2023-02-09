import IntroductionBackground from "./Components/IntroductionBackground";
import SkillsGraphs from "./Components/SkillsGraphs";
import {
  background,
  skills,
  titleSkills,
  introductionSkills,
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
      <SkillsGraphs
        skills={skills}
        title={titleSkills}
        introduction={introductionSkills}
      />
    </div>
  );
};

export default App;
