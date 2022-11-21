import { HeaderContainer } from "./style";
import { useState } from "react";
import foto from "../../assets/profile-picture.jpeg";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { MenuNav } from "../MenuNav";
import iconGmail from "../../assets/icon-gmail.svg";
import { copieEmail } from "../../services";

export function Header() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <HeaderContainer id="profile">
      <div className="div-container">
        <figure>
          <img src={foto} alt="Logo" />
        </figure>
        <button type="button" onClick={copieEmail}>
          <p className="p-descktop">
            <img src={iconGmail} alt="" />
            <span>Clique para copiar o email</span>
          </p>
        </button>
        <nav className="nav-descktop">
          <ul className="ul-descktop">
            <li>
              <a className="hover hover-3" href="#profile">
                Home
              </a>
            </li>
            <li>
              <a className="hover hover-3" href="#skills">
                Habilidades
              </a>
            </li>
            <li>
              <a className="hover hover-3" href="#projects">
                Projetos
              </a>
            </li>
            <li>
              <a className="hover hover-3" href="#contacts">
                Contatos
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="display-none"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          {!navIsOpen ? (
            <TbMenu2 className="svg-branco" size={40} />
          ) : (
            <MdClose className="svg-branco" size={40} />
          )}
        </button>
      </div>
      {navIsOpen && <MenuNav />}
    </HeaderContainer>
  );
}
