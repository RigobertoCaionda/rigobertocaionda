import { useState } from "react";
import { HomePageArea } from "./styled";
import { PageTitle, PageContainer } from "../../components/mainComponents";
import Aboutme from "../../components/Aboutme";
import Conhecimentos from "../../components/Conhecimentos";
import Contactos from "../../components/Contactos";
import Projeto from "../../components/Projeto";

const Page = () => {
  const [TotProjects] = useState([
    {
      title: "Lyrics",
      description:
        "Projeto criado com ReactJS, TypeScript, postgreSQL e Node.js. Lyrics é um site onde você poderá se cadastrar, fazer login e ver as letras das músicas que gosta. Se quiser ver este projeto rodando, clique no link Vercel.",
      techs: "ReactJS, TypeScript, postgreSQL e Node.js",
      linksName: ["Vercel", "Frontend"],
      linksURL: [
        "https://lyrics-kappa.vercel.app/",
        "https://github.com/RigobertoCaionda/lyrics"
      ],
      images: [
        "/assets/lyrics1.PNG",
        "/assets/lyrics2.PNG",
        "/assets/lyrics3.PNG",
        "/assets/lyrics4.PNG"
      ]
    },
    {
      title: "Blog",
      description:
        "Projeto criado com ReactJS, Typescript, MongoDB e Node.js. Este é um blog com layout inspirado no blog do Felipe Fialho, nele é possível fazer postagens, comentar e curtir (Comentários e posts), desde que o usuário esteja logado. Disponibilizo aqui os códigos frontend e o backend deste projeto.",
      techs: "ReactJS, Typescript, MongoDB, Node.js",
      linksName: ["Backend", "Frontend"],
      linksURL: [
        "https://github.com/RigobertoCaionda/Tech-blog-backend",
        "https://github.com/RigobertoCaionda/Tech-blog"
      ],
      images: [
        "/assets/blogarea.PNG",
        "/assets/blogarea2.PNG",
        "/assets/blogarea3.PNG",
        "/assets/blogarea4.PNG",
        "/assets/blogarea5.PNG"
      ]
    },
    {
      title: "Escolinha Criar e Crescer",
      description:
        "Projeto criado com Angular, Bootstrap e NestJS. Este é um site  de doações para a instituição de caridade Escolinha Criar e Crescer, o projeto é totalmente responsivo. Se quiser ver este projeto rodando, clique no link Vercel.",
      techs: "Angular, NestJS",
      linksName: ["Vercel", "Frontend"],
      linksURL: [
        "https://escolinha-criar-crescer-git-master-rigobertocaionda.vercel.app/home",
        "#"
      ],
      images: ["/assets/escolinha1.PNG", "/assets/escolinha2.PNG", "/assets/escolinha3.PNG"]
    },
    {
      title: "Tubidy",
      description:
        "Projeto frontend criado com ReactJS. Se quiser ver este projeto rodando, clique no link Vercel.",
      techs: "ReactJS",
      linksName: ["Vercel", "Frontend"],
      linksURL: [
        "https://tubidy-clone-rigobertocaionda.vercel.app",
        "https://github.com/RigobertoCaionda/tubidy-clone"
      ],
      images: ["/assets/tubidy1.PNG", "/assets/tubidy2.PNG"]
    },
    {
      title: "Instagram Clone",
      description:
        "Projeto criado  com ReactJS. Este projeto é um clone do Instagram, onde eu pude praticar muita coisa boa de React como criação de componentes, criação de slides no React e muitas outras coisas. Se quiser ver este projeto rodando, clique no link Vercel.",
      techs: "ReactJS",
      linksName: ["Vercel", "Frontend"],
      linksURL: [
        "https://instagram-clone-git-master-rigobertocaionda.vercel.app",
        "https://github.com/RigobertoCaionda/instagram-clone"
      ],
      images: [
        "/assets/instagram1.PNG",
        "/assets/instagram2.PNG",
        "/assets/instagram3.PNG",
        "/assets/instagram4.PNG"
      ]
    },
    {
      title: "Hotel Samba",
      description:
        "Projeto criado com HTML, CSS e Javascript puro. Se quiser ver este projeto rodando, clique no link github Pages.",
      techs: "HTML, CSS e Javascript puro",
      linksName: ["Github Pages", "Frontend"],
      linksURL: [
        "https://rigobertocaionda.github.io/Hotel-Samba-Clone/",
        "https://github.com/RigobertoCaionda/Hotel-Samba-Clone"
      ],
      images: [
        "/assets/hotelSamba2.PNG",
        "/assets/hotelSamba1.PNG",
        "/assets/hotelSamba3.PNG",
        "/assets/hotelSamba4.PNG"
      ]
    }
  ]);
  return (
    <PageContainer>
      <HomePageArea>
        <Aboutme />
        <Conhecimentos />
        <div id="projetos-area">
          <PageTitle>Projetos</PageTitle>
          <div className="projetos">
            {TotProjects.map((item, key) => (
              <Projeto key={key} data={item} />
            ))}
          </div>
        </div>

        <Contactos />
      </HomePageArea>
    </PageContainer>
  );
};
export default Page;
