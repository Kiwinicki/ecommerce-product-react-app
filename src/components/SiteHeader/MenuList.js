import React from 'react';
import styled from 'styled-components/macro';
import Link from 'components/shared/Link';
import ListItem from './ListItem';
import { COLORS } from 'utils/STYLE_VARIABLES';

const MenuList = () => (
	<nav>
		<List>
			<ListElement>Collections</ListElement>
			<ListElement>Men</ListElement>
			<ListElement>Women</ListElement>
			<ListElement>About</ListElement>
			<ListElement>Contact</ListElement>
		</List>
	</nav>
);

const ListElement = ({ children }) => (
	<ListItem>
		<Link href="#">{children}</Link>
	</ListItem>
);

export default MenuList;

const List = styled.ul`
	display: flex;
	list-style: none;
	gap: 22px;
	color: ${COLORS.darkGrayishBlue};
`;
