import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const Container = styled.header`
	position: relative;
	display: flex;
	width: min(100vw, 960px);
	margin: 0 auto;
	padding: clamp(18px, 5vw, 24px);
	align-items: center;
	gap: clamp(18px, 4vw, 40px);
	border-bottom: 1px solid ${COLORS.grayishBlue};
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		padding-left: 0;
		padding-right: 0;
	}
`;

export default Container;
