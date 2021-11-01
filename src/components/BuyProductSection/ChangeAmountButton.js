import React from 'react';
import styled from 'styled-components';
import { Button } from 'components/shared/Buttons';
import iconMinus from 'images/icon-minus.svg';
import iconPlus from 'images/icon-plus.svg';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const ChangeAmountButton = ({ type, handleClick }) => <ExtButton onClick={() => handleClick()}>{type === 'plus' ? <img src={iconPlus} alt="plus icon" /> : <img src={iconMinus} alt="minus icon" />}</ExtButton>;

export default ChangeAmountButton;

const ExtButton = styled(Button)`
	height: 60px;
	width: 56px;
	display: flex;
	& > img {
		margin: auto;
		display: block;
	}
	&:active {
		filter: brightness(1.2);
	}
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		height: auto;
	}
`;
