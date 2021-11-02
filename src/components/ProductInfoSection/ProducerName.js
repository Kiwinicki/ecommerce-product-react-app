import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const ProducerName = styled.p`
	color: ${COLORS.orange};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 13px;
	letter-spacing: 2px;
	margin-bottom: 12px;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		margin-bottom: 20px;
	}
`;

export default ProducerName;
