import styled from 'styled-components';

export const PageTitle = styled.h1`
	text-align: center;
	padding: 15px 0;
	color: #000;
`;
export const Template = styled.div``;
export const PageContainer = styled.div`
	width: 1000px;
	margin: auto;
	@media (max-width: 600px) {
		width: auto;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		width: auto;
	}
`;