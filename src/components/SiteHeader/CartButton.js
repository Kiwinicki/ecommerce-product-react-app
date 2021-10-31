import styled from 'styled-components';
import { Button } from 'components/shared/Buttons';
import iconCart from 'images/icon-cart.svg';
import { COLORS } from 'utils/STYLE_VARIABLES';

const CartButton = ({ handleClick, amount }) => (
	<ExtButton onClick={handleClick} style={{ '--amount': amount }}>
		<CartImage src={iconCart} alt="add to cart" />
	</ExtButton>
);

export default CartButton;

const ExtButton = styled(Button)`
	margin-left: auto;
	cursor: pointer;
	&::after {
		counter-reset: amount var(--amount);
		content: counter(amount);
		position: absolute;
		border-radius: 11px;
		transform: translate(-50%, -50%);
		padding: 1px 8px;
		color: white;
		font-size: 11px;
		background-color: ${COLORS.orange};
	}
`;

const CartImage = styled.img`
	width: 20px;
	height: 20px;
	flex-grow: 1;
`;
