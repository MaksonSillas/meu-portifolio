import { Header } from "./components/Header";
import { SectionMe } from "./components/SectionMe";
import Global from "./styles/Global";

function App() {
  return (
    <>
      <Global />
      <Header />
      <main>
        <SectionMe />
      </main>
    </>
  );
}

export default App;
