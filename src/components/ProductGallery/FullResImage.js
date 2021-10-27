import styled from 'styled-components';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const FullResImage = styled.div`
	position: relative;
	overflow-y: hidden;
	height: 300px;
	width: 100%;
	& > img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		border-radius: 1rem;
		height: auto;
	}
`;

export default FullResImage;
