import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

import nextIcon from 'images/icon-next.svg';
import prevIcon from 'images/icon-previous.svg';

const GalleryNavButton = styled.button`
	background-color: ${COLORS.lightGrayishBlue};
	background-image: url(${({ prev, next }) => (next ? nextIcon : prev ? prevIcon : '')});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 10px;
	width: 38px;
	height: 38px;
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	${({ prev, next }) => (next ? 'right: 1rem;' : prev ? 'left: 1rem;' : '')}
	border-radius: 50%;
	border: none;
`;

export default GalleryNavButton;
