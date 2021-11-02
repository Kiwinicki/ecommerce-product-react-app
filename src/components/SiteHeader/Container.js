import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const Container = styled.header`
	position: relative;
	display: flex;
	width: 100%;
	height: 70px;
	padding: 0 clamp(16px, 6vw, 36px);
	align-items: center;
	gap: clamp(18px, 4vw, 60px);
	border-bottom: 1px solid hsl(220, 14%, 90%);
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		width: clamp(920px, 80vw, 1150px);
		margin: 0 auto;
		padding: 0;
		height: 12.5vh;
	}
`;

export default Container;
