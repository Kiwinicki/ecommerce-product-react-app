import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from 'utils/STYLE_VARIABLES';

const ListItem = styled.li`
	&:hover {
		position: relative;
		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			transform: translateY(36px);
			left: 0;
			width: 100%;
			height: 3px;
			background-color: ${COLORS.orange};
		}
	}
`;

export default ListItem;
