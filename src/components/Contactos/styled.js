import styled from 'styled-components';
export const ContactoArea = styled.div`
	& {
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
	}
`;