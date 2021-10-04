import styled from 'styled-components';

export const HomePageArea = styled.div`
	padding-bottom: 30px;
	.projetos {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 25px;
	}

	@media(max-width: 600px) {
		#projetos-area {
			.projetos {
				grid-template-columns: 1fr;
			}
		}
	}
`;