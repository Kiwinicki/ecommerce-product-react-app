import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const Content = styled.div`
	padding: 24px 24px 30px;
	display: flex;
	flex-flow: column wrap;
	flex-grow: 1;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		padding: 15px 15px 20px;
	}
`;

export default Content;
