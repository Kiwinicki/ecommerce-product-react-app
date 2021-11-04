import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const Header = styled.div`
	padding: 22px;
	border-bottom: 1px solid hsl(220, 14%, 90%);
	font-weight: 700;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		padding: 24px;
	}
`;

export default Header;
