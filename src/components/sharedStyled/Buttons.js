import styled from 'styled-components';
import { COLORS } from 'utils/STYLE_VARIABLES';

const Button = styled.button`
	background-color: transparent;
	border: none;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		top: -5px;
		bottom: -5px;
		left: -5px;
		right: -5px;
	}
`;

const PrimaryButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 20px;
	background-color: ${COLORS.orange};
	color: ${COLORS.white};
	font-weight: 700;
	border-radius: 15px;
	font-size: 16px;
	&:active {
		background-color: hsl(26, 100%, 63%);
	}
`;

export { Button, PrimaryButton };
