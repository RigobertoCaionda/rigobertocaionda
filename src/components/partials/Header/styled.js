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
	}
	.menuCloser {
		position: absolute;
		right: 20px;
		top: 20px;
		cursor: pointer;
		display: none;
	}
	@media (max-width: 600px) {
		& {
			justify-content: flex-start;
			.menuOpener {
				display: block;
			}
			.menuCloser {
				display: block;
			}
		}
	}
`;
export const Menu = styled.div`
	& {
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
					padding: 5px 0;
					color: #e9c46a;
					text-decoration: none;
					font-weight: 700;
					cursor: pointer;
				}
				.active {
					border-radius: 5px;
					padding-left: 5px;
					padding-right: 5px;
					background-color: #eee;
				}
			}
		}
		li: last-child {
			margin-right: 0;
		}
	}

	@media (max-width: 600px) {
		& {
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
	}
`;
export const Nav = styled.nav`
	@media (max-width: 600px) {
		& {
			transition: all ease 0.4s;
			height: ${props=>props.visible ? '140px' : '5px'};
			overflow: hidden;
		}
	}
`;