import styled from 'styled-components';
import iconMenu from 'images/icon-menu.svg';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const MenuButton = () => (
	<Button>
		<img src={iconMenu} alt="menu icon" />
	</Button>
);

const Button = styled.button`
	background-color: transparent;
	border: none;
	@media only screen and (min-width: ${BREAKPOINTS.tablet}px) {
		display: none;
	}
`;

export default MenuButton;
