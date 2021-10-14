import styled from 'styled-components';
export const ConhecimentosArea = styled.div`
	& {
		.conhecimento {
			height: 150px;
			border-radius: 10px;
			color: #000;
			font-weight: bold;
			font-size: 1.6rem;
			text-align: center;
			line-height: 150px;
			background-color: #fff;
		}
	}
	@media (max-width: 600px) {
		& {
			margin: 10px;
			.conhecimento {
				height: auto;
				line-height: 100%;
				padding: 50px 20px;
			}
		}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			margin: 0 30px;
		}
	}
`;