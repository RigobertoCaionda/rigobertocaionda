import React, {useState} from 'react';
import {HeaderArea, Menu} from './styled';
import {Link } from 'react-scroll';
const Page = () => {
	const [isVisible, setIsVisible] = useState('none');
	const [opacity, setOpacity] = useState(0);
	const handleMenuOpenerClick = () => {
		if (isVisible === 'none'){
			setOpacity(1);
			setTimeout(()=>{
				setIsVisible('block');
			}, 300);
		}else {
			setOpacity(1);
			setTimeout(()=>{
				setIsVisible('none');
			}, 300);
		}
		
	}
	return(
			<HeaderArea>
			<div className="menuOpener" onClick={handleMenuOpenerClick}><i className="fas fa-bars"></i></div>
				<Menu visible={isVisible} opacidade={opacity}>
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