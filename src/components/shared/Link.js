import React from 'react';
import styled from 'styled-components/macro';

const Link = styled.a.attrs(({ href }) => ({
	href: href,
}))`
	text-decoration: none;
	color: inherit;
`;

export default Link;
