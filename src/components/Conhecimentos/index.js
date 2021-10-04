import {PageTitle} from '../mainComponents';
import {ConhecimentosArea} from './styled';
const Page = () => {
	return (
			<ConhecimentosArea id="conhecimentos-area">
					<PageTitle>Conhecimentos</PageTitle>
					<div className="conhecimento">
						HTML 5, CSS 3, Javascript ES6, ReactJS, GIT 
					</div>
				</ConhecimentosArea>
		);
}
export default Page;