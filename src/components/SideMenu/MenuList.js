import React from 'react';
import styled from 'styled-components/macro';
import Link from 'components/shared/Link';
import { COLORS } from 'utils/STYLE_VARIABLES';

const MenuList = () => (
	<nav>
		<List>
			<ListItem>Collections</ListItem>
			<ListItem>Men</ListItem>
			<ListItem>Women</ListItem>
			<ListItem>About</ListItem>
			<ListItem>Contact</ListItem>
		</List>
	</nav>
);

const ListItem = ({ children }) => (
	<li>
		<Link href="#">{children}</Link>
	</li>
);

export default MenuList;

const List = styled.ul`
	display: flex;
	list-style: none;
	gap: 22px;
	flex-direction: column;
	color: ${COLORS.black};
	font-weight: 700;
	& li {
		font-size: 18px;
	}
`;
