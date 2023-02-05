import IntroductionBackground from "./Components/IntroductionBackground";
import { background } from "./Content/Home";

const App = () => {
  return (
    <div>
      <IntroductionBackground
        image={background.image}
        title={background.title}
        name={background.name}
        subtitle={background.subtitle}
      />
    </div>
  );
};

export default App;
