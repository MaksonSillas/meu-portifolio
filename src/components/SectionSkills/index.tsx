import { ContainerSectionSkills } from "./style";
import IconHtml from "../../assets/icon-html-5.svg";
import IconCss from "../../assets/icon-css3.svg";
import IconJavaScript from "../../assets/icon-javascript.svg";
import IconTypeScript from "../../assets/icon-typescript.svg";
import IconReact from "../../assets/icon-react.svg";
import IconStyledComponents from "../../assets/icon-styled-components.svg";
import IconNodeJs from "../../assets/icon-node-js.svg";
import IconPostgresql from "../../assets/icon-postgresql.svg";
import IconExpress from "../../assets/icon-express.svg";
import IconGit from "../../assets/icon-git.svg";
// import IconDocker from "../../assets/icon-docker.svg";
import IconGitHub from "../../assets/icon-github-1.svg";
import IconFigma from "../../assets/icon-figma.svg";
import IconPython from "../../assets/icon-python.svg";

export function SectionSkills() {
  return (
    <ContainerSectionSkills id="skills">
      <div className="div-container-section-skills">
        <h2>Habilidades</h2>
        <p>Algumas das tecnologias e ferramentas que eu mais utilizo</p>
        <div className="div-svgs">
          <img src={IconHtml} title="HTML5" alt="HTML5" />
          <img src={IconCss} title="CSS3" alt="CSS3" />
          <img src={IconJavaScript} title="JavaScript" alt="JavaScript" />
          <img src={IconTypeScript} title="TypeScript" alt="TypeScript" />
          <img src={IconReact} title="React" alt="React" />
          <img
            src={IconStyledComponents}
            title="Styled-Components"
            alt="Styled-Components"
          />
          <img src={IconNodeJs} title="NodeJs" alt="NodeJs" />
          <img
            className="icon-express background-color-branco"
            title="Express"
            src={IconExpress}
            alt="Express"
          />
          <img src={IconPostgresql} title="PostgreSQL" alt="PostgreSQL" />
          <img src={IconPython} title="Python" alt="Python" />
          {/* <img src={IconDocker} title="Docker" alt="Docker" /> */}
          <img src={IconGit} title="Git" alt="Git" />
          <img
            className="background-color-branco"
            src={IconGitHub}
            title="GitHub"
            alt="GitHub"
          />
          <img src={IconFigma} title="Figma" alt="Figma" />
        </div>
        {/* <p>
          Para acessar alguns dos meus projetos{" "}
          <a
            href="https://github.com/MaksonSillas"
            target="_blanck"
            rel="noopener noreferrer"
            className="hover-2"
          >
            clique aqui{" "}
          </a>
          e navegue para o meu github.
        </p> */}
      </div>
    </ContainerSectionSkills>
  );
}
