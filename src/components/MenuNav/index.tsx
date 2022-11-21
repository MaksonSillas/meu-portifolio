import { DivContainerNav } from "./style";

export function MenuNav() {
  return (
    <DivContainerNav>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contacts">Contatos</a>
          </li>
        </ul>
      </nav>
    </DivContainerNav>
  );
}
