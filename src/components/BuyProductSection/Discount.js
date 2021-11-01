import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from 'utils/STYLE_VARIABLES';

const Discount = styled.div`
	padding: 4px 8px;
	border-radius: 5px;
	background-color: ${COLORS.paleOrange};
	color: ${COLORS.orange};
	font-weight: 700;
	display: flex;
	align-items: center;
	max-width: min-content;
	margin: auto 0;
`;

export default Discount;
