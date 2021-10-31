import styled from 'styled-components';

const SideMenuBg = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 998;
	min-height: 100%;
	width: 100%;
	opacity: 0;
	transition: 0.3s ease-in-out;
	${({ expanded }) => (!expanded ? `opacity: 0; visibility: hidden;` : `opacity: 1;`)}
`;

export default SideMenuBg;
