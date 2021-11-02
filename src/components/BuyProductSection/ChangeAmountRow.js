import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const ChangeAmountRow = styled.div`
	border-radius: 10px;
	display: flex;
	background-color: ${COLORS.lightGrayishBlue};
	justify-content: space-between;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		padding: 30px 0;
	}
`;

export default ChangeAmountRow;
