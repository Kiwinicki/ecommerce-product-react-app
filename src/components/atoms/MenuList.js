import styled from 'styled-components';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const MenuList = () => (
	<List>
		<ListItem>Collections</ListItem>
		<ListItem>Men</ListItem>
		<ListItem>Women</ListItem>
		<ListItem>About</ListItem>
		<ListItem>Contact</ListItem>
	</List>
);

export default MenuList;

const List = styled.ul`
	display: flex;
	list-style: none;
	gap: 2rem;

	@media only screen and (max-width: ${BREAKPOINTS.tablet}px) {
		display: none;
	}
`;

const ListItem = styled.li`
	color: ${COLORS.darkGrayishBlue};
`;
