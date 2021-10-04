import {useState} from 'react';
import {HomePageArea} from './styled';
import {PageTitle, PageContainer} from '../../components/mainComponents';
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Aboutme from '../../components/Aboutme';
import Conhecimentos from '../../components/Conhecimentos';

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
				<Aboutme />
				<Conhecimentos />
				<div id="projetos-area">
					<PageTitle>Projetos</PageTitle>
					<div className="projetos">
						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src="/assets/hotelSamba2.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/hotelSamba1.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/hotelSamba3.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/hotelSamba4.PNG" alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Hotel Samba</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascript</i> puro. Se quiser ver
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
										<img src="/assets/tubidy1.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/tubidy2.PNG" alt="" />
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
										<img src="/assets/instagram1.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/instagram2.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/instagram3.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/instagram4.PNG" alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Instagram Clone</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado  com <i>ReactJS</i>. Este projeto é um clone do Instagram, onde eu pude praticar muita coisa boa de React
								como criação de componentes, criação de slides no React e muitas outras coisas.
								Se quiser ver este projeto rodando, clique no link Vercel.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://instagram-clone-git-master-rigobertocaionda.vercel.app"
								target="_blank" rel="noreferrer">Vercel</a>
								<a href="https://github.com/RigobertoCaionda/instagram-clone"
								target="_blank" rel="noreferrer"><i className="fab fa-github"></i>Frontend</a>
							</div>
						</div>

						<div className="project-item">
							<div className="project-image">
								<Slide>
									<div className="each-slide">
										<img src="/assets/vakinha1.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/vakinha2.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/vakinha3.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/vakinha4.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/vakinha5.PNG" alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Vakinha</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascript</i> puro. 
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
										<img src="/assets/weatherApp1.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/weatherApp2.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/weatherApp3.PNG" alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Weather App</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>HTML</i>, <i>CSS</i> e <i>Javascript</i> puro. Weather App é um 
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
										<img src="/assets/apiki1.PNG" alt="" />
									</div>
									<div className="each-slide">
										<img src="/assets/apiki2.PNG" alt="" />
									</div>
								</Slide>
							</div>
							<div className="project-title">
								<h3>Apiki</h3>
							</div>
							<div className="project-text">
								<p>Projeto criado com <i>ReactJS</i>. 
								Este site é um desafio do front challenge que consiste na criação desta 
								página da Apiki. Apiki é uma empresa de criação de sites em wordpress e 
								de hospedagem.
								Se quiser ver este projeto rodando, clique no link Vercel.</p>
							</div>

							<div className="project-links">
								<span>Links:</span>
								<a href="https://apiki-git-master-rigobertocaionda.vercel.app/"
								target="_blank" rel="noreferrer">Vercel</a>

								<a href="https://github.com/RigobertoCaionda/apiki"
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