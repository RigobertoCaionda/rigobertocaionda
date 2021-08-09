import styled from 'styled-components';

export const HeaderArea = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	height: 80px;
	background-color: #aaa;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;
export const Menu = styled.div`
	nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		li {
			margin-right: 50px;
			&: hover {
				a {
					color: #000;
				}
			}
			a {
				color: #fff;
				text-decoration: none;
				font-weight: 700;
				cursor: pointer;
			}
		}
	}
`;