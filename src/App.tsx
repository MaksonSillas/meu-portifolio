import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionMe } from "./components/SectionMe";
import { SectionProjects } from "./components/SectionProjects";
import { SectionSkills } from "./components/SectionSkills";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <Header />
      <main>
        <SectionMe />
        <SectionSkills />
        <SectionProjects />
      </main>
      <Footer />
    </>
  );
}

export default App;
