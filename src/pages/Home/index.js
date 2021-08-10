import React, {useState} from 'react';
import {HomePageArea} from './styled';
import {PageTitle, PageContainer} from '../../components/mainComponents';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import my_pic from '../../images/rigobertoPicture.jpg';
import hotelSamba1 from '../../images/hotelSamba1.PNG';
import hotelSamba2 from '../../images/hotelSamba2.PNG';
import hotelSamba3 from '../../images/hotelSamba3.PNG';
import hotelSamba4 from '../../images/hotelSamba4.PNG';
const Page = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Funcionalidade indisponível no momento!");
	}
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
				<div id="projetos-area">
					<PageTitle>Projetos</PageTitle>
					<div className="projetos">
						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={hotelSamba2} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba1} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba3} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba4} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado apenas com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://rigobertocaionda.github.io/Hotel-Samba-Clone/">Github Pages</a>
								<a href="https://github.com/RigobertoCaionda/Hotel-Samba-Clone"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={hotelSamba2} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba1} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba3} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba4} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado apenas com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="hhtgf.com">Github Pages</a>
								<a href="fd"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={hotelSamba2} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba1} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba3} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba4} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado apenas com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="hhtgf.com">Github Pages</a>
								<a href="fd"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={hotelSamba2} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba1} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba3} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba4} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado apenas com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="hhtgf.com">Github Pages</a>
								<a href="fd"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={hotelSamba2} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba1} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba3} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba4} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado apenas com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="hhtgf.com">Github Pages</a>
								<a href="fd"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={hotelSamba2} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba1} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba3} alt="" />
									</div>
									<div className="each-slide">
										<img src={hotelSamba4} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado apenas com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="hhtgf.com">Github Pages</a>
								<a href="fd"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>
					</div>
				</div>

				<div id="contacto-area">
					<PageTitle>Contactos</PageTitle>
					<div className="contacto">
						<form onSubmit={handleSubmit}>
							<label>
								<div className="area-title">Email</div>
								<div className="area-input">
									<input type="text" placeholder="Digite seu email" value={email} 
									onChange={e=>setEmail(e.target.value)}/>
								</div>
							</label>

							<label>
								<div className="area-title">Mensagem</div>
								<div className="area-input">
									<textarea placeholder="Digite sua mensagem" value={message}
									onChange={e=>setMessage(e.target.value)}></textarea>
								</div>
							</label>

							<label>
								<div className="area-title"></div>
								<div className="area-input">
									<button type="submit">Enviar</button>
								</div>
							</label>
						</form>
					</div>
				</div>
			</HomePageArea>
			</PageContainer>
		);
}
export default Page;