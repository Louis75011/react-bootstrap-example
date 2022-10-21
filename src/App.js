import Formations from "./components/containers/formations/Formations";
import StyleBs from "./components/containers/styles/StyleBs";
import AnimationBs from "./components/containers/styles/AnimationBs";
import Firsttitle from "./components/UI/titles/Firsttitle";
import "./design/App.css";

function App() {
  return (
    <>
      <Firsttitle />
      <Formations />
      <AnimationBs />
      <StyleBs />
    </>
  );
}

export default App;
