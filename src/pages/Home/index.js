import React from 'react';
import {HomePageArea} from './styled';
import {PageTitle, PageContainer} from '../../components/mainComponents';
import my_pic from '../../images/rigobertoPicture.jpg';
const Page = () => {
	return(
		<PageContainer>
			<HomePageArea>
				<div id="sobre-area">
				<PageTitle>Sobre mim</PageTitle>
				<div className="sobre">
					<div className="sobre-left-side">
						<div className="cover-color">
							<div className="my_picture">
								<div className="my_picture_inner">
									<img src={my_pic} alt="Foto de Perfil" />
								</div>
							</div>
						</div>
							<div className="joinner">
								<div className="titles">
									<PageTitle>Rigoberto Caionda</PageTitle>
									<h2>Desenvolvedor Júnior</h2>
									<h3>Luanda - Angola</h3>
								</div>
								<div className="links">
									<a href="https://github.com/RigobertoCaionda" target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Github</a>
									<a href="https://linkedin.com/in/rigoberto-caionda-2578ab202" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a>
									<a href="mailto:rigobertocaionda98@gmail.com"><i className="fas fa-envelope"></i>E-mail</a>
								</div>
								<div className="download-documents">
									Baixar CV: <a href="/">PDF</a>, <a href="/">Word</a>
								</div>
							</div>
					</div>

					<div className="sobre-right-side">
							<p>Sou desenvolvedor Front end Júnior, com bacharelato concluído em engenharia Informática. 
							Sou uma pessoa completamente apaixonada por tecnologia, principalmente pela área da programação de 
							software.</p>
							<p>Sou uma pessoa muito curiosa e estou sempre disposto a aprender coisas novas.</p>
							<p>
								Estou a procura de uma oportunidade de emprego como programador front end Júnior
								em qualquer parte do mundo.
							</p>
					</div>
				</div>
				</div>
				<div id="conhecimentos-area">
					<PageTitle>Conhecimentos</PageTitle>
					<div className="conhecimento">
						HTML 5, CSS 3, Javascript ES6, ReactJS, GIT, Github 
					</div>
				</div>
			</HomePageArea>
			</PageContainer>
		);
}
export default Page;