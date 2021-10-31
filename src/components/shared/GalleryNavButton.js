import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const NextIcon = () => (
	<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
		<path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
	</svg>
);

const PrevIcon = () => (
	<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
		<path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
	</svg>
);

const GalleryNavButton = ({ next, prev, onClick }) => <NavButton onClick={onClick}>{next ? <NextIcon /> : prev ? <PrevIcon /> : ''}</NavButton>;

const NavButton = styled.button`
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	width: 38px;
	height: 38px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${COLORS.lightGrayishBlue};
	border: none;
	border-radius: 50%;
	cursor: pointer;
	&:active {
		path {
			stroke: ${COLORS.orange};
		}
	}
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		width: 50px;
		height: 50px;
	}
`;

export { GalleryNavButton, NavButton };
