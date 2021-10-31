import styled from 'styled-components';

const Link = styled.a.attrs(({ href }) => ({
	href: href,
}))`
	text-decoration: none;
	color: inherit;
`;

export default Link;
