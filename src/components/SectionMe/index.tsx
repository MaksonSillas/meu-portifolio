import { ContainerSectionMe } from "./style";

export function SectionMe() {
  return (
    <ContainerSectionMe>
      <div className="div-container-section-me">
        <h1>Olá meu nome é Makson!</h1>
        <p>
          Sou<span className="span-blue">{` web developer`}</span>
        </p>
        <p className="size-20px">Apaixonado pelo mundo da programação</p>
        <div className="div-links">
          <a
            className="color-green"
            href="https://github.com/MaksonSillas"
            target="_blanck"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            target="_blanck"
            rel="noopener noreferrer"
            className="color-green"
            href="https://www.linkedin.com/in/makson-sillas"
          >
            Linkedin
          </a>
        </div>
      </div>
    </ContainerSectionMe>
  );
}
