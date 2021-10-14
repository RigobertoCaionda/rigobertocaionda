import {useState} from 'react';
import {HeaderArea, Menu, Nav} from './styled';
import {Link } from 'react-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
const Page = () => {
	const [isVisible, setIsVisible] = useState(false);
	const handleMenuOpenerClick = () => {
				setIsVisible(true);
	}
	const handleMenuCloserClick = () => {
		setIsVisible(false);
	}
	return(
			<HeaderArea>
			{!isVisible && 
				<div className="menuOpener" onClick={handleMenuOpenerClick}><MenuIcon 
					style={{color: '#fff', fontSize: '2rem'}}/>
				</div>
			}
			{isVisible && 
				<div className="menuCloser" onClick={handleMenuCloserClick}><CloseIcon 
					style={{color: '#fff', fontSize: '2rem'}}/>
				</div>
			}

				<Menu visible={isVisible}>
					<Nav visible={isVisible}>
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
					</Nav>

				</Menu>
			</HeaderArea>
		);
}
export default Page;