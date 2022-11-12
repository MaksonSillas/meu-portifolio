import { Header } from "./components/Header";
import { SectionMe } from "./components/SectionMe";
import { SectionProjects } from "./components/SectionProjects";
import { SectionSkills } from "./components/SectionSkills";
import Global from "./styles/Global";

function App() {
  return (
    <>
      <Global />
      <Header />
      <main>
        <SectionMe />
        <SectionSkills />
        <SectionProjects />
      </main>
    </>
  );
}

export default App;
