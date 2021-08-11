import styled from 'styled-components';

export const HomePageArea = styled.div`
	padding-bottom: 30px;
	.conhecimento {
		height: 150px;
		border-radius: 10px;
		color: #073642;
		font-weight: bold;
		font-size: 1.6rem;
		text-align: center;
		line-height: 150px;
		background-color: #fdf6e3;
	}
	.contacto {
		display: flex;
		max-width: 700px;
		margin: auto;
		form {
			flex: 1;
			background-color: #fdf6e3;
			box-shadow: 0px 0px 3px #999;
			padding: 30px;
			border-radius: 5px;  
			label {
				.area-title {
					width: 100px;
					color: #073642;
					font-weight: bold;
					margin-bottom: 5px;
				}
				.area-input {
					width: 100%;
					display: flex;
					justify-content: center;
					input {
						padding: 7px;
						font-size: 1rem;
						border-radius: 3px;
						border: 1px solid #ddd;
					}
					button {
						border: 0;
						outline: 0;
						cursor: pointer;
						padding: 7px;
						width: 250px;
						background-color: #073642;
						color: #fdf6e3;
						font-weight: bold;
						font-size: 1.1rem;
						border-radius: 3px;
						&: hover {
							background-color: #448698;
						}
					}
					textarea {
						height: 150px;
						font-size: 1rem;
						border: 1px solid #ddd;
						resize: none;
						padding: 5px;
					}
					input,textarea {
						width: 100%;
						outline: 0;
						transition: all ease-out 0.4s;
						margin-bottom: 30px;
						&: focus {
							border: 1px solid #333;
						}
					}
				}
			}
		}
	}
	.projetos {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 25px;
		.project-item {
			background-color: #fdf6e3;
			padding-bottom: 25px;
			.project-title h3 {
				margin: 25px 0;
				text-align: center;
				color: #073642;
			}
			.project-links {
				margin: 0 15px;
				span {
					color: #073642;
					margin-right: 5px;
				}
				a {
					display: inline-block;
					text-decoration: none;
					background-color: #4c4c4c;
					color: #fff;
					margin-right: 7px;
					border-radius: 3px;
					padding: 10px;
					&: hover {
						background-color: #999;
					}
					i {
						margin-right: 3px;
					}
				}
			}
			.project-text {
				margin: 0 15px;
				margin-bottom: 15px;
				p {
					text-align: center;
					color: #073642;
					font-size: 0.9rem;
					i {
						color: #268bd2;
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
	}
	#sobre-area {
		.sobre {
			display: flex;
			align-items: center;
			justify-content: center;
			.sobre-left-side {
				.joinner {
					padding: 20px 10px;
					.download-documents {
						text-align: center;
						a {
							font-weight: bold;
							text-decoration: none;
							color: #268bd2;
							&: hover {
								color: #073642;
							}
						}
					}
					.links {
						display: flex;
						justify-content: space-between;
						align-items: center;
						a {
							text-decoration: none;
							background-color: #586e75;
							padding: 5px;
							border-radius: 3px;
							color: #fff;
							margin-bottom: 5px;
							i {
								margin-right: 5px;
								font-size: 1.2rem;
							}
							&: hover {
								background-color: #073642;
							}
						}
					}
				}
				.cover-color {
					height: 120px;
					background-color: #073642;
					border-top-left-radius: 15px;
					border-top-right-radius: 15px;

					.my_picture {
						background-color: #fff;
						position: relative;
						top: 40px;
						left: 30%;
						width: 150px;
						height: 150px;
						
						padding: 7px;
						.my_picture_inner {
							width: 100%;
							height: 100%;
							
							img {
								width: 100%;
								object-fit: cover;
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
						color: #073642; 
					}
					h2, h3 {
						color: #073642;
					}
					h3 {
						color: #073642;
						margin-bottom: 10px;
						font-weight: normal;
					}
				}
				background-color: #fdf6e3;
				margin-right: 25px;
				border-radius: 15px;
			}
			.sobre-right-side {
				background-color: #fdf6e3;
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				border-radius: 15px;
				padding: 50px 20px;
				p {
					font-size: 1.4rem;
					color: #073642;
					text-align: center;
					margin-bottom: 25px;
					
				}
			}
		}
	}
	@media(max-width: 600px) {
		#projetos-area {
			.projetos {
				grid-template-columns: 1fr;
				.project-item {
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
		}
		#conhecimentos-area {
			margin: 10px;
			.conhecimento {
				height: auto;
				line-height: 100%;
				padding: 50px 20px;
			}
		}
		#sobre-area {
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
		#projetos-area{
			.projetos {
					.project-image {
						width: 370px;
						margin-top: 50px;
					}	
			}
		}
		#conhecimentos-area {
			margin: 0 30px;
		}
		#sobre-area {
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