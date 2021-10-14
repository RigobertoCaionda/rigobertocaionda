import styled from 'styled-components';
export const ProjetoItem = styled.div`
		& {
			background-color: #fff;
			padding-bottom: 25px;
			border-radius: 15px;
			.project-title h3 {
				margin: 25px 0;
				text-align: center;
				color: #000;
			}
			.project-links {
				margin: 0 80px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				a {
					display: inline-block;
					text-decoration: none;
					background-color: #000;
					color: #fff;
					margin-right: 7px;
					border-radius: 3px;
					padding: 10px;
					&: hover {
						background-color: rgba(0,0,0,.7);
					}
				}
			}
			.project-text {
				margin: 0 15px;
				margin-bottom: 15px;
				p {
					text-align: center;
					color: #000;
					font-size: 0.9rem;
				}
			}
			.project-image {
				width: 500px;
				border-bottom: 3px solid #000;
				.each-slide img {
					display: flex;
					height: 300px;
					align-items: center;
					justify-content: center;
					width: 100%;
					object-fit: cover;
					border-top-left-radius: 15px;
					border-top-right-radius: 15px;
				}
			}
		}
		@media (max-width: 600px) {
			& {
				display: flex;
				flex-direction: column;
				align-items: center;
				.project-links {
						margin: 0;
						padding: 0 40px;
						width: 100%;
					}
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