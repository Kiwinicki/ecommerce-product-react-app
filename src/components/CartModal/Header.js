import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const Header = styled.header`
	padding: 22px;
	border-bottom: 1px solid ${COLORS.grayishBlue};
	font-weight: 700;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		padding: 15px;
	}
`;

export default Header;
