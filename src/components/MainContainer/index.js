import React from 'react';
import styled from 'styled-components/macro';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		flex-direction: row;
		max-width: clamp(960px, 52vw, 1200px);
		gap: 90px;
		margin: auto;
		& div {
			flex: 0 1 50%;
		}
	}
`;

export default MainContainer;
