import { PageTitle } from "../mainComponents";
import { Sobre } from "./styled";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
const Page = () => {
  return (
    <Sobre id="sobre-area">
      <PageTitle>Sobre mim</PageTitle>
      <div className="sobre">
        <div className="sobre-left-side">
          <div className="cover-color">
            <div className="my_picture">
              <div className="my_picture_inner">
                <img src="/assets/rigobertoPicture.jpg" alt="Foto de Perfil" />
              </div>
            </div>
          </div>
          <div className="joinner">
            <div className="titles">
              <PageTitle>Rigoberto Caionda</PageTitle>
              <h2>Desenvolvedor Full Stack</h2>
              <h3>Luanda - Angola</h3>
            </div>
            <div className="links">
              <a
                href="https://github.com/RigobertoCaionda"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon style={{ marginRight: 5, fontSize: "1.2rem" }} />
                Github
              </a>
              <a
                href="https://linkedin.com/in/rigoberto-caionda-2578ab202"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon style={{ marginRight: 5, fontSize: "1.2rem" }} />
                LinkedIn
              </a>
              <a href="mailto:rigobertocaionda98@gmail.com">
                <EmailIcon style={{ marginRight: 5, fontSize: "1.2rem" }} />
                E-mail
              </a>
            </div>
            <div className="download-documents">
              Baixar CV:{" "}
              <a href="/assets/cv.pdf" download="Rigoberto Caionda">
                PDF
              </a>
              ,{" "}
              <a href="/assets/cv.docx" download="Rigoberto Caionda">
                Word
              </a>
            </div>
          </div>
        </div>

        <div className="sobre-right-side">
          <p>
            Sou desenvolvedor Full Stack (Angular, Reactjs, Typescript, Node.js (NestJS e AdonisJs)), sou 
            licenciado em engenharia Informática. Sou uma pessoa
            completamente apaixonada por tecnologia, principalmente pela área da
            programação de software.
          </p>
          <p>
            Sou uma pessoa muito curiosa e estou sempre disposto a aprender
            coisas novas.
          </p>
          <p>
            Trabalhando atualmente como desenvolvedor Full Stack (Angular e AdonisJs/NestJS), aberto a novas oportunidades.
          </p>
        </div>
      </div>
    </Sobre>
  );
};
export default Page;
