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
            Sou desenvolvedor Front end (React.js, Angular, Bootstrap, Typescript, Node.js), minha jornada em
            programação começou em 2017 quando eu decidi tentar fazer o que eu sempre sonhei. A parte visual
            de um site (O front end) chama-me muito a atenção.
          </p>
          <p>
            Estou sempre procurando me melhorar como programador e estou sempre estudando coisas novas.
            Não tenho medo de experimentar novos desafios e tenho sede de resolver tarefas desafiadoras.
          </p>
          <p>
           Eu amo programar, é algo super poderoso, é um orgulho ver as coisas se unindo para formar um produto
           ou ferramenta útil.
          </p>
          <p>
           Programar nem sempre é fácil, mas é sempre muito prazeroso resolver os desafios do dia a dia.
           O meu objetivo é dar soluções consistentes para os problemas reais das pessoas.
          </p>
        </div>
      </div>
    </Sobre>
  );
};
export default Page;
