import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const Container = ({ children, isOpened }) => (
	<RelativeCnt>
		<AbsoluteCnt isOpened={isOpened}>{children}</AbsoluteCnt>
	</RelativeCnt>
);

export default Container;

const RelativeCnt = styled.div`
	position: relative;
	height: 0;
`;

const AbsoluteCnt = styled.div`
	position: absolute;
	width: calc(100vw - 16px);
	right: 8px;
	transform: translateY(8px);
	z-index: 1;
	background-color: ${COLORS.white};
	border-radius: 10px;
	min-height: 254px;
	${({ isOpened }) => (isOpened ? `display: flex;` : `display: none;`)}
	box-shadow: 0 10px 35px -10px ${COLORS.darkGrayishBlue};
	flex-direction: column;
	@media only screen and (min-width: ${BREAKPOINTS.tablet}px) {
		/* right: initial; */
		width: 320px;
	}
`;
