import styled from 'styled-components';

export const HeaderArea = styled.header`
	position: sticky;
	top: 0;
	width: 100%;
	min-height: 80px;
	background-color: #2a928f;
	opacity: 0.9;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
	.menuOpener {
		position: absolute;
		right: 20px;
		top: 20px;
		cursor: pointer;
		display: none;
		i {
			font-size: 2rem;
			color: #fff;
		}
	}
	@media (max-width: 600px) {
		& {
			justify-content: flex-start;
		}
		.menuOpener {
			display: block;
		}
	}
`;
export const Menu = styled.div`
	& {
		transition: all ease-out 0.3s;
	}
	nav ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		li {
			margin-right: 50px;
			&: hover {
				a {
					color: #264653;
				}
			}
			a {
				color: #e9c46a;
				text-decoration: none;
				font-weight: 700;
				cursor: pointer;
			}
		}
	}
	@media (max-width: 600px) {
		& {
			display: ${props=>props.visible};
			opacity: ${props=>props.opacidade};
		}
		width: 100%;
		nav ul {
			flex-direction: column;
			padding-bottom: 20px;
			padding-top: 40px;
			li {
				margin-right: 0;
			}
		}
	}
`;