import {PageTitle} from '../mainComponents';
import {ConhecimentosArea} from './styled';
const Page = () => {
	return (
			<ConhecimentosArea id="conhecimentos-area">
					<PageTitle>Conhecimentos</PageTitle>
					<div className="conhecimento">
						ReactJS, Angular, GIT, TypeScript, Node.js, Mongodb, MYSQL
					</div>
				</ConhecimentosArea>
		);
}
export default Page;