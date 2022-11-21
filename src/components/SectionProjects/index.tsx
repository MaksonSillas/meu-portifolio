import { ContainerSectionProjects } from "./style";
import { useState } from "react";
import imgNukenzie from "../../assets/nukenzie.png";
import imgKenzieHub from "../../assets/kenziehub.png";
import { AiFillGithub } from "react-icons/ai";
import { FiLink } from "react-icons/fi";

export function SectionProjects() {
  const [seeNukenzie, setSeeNukenzie] = useState(false);
  const [seeKenzieHub, setSeeKenzieHub] = useState(false);

  return (
    <ContainerSectionProjects id="projects">
      <div className="div-container-section-projects">
        <h2>Projetos</h2>
        <p>Alguns projetos feitos por mim</p>
      </div>
      <ul>
        <li>
          <img
            onMouseEnter={() => setSeeNukenzie(!seeNukenzie)}
            src={imgNukenzie}
            alt="Nukenzie"
          />
          {seeNukenzie && (
            <div
              onMouseLeave={() => setSeeNukenzie(!seeNukenzie)}
              // onMouseEnter={() => setSeeNukenzie(!seeNukenzie)}
              className="hover-projects"
            >
              <div className="header-project">
                <a
                  href="https://nukenzie-1yfwewha4-maksonss4.vercel.app/landingpage"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub /> Link
                </a>
                <a
                  href="https://github.com/MaksonSillas/nukenzie"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <FiLink /> GitHub
                </a>
              </div>

              <p>
                O Nu Kenzie é uma aplicação para gerenciamento de gastos,
                cadastrando entradas e saídas.
              </p>

              <p>
                As tecnologias utilizadas são: React, TypeScript,
                Styled-components, React-Router-Dom, React-icons, entre outras,
                utilizando a técnica mobile-first
              </p>
            </div>
          )}
        </li>

        <li>
          <img
            onMouseEnter={() => setSeeKenzieHub(!seeKenzieHub)}
            src={imgKenzieHub}
            alt="KenzieHub"
          />
          {seeKenzieHub && (
            <div
              onMouseLeave={() => setSeeKenzieHub(!seeKenzieHub)}
              className="hover-projects"
            >
              <div className="header-project">
                <a
                  href="https://kenzie-3swua52a7-maksonss4.vercel.app/login"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub /> Link
                </a>
                <a
                  href="https://github.com/MaksonSillas/KenzieHub"
                  target="_blanck"
                  rel="noopener noreferrer"
                >
                  <FiLink /> GitHub
                </a>
              </div>

              <p>
                O KenzieHub é um website com sistema de login em que o usuário
                logado deve ser capaz de adicionar tecnologias que domina em seu
                perfil.
              </p>

              <p>
                As tecnologias utilizadas são: React, TypeScript,
                Styled-components, React-Hook-Form, React-Router-Dom,
                React-icons, React-toastify, Yup, entre outras, utilizando a
                técnica mobile-first
              </p>
            </div>
          )}
        </li>
      </ul>
    </ContainerSectionProjects>
  );
}
