import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const PriceInfoRow = styled.div`
	width: 100%;
	gap: 5px 20px;
	margin-bottom: 20px;
	display: grid;
	grid-template-columns: min-content min-content 1fr;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		grid-template-columns: min-content min-content;
	}
`;

export default PriceInfoRow;
