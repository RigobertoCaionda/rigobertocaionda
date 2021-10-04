import {ContactoArea} from './styled';
import {PageTitle} from '../mainComponents';
import {useState} from 'react';
const Page = () => {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Funcionalidade indisponível no momento!");
	}
	return (
				<ContactoArea id="contacto-area">
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
								<div className="area-input">
									<button type="submit">Enviar</button>
								</div>
							</label>
						</form>
					</div>
			</ContactoArea>
		);
}
export default Page;