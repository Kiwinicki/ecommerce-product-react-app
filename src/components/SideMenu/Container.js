import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const Container = styled.div`
	transition: 0.3s ease-in-out;
	display: flex;
	position: absolute;
	background: rgb(255, 255, 255);
	background: ${COLORS.white};
	z-index: 999;
	padding: 22px;
	height: 999vh;
	width: 67vw;
	gap: 52px;
	flex-direction: column;
	align-items: flex-start;
	${({ expanded }) => (!expanded ? `transform: translateX(-100%);` : `transform: translateX(0);`)}
	@media only screen and (max-width: ${BREAKPOINTS.tablet}) {
		display: none;
	}
`;

export default Container;
