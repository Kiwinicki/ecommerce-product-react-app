import React from 'react';
import styled from 'styled-components/macro';
import { PrimaryButton } from 'components/shared/Buttons';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';
import iconCart from 'images/icon-cart.svg';

const AddToCartButton = ({ handleClick }) => (
	<ExtPrimaryButton onClick={() => handleClick()}>
		<img src={iconCart} alt="add to cart icon" />
		Add to cart
	</ExtPrimaryButton>
);

export default AddToCartButton;

const ExtPrimaryButton = styled(PrimaryButton)`
	margin-bottom: 4.5rem;
	box-shadow: hsl(26, 100%, 80%) 0 5px 20px 1px;
	& > img {
		margin-right: 14px;
		filter: brightness(0) invert(100%);
		height: 16px;
	}
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		margin-bottom: 0;
		padding: 30px;
	}
`;
