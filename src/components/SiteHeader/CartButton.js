import styled from 'styled-components';
import { Button } from 'components/sharedStyled/Buttons';
import iconCart from 'images/icon-cart.svg';

const CartButton = ({ handleClick }) => (
	<ExtButton onClick={handleClick}>
		<CartImage src={iconCart} alt="add to cart" />
	</ExtButton>
);

export default CartButton;

const ExtButton = styled(Button)`
	margin-left: auto;
	cursor: pointer;
`;

const CartImage = styled.img`
	width: 20px;
	height: 20px;
	flex-grow: 1;
`;
