import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const ProductDescription = styled.p`
	font-size: 15px;
	line-height: 26px;
	color: ${COLORS.darkGrayishBlue};
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		font-size: 16px;
	}
`;

export default ProductDescription;
