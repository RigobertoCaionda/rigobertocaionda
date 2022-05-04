import {PageTitle} from '../mainComponents';
import {ConhecimentosArea} from './styled';
const Page = () => {
	return (
			<ConhecimentosArea id="conhecimentos-area">
					<PageTitle>Conhecimentos</PageTitle>
					<div className="conhecimento">
						Javascript ES6, Angular, ReactJS, GIT, TypeScript, Node.js, AdonisJs, Mongodb, MYSQL
					</div>
				</ConhecimentosArea>
		);
}
export default Page;