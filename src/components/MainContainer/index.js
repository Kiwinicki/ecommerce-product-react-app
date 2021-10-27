import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const MainContainer = styled.main`
	display: flex;
	flex-direction: column;
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		flex-direction: row;
		max-width: 900px;
		gap: 70px;
		margin: auto;
		& div {
			flex: 0 1 50%;
		}
	}
`;

export default MainContainer;
