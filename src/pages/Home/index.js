import {useState} from 'react';
import {HomePageArea} from './styled';
import {PageTitle, PageContainer} from '../../components/mainComponents';
import Aboutme from '../../components/Aboutme';
import Conhecimentos from '../../components/Conhecimentos';
import Contactos from '../../components/Contactos';
import Projeto from '../../components/Projeto';

const Page = () => {
	const [TotProjects] = useState([
			{
				title: 'Apiki',
				description: "Projeto criado com ReactJS. Este site é um desafio do front challenge que consiste na criação desta página da Apiki. Apiki é uma empresa de criação de sites em wordpress e de hospedagem. Se quiser ver este projeto rodando, clique no link Vercel.",
				techs: 'ReactJS',
				linksName: ['Vercel', 'Frontend'],
				linksURL: ['https://apiki-git-master-rigobertocaionda.vercel.app/', 
					'https://github.com/RigobertoCaionda/apiki'],
				images: ['/assets/apiki1.PNG','/assets/apiki2.PNG']
			},
			{
				title: 'Tubidy',
				description: "Projeto frontend criado com ReactJS. Se quiser ver este projeto rodando, clique no link Vercel.",
				techs: 'ReactJS',
				linksName: ['Vercel', 'Frontend'],
				linksURL: ['https://tubidy-clone-rigobertocaionda.vercel.app', 
					'https://github.com/RigobertoCaionda/tubidy-clone'],
				images: ['/assets/tubidy1.PNG','/assets/tubidy2.PNG']
			},
			{
				title: 'Hotel Samba',
				description: "Projeto criado com HTML, CSS e Javascript puro. Se quiser ver este projeto rodando, clique no link github Pages.",
				techs: 'HTML, CSS e Javascript puro',
				linksName: ['Github Pages', 'Frontend'],
				linksURL: ['https://rigobertocaionda.github.io/Hotel-Samba-Clone/', 
					'https://github.com/RigobertoCaionda/Hotel-Samba-Clone'],
				images: ['/assets/hotelSamba2.PNG','/assets/hotelSamba1.PNG','/assets/hotelSamba3.PNG',
					'/assets/hotelSamba4.PNG']
			},
			{
				title: 'Instagram Clone',
				description: "Projeto criado  com ReactJS. Este projeto é um clone do Instagram, onde eu pude praticar muita coisa boa de React como criação de componentes, criação de slides no React e muitas outras coisas. Se quiser ver este projeto rodando, clique no link Vercel.",
				techs: 'ReactJS',
				linksName: ['Vercel', 'Frontend'],
				linksURL: ['https://instagram-clone-git-master-rigobertocaionda.vercel.app', 
					'https://github.com/RigobertoCaionda/instagram-clone'],
				images: ['/assets/instagram1.PNG','/assets/instagram2.PNG','/assets/instagram3.PNG',
					'/assets/instagram4.PNG']
			},
			{
				title: 'Vakinha',
				description: "Projeto criado com HTML, CSS e Javascript puro. Este é um clone de um site de doações brasileiro. Se quiser ver este projeto rodando, clique no link github Pages.",
				techs: 'HTML, CSS e Javascript puro',
				linksName: ['Github Pages', 'Frontend'],
				linksURL: ['https://rigobertocaionda.github.io/vakinhaClone/', 
					'https://github.com/RigobertoCaionda/vakinhaClone'],
				images: ['/assets/vakinha1.PNG','/assets/vakinha2.PNG','/assets/vakinha3.PNG',
					'/assets/vakinha4.PNG', '/assets/vakinha5.PNG']
			},
			{
				title: 'Weather App',
				description: "Projeto criado com HTML, CSS e Javascript puro. Weather App é um site onde você poderá ver informações sobre o tempo em qualquer cidade ou país do mundo. Este site foi criado com a <i>API</i> da Open Weather. Se quiser ver este projeto rodando, clique no link github Pages.",
				techs: 'HTML, CSS e Javascript puro',
				linksName: ['Github Pages', 'Frontend'],
				linksURL: ['https://rigobertocaionda.github.io/WeatherApp/', 
					'https://github.com/RigobertoCaionda/WeatherApp'],
				images: ['/assets/weatherApp1.PNG','/assets/weatherApp2.PNG','/assets/weatherApp3.PNG']
			}
		]);
	return(
		<PageContainer>
			<HomePageArea>
				<Aboutme />
				<Conhecimentos />
				<div id="projetos-area">
					<PageTitle>Projetos</PageTitle>
						<div className="projetos">
							{TotProjects.map((item, key)=>(
								<Projeto key={key} data={item}/>
							))}
						</div>
				</div>

				<Contactos />
			</HomePageArea>
			</PageContainer>
		);
}
export default Page;