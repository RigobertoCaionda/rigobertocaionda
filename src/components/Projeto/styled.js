import styled from 'styled-components';
export const ProjetoItem = styled.div`
		& {
			background-color: #e76f51;
			padding-bottom: 25px;
			.project-title h3 {
				margin: 25px 0;
				text-align: center;
				color: #264653;
			}
			.project-links {
				margin: 0 15px;
				a {
					display: inline-block;
					text-decoration: none;
					background-color: #2a928f;
					color: #fff;
					margin-right: 7px;
					border-radius: 3px;
					padding: 10px;
					&: hover {
						background-color: #073642;
					}
				}
			}
			.project-text {
				margin: 0 15px;
				margin-bottom: 15px;
				p {
					text-align: center;
					color: #264653;
					font-size: 0.9rem;
					i {
						color: #264653;
						font-weight: bold;
					}
				}
			}
			.project-image {
				width: 500px;
				.each-slide img {
					display: flex;
					height: 300px;
					align-items: center;
					justify-content: center;
					width: 100%;
					object-fit: cover;
				}
			}
		}
		@media (max-width: 600px) {
			& {
				display: flex;
				flex-direction: column;
				align-items: center;
				.project-text {
					p {
						font-size: 1.1rem;
					}
				}
				.project-image {
					width: 320px;
					margin-top: 50px;
				}	
			}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		.project-image {
			width: 370px;
			margin-top: 50px;
		}	
	}
`;