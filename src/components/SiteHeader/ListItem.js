import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from 'utils/STYLE_VARIABLES';

const ListItem = styled.li`
	display: flex;
	position: relative;
	&:hover::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: ${COLORS.orange};
	}
`;

export default ListItem;
