import styled from 'styled-components';
export const Sobre = styled.div`
	& {
		.sobre {
			display: flex;
			align-items: center;
			justify-content: center;
			.sobre-left-side {
				.joinner {
					padding: 20px 10px;
					.download-documents {
						text-align: center;
						color: #000;
						a {
							font-weight: bold;
							text-decoration: none;
							color: #000;
							&: hover {
								color: rgba(0,0,0,.7);
							}
						}
					}
					.links {
						display: flex;
						justify-content: space-between;
						align-items: center;
						a {
							text-decoration: none;
							background-color: #000;
							padding: 5px;
							border-radius: 3px;
							color: #fff;
							margin-bottom: 5px;
							&: hover {
								background-color: rgba(0,0,0,.7);
							}
						}
					}
				}
				.cover-color {
					height: 120px;
					background-color: #00A2FF;
					border-top-left-radius: 15px;
					border-top-right-radius: 15px;

					.my_picture {
						background-color: #fff;
						position: relative;
						top: 40px;
						left: 30%;
						width: 150px;
						height: 150px;
						border-radius: 50%;
						padding: 7px;
						.my_picture_inner {
							width: 100%;
							height: 100%;
							img {
								width: 100%;
								object-fit: cover;
								border-radius: 50%;
							}
						}
				}
				}
				
				.titles {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					margin-top: 80px;
					h1 {
						padding: 0 0 8px 0;
						color: #fff; 
					}
					h2, h3 {
						color: #fff;
					}
					h3 {
						color: #fff;
						margin-bottom: 10px;
						font-weight: normal;
					}
				}
				background-color: #1C94D9;
				margin-right: 25px;
				border-radius: 15px;
			}
			.sobre-right-side {
				background-color: #fff;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				border-radius: 15px;
				padding: 50px 20px;
				p {
					font-size: 1.4rem;
					color: #000;
					text-align: center;
					margin-bottom: 25px;
					
				}
			}
		}
	}
	@media (max-width: 600px) {
		& {
			.sobre {
				flex-direction: column;
				align-items: flex-start;
				.sobre-left-side {
					width: 95%;
					margin: 0 10px;
				}
				.sobre-right-side {
					padding: 20px 10px;
					margin-top: 20px;
					margin-right: 10px;
					margin-left: 10px;
					flex: none;
					p {
						font-size: 1.2rem;
					}
				}
			}
		}
	}
	@media (min-width: 768px) and (max-width: 1023px) {
		& {
			.sobre {
				padding: 30px;
					.sobre-right-side {
					p {
						font-size: 1.2rem;
					}
				}	
			}
			
		}
	}
`;