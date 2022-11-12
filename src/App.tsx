import { Header } from "./components/Header";
import { SectionMe } from "./components/SectionMe";
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
      </main>
    </>
  );
}

export default App;
