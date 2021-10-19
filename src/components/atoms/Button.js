import styled from 'styled-components';

const Button = styled.button`
	background-color: transparent;
	border: none;
	justify-self: flex-end;
	${({ addStyles = '' }) => addStyles}
`;

const UserAccountButton = styled(Button)`
	border-radius: 50%;
	img {
		width: 22px;
		height: 22px;
	}
`;

export { Button, UserAccountButton };
