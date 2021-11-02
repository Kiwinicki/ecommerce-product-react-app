import React from 'react';
import styled from 'styled-components/macro';
import ListItem from 'components/SiteHeader/ListItem';

const Link = styled.a`
	text-decoration: none;
	color: inherit;

	${ListItem} & {
		align-self: center;
	}
`;

export default Link;
