import React from 'react';
import {HeaderArea, Menu} from './styled';
import {Link } from 'react-scroll';
const Page = () => {
	return(
			<HeaderArea>
				<Menu>
					<nav>
						<ul>
							<li><Link to="sobre-area" activeClass="active" 
								spy={true} smooth={true} offset={-70} duration={500}>Sobre</Link></li>
							<li><Link to="conhecimentos-area" activeClass="active" 
								spy={true} smooth={true} offset={-70} duration={500}>Conhecimentos</Link></li>
							<li><Link to="projetos-area" activeClass="active" 
								spy={true} smooth={true} offset={-70} duration={500}>Projetos</Link></li>
							<li><Link to="contacto-area" activeClass="active" 
								spy={true} smooth={true} offset={-70} duration={500}>Contacto</Link></li>
						</ul>
					</nav>

				</Menu>
			</HeaderArea>
		);
}
export default Page;