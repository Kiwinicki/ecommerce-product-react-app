import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
	${({ isOpened }) => (isOpened ? `display: flex;` : `display: none;`)}
	position: absolute;
	z-index: 1000;
	flex-direction: column;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	align-items: flex-end;
	gap: 20px;
	width: 55vmin;
	&::before {
		width: 100vw;
		height: 100vh;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: rgba(0, 0, 0, 0.75);
	}
`;

export default Container;