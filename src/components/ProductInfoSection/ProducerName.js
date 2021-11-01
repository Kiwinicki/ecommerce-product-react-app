import React from 'react';
import styled from 'styled-components';
import { COLORS } from 'utils/STYLE_VARIABLES';

const ProducerName = styled.p`
	color: ${COLORS.orange};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 2px;
	margin-bottom: 12px;
`;

export default ProducerName;
