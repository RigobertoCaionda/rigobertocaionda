import React from 'react';
import {FooterArea} from './styled';
const Page = () => {
	let d = new Date();
	let year = d.getFullYear();
	return(
			<FooterArea>
				Rigoberto Caionda - {year}

			</FooterArea>
		);
}
export default Page;