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
							background-color: green;
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
`;