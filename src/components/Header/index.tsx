import { HeaderContainer } from "./style";
import { useState } from "react";
import foto from "../../assets/cinza.jpeg";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { MenuNav } from "../MenuNav";
import iconGmail from "../../assets/icon-gmail.svg";

export function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <div className="div-container">
        <figure>
          <img src={foto} alt="Logo" />
        </figure>
        <p className="p-descktop">
          <img src={iconGmail} alt="" />
          <span>maksonsantoss4@gmail.com</span>
        </p>
        <nav className="nav-descktop">
          <ul className="ul-descktop">
            <li>
              <a className="hover" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover" href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="hover" href="#projects">
                Projetos
              </a>
            </li>
            <li>
              <a className="hover" href="#contacts">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={() => setNavIsOpen(!navIsOpen)}>
          {!navIsOpen ? <TbMenu2 size={30} /> : <MdClose size={30} />}
        </button>
      </div>
      {navIsOpen && <MenuNav />}
    </HeaderContainer>
  );
}
