import styled from 'styled-components';

export const HomePageArea = styled.div`
	padding-bottom: 30px;
	.contacto {
		display: flex;
		max-width: 700px;
		margin: auto;
		form {
			flex: 1;
			background-color: #e76f51;
			box-shadow: 0px 0px 3px #2a928f;
			padding: 30px;
			border-radius: 5px;  
			label {
				.area-title {
					width: 100px;
					color: #264653;
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
						background-color: #2a928f;
						color: #fdf6e3;
						font-weight: bold;
						font-size: 1.1rem;
						border-radius: 3px;
						&: hover {
							background-color: #073642;
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
							border: 1px solid #264653;
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
			background-color: #e76f51;
			padding-bottom: 25px;
			.project-title h3 {
				margin: 25px 0;
				text-align: center;
				color: #264653;
			}
			.project-links {
				margin: 0 15px;
				span {
					color: #264653;
					margin-right: 5px;
				}
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
	}
`;