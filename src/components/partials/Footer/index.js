import {FooterArea} from './styled';
const Page = () => {
		const d = new Date();
		const year = d.getFullYear();
	return(
			<FooterArea>
				Rigoberto Caionda - {year}

			</FooterArea>
		);
}
export default Page;