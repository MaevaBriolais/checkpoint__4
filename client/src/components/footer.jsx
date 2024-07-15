import "../styles/footer.css";

import email from "../assets/images/email.png";
import telephone from "../assets/images/telephone.png";
import github from "../assets/images/github.png";

function Footer() {
  return (
    <footer>
      <section className="footerContact">
        <div>
          <img src={email} alt="icon de boîte mail" />
          <p>
            <a href="mailto:briolais.maeva.pro@gmail.com">
              adressemail@hotmail.fr
            </a>
          </p>
        </div>
        <div>
          <img src={telephone} alt="icon de téléphone" />
          <p>01.02.03.04.05</p>
        </div>
      </section>
      <div className="footerGithub">
        <a href="https://github.com/MaevaBriolais" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="icon github" />
        </a>
        <p>
        Développeuse : Maëva BRIOLAIS
          </p>
      </div>
    </footer>
  );
}

export default Footer;
