import IntroductionBackground from "./Components/IntroductionBackground";
import SkillsGraphs from "./Components/SkillsGraphs";
import { background } from "./Content/Home";

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
      <SkillsGraphs />
      <SkillsGraphs />
      <SkillsGraphs />
    </div>
  );
};

export default App;
