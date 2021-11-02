import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
	display: flex;
	${({ isOpened }) => (isOpened ? `opacity: 1; visibility: visible;` : `opacity: 0; visibility: hidden;`)}
	width: 60vmin;
	position: absolute;
	flex-direction: column;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	z-index: 1000;
	align-items: flex-end;
	gap: 20px;
	transition: 0.15s ease-in-out;
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
