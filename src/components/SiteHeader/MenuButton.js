import styled from 'styled-components';
import { Button } from 'components/sharedStyled/Buttons';
import iconMenu from 'images/icon-menu.svg';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const MenuButton = ({ handleClick }) => (
	<ExtButton onClick={() => handleClick()}>
		<img src={iconMenu} alt="menu icon" />
	</ExtButton>
);

export default MenuButton;

const ExtButton = styled(Button)`
	@media only screen and (min-width: ${BREAKPOINTS.tablet}) {
		display: none;
	}
`;
