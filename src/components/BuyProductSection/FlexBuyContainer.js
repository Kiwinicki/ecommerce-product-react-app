import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const FlexBuyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		flex-direction: row;
		max-height: 50px;
	}
`;

export default FlexBuyContainer;
