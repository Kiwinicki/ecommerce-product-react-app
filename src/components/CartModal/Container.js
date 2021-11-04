import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const Container = styled.div`
	position: absolute;
	left: 8px;
	right: 8px;
	bottom: 0;
	transform: translate(0, calc(100% + 8px));
	flex-direction: column;
	min-height: 250px;
	z-index: 1;
	display: flex;
	${({ isOpened }) => (isOpened ? `opacity: 1; visibility: visible;` : `opacity: 0; visibility: hidden;`)}
	background-color: ${COLORS.white};
	border-radius: 10px;
	box-shadow: 0 10px 35px -10px hsl(220, 14%, 80%);
	transition: 0.15s ease-in-out;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		left: initial;
		right: 6.25vw;
		transform: translate(calc(25%), calc(100% - 18px));
		width: 370px;
		min-height: 260px;
	}
	@media only screen and (min-width: ${BREAKPOINTS.desktopMid}px) {
		transform: translate(calc(50%), calc(100% - 18px));
	}
`;

export default Container;
