import React, {useState} from 'react';
import {HomePageArea} from './styled';
import {PageTitle, PageContainer} from '../../components/mainComponents';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import my_pic from '../../images/rigobertoPicture.jpg';
import cvpdf from '../../files/cv.pdf';
import cvdocx from '../../files/cv.docx';
import hotelSamba1 from '../../images/hotelSamba1.PNG';
import hotelSamba2 from '../../images/hotelSamba2.PNG';
import hotelSamba3 from '../../images/hotelSamba3.PNG';
import hotelSamba4 from '../../images/hotelSamba4.PNG';
import tubidy1 from '../../images/tubidy1.PNG';
import tubidy2 from '../../images/tubidy2.PNG';
import cocacola1 from '../../images/cocacola1.PNG';
import cocacola2 from '../../images/cocacola2.PNG';
import cocacola3 from '../../images/cocacola3.PNG';
import countriesApp1 from '../../images/countriesApp1.PNG';
import countriesApp2 from '../../images/countriesApp3.PNG';
import countriesApp3 from '../../images/countriesApp3.PNG';
import vakinha1 from '../../images/vakinha1.PNG';
import vakinha2 from '../../images/vakinha2.PNG';
import vakinha3 from '../../images/vakinha3.PNG';
import vakinha4 from '../../images/vakinha4.PNG';
import vakinha5 from '../../images/vakinha5.PNG';
import weatherApp1 from '../../images/weatherApp1.PNG';
import weatherApp2 from '../../images/weatherApp2.PNG';
import weatherApp3 from '../../images/weatherApp3.PNG';

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
									<a href="https://github.com/RigobertoCaionda" target="_blank" rel="noreferrer">
									<i className="fab fa-github"></i>Github</a>
									<a href="https://linkedin.com/in/rigoberto-caionda-2578ab202" target="_blank" rel="noreferrer">
									<i className="fab fa-linkedin"></i>LinkedIn</a>
									<a href="mailto:rigobertocaionda98@gmail.com"><i className="fas fa-envelope"></i>E-mail</a>
								</div>
								<div className="download-documents">
									Baixar CV: <a href={cvpdf} download="Rigoberto Caionda">PDF</a>, <a href={cvdocx} 
									download="Rigoberto Caionda">Word</a>
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
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://rigobertocaionda.github.io/Hotel-Samba-Clone/" 
								target="_blank" rel="noreferrer">Github Pages</a>
								<a href="https://github.com/RigobertoCaionda/Hotel-Samba-Clone"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={tubidy1} alt="" />
									</div>
									<div className="each-slide">
										<img src={tubidy2} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Tubidy</h3>
							</div>
							<div className="project-text">
								<p>Projeto frontend criado com <i>ReactJS</i>. Se quiser ver
								este projeto rodando, clique no link Vercel.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://tubidy-clone-rigobertocaionda.vercel.app"
								target="_blank" rel="noreferrer">Vercel</a>
								<a href="https://github.com/RigobertoCaionda/tubidy-clone"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={countriesApp1} alt="" />
									</div>
									<div className="each-slide">
										<img src={countriesApp2} alt="" />
									</div>
									<div className="each-slide">
										<img src={countriesApp3} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Countries App</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado  com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Countries App é um 
								site onde você poderá encontrar diversas informações sobre os vários países do mundo.
								Podemos ter informações como população, língua, moeda, etc. Se quiser ver este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://rigobertocaionda.github.io/CountriesApp/"
								target="_blank" rel="noreferrer">Github Pages</a>
								<a href="https://github.com/RigobertoCaionda/CountriesApp"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={vakinha1} alt="" />
									</div>
									<div className="each-slide">
										<img src={vakinha2} alt="" />
									</div>
									<div className="each-slide">
										<img src={vakinha3} alt="" />
									</div>
									<div className="each-slide">
										<img src={vakinha4} alt="" />
									</div>
									<div className="each-slide">
										<img src={vakinha5} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Vakinha</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. 
								Este é um clone de um site de doações brasileiro. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://rigobertocaionda.github.io/vakinhaClone/"
								target="_blank" rel="noreferrer">Github Pages</a>
								<a href="https://github.com/RigobertoCaionda/vakinhaClone"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={weatherApp1} alt="" />
									</div>
									<div className="each-slide">
										<img src={weatherApp2} alt="" />
									</div>
									<div className="each-slide">
										<img src={weatherApp3} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Weather App</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. Weather App é um 
								site onde você poderá ver informações sobre o tempo em qualquer cidade ou país do mundo.
								Este site foi criado com a <i>API</i> da Open Weather.
								Se quiser ver este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://rigobertocaionda.github.io/WeatherApp/"
								target="_blank" rel="noreferrer">Github Pages</a>
								<a href="https://github.com/RigobertoCaionda/WeatherApp"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src={cocacola1} alt="" />
									</div>
									<div className="each-slide">
										<img src={cocacola3} alt="" />
									</div>
									<div className="each-slide">
										<img src={cocacola2} alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Coca cola</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascrpit</i> puro. 
								Este site é um clone da Coca-cola Portugal. Se quiser ver
								este projeto rodando, clique no link github Pages.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://rigobertocaionda.github.io/Cocacola/"
								target="_blank" rel="noreferrer">Github Pages</a>
								<a href="https://github.com/RigobertoCaionda/Cocacola"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
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