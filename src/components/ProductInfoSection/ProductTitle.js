import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const ProductTitle = styled.h2`
	font-size: 27px;
	word-spacing: 4px;
	font-weight: 700;
	margin-bottom: 12px;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		font-size: 42px;
		letter-spacing: 1.5px;
		word-spacing: 0;
		margin-bottom: 32px;
	}
`;

export default ProductTitle;
