import { ContainerFooter } from "./style";
import IconGmail from "../../assets/icon-gmail.svg";
import IconLinkedin from "../../assets/icon-linkedin.svg";
import IconGitHub from "../../assets/icon-g-i-t-h-u-b.svg";
import { toast } from "react-toastify";

function copieEmail() {
  const email = "maksonsantoss4@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    toast.info("Email copiado para área de transferência", {
      autoClose: 2000,
    });
  });
}

export function Footer() {
  return (
    <ContainerFooter id="contacts">
      <div className="div-container-footer">
        <h2>Contatos</h2>
        <div className="div-contacs">
          <button onClick={copieEmail}>
            <img src={IconGmail} alt="Gmail" />
          </button>
          <a
            target="_blanck"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/makson-sillas"
          >
            <img className="icon-width" src={IconLinkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/MaksonSillas"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <img className="icon-width" src={IconGitHub} alt="GitHub" />
          </a>
        </div>
      </div>
    </ContainerFooter>
  );
}
