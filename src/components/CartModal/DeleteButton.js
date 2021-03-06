import React from 'react';
import styled from 'styled-components/macro';
import { Button } from 'components/shared/Buttons';
import iconDelete from 'images/icon-delete.svg';

const DeleteButton = ({ handleClick }) => (
	<ExtButton onClick={handleClick}>
		<img src={iconDelete} alt="remove item" />
	</ExtButton>
);

const ExtButton = styled(Button)`
	grid-area: delete-btn;
	width: min-content;
	justify-self: end;
`;

export default DeleteButton;
