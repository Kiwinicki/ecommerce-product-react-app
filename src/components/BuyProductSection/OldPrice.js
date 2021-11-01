import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const OldPrice = styled.p`
	text-decoration: line-through;
	font-weight: 700;
	color: ${COLORS.grayishBlue};
	margin: auto 0 auto auto;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		margin: auto 0 auto;
	}
`;

export default OldPrice;
