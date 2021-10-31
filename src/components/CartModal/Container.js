import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const Container = styled.div`
	position: absolute;
	left: 8px;
	right: 8px;
	bottom: 0;
	transform: translate(0, calc(100% + 8px));
	z-index: 1;
	background-color: ${COLORS.white};
	border-radius: 10px;
	min-height: 220px;
	${({ isOpened }) => (isOpened ? `display: flex;` : `display: none;`)}
	box-shadow: 0 10px 35px -10px ${COLORS.darkGrayishBlue};
	flex-direction: column;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		left: initial;
		right: 0;
		transform: translate(8px, calc(100% - 8px));
		width: 320px;
	}
`;

export default Container;
