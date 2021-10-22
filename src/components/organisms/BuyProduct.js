import { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from 'utils/STYLE_VARIABLES';

import iconMinus from 'images/icon-minus.svg';
import iconPlus from 'images/icon-plus.svg';
import iconCart from 'images/icon-cart.svg';

const BuyProduct = () => {
	const [amout, setAmount] = useState(0);

	return (
		<BuyProductContainer>
			<PriceInfoContainer>
				<Price>$125.00</Price>
				<Discount>50%</Discount>
				<OldPrice>$250.00</OldPrice>
			</PriceInfoContainer>
			{/* <div> */}
			<ChangeAmountContainer>
				<ChangeAmountButton>
					<img src={iconMinus} alt="minus icon" />
				</ChangeAmountButton>
				<CurrentAmount>{amout}</CurrentAmount>
				<ChangeAmountButton>
					<img src={iconPlus} alt="plus icon" />
				</ChangeAmountButton>
			</ChangeAmountContainer>

			<AddToCartButton>
				<img src={iconCart} alt="add to cart icon" />
				Add to cart
			</AddToCartButton>
			{/* </div> */}
		</BuyProductContainer>
	);
};

export default BuyProduct;

const BuyProductContainer = styled.div`
	width: 100%;
	padding: 0 22px;
`;

const Price = styled.h2`
	font-size: 30px;
`;

const Discount = styled.div`
	padding: 4px 8px;
	border-radius: 5px;
	background-color: ${COLORS.paleOrange};
	color: ${COLORS.orange};
	font-weight: 700;
	display: flex;
	align-items: center;
`;

const OldPrice = styled.p`
	text-decoration: line-through;
	font-weight: 700;
	color: ${COLORS.grayishBlue};
	justify-self: end;
`;

const PriceInfoContainer = styled.div`
	width: 100%;
	display: grid;
	gap: 20px;
	grid-template-columns: min-content min-content 1fr;
	align-items: center;
	margin-bottom: 20px;
`;

const ChangeAmountButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 24px 26px;
	border-radius: 15px;
	& > img {
		display: block;
	}
`;

const CurrentAmount = styled.div`
	align-self: center;
	text-align: center;
	font-weight: 700;
`;

const ChangeAmountContainer = styled.div`
	border-radius: 15px;
	display: flex;
	background-color: ${COLORS.lightGrayishBlue};
	justify-content: space-between;
	margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
	border: none;
	border-radius: 15px;
	display: flex;
	background-color: ${COLORS.orange};
	color: ${COLORS.white};
	width: 100%;
	font-weight: 700;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	padding: 20px;
	& > img {
		margin-right: 14px;
		filter: brightness(0) invert(100%);
		height: 16px;
	}
	margin-bottom: 4.5rem;
	box-shadow: hsl(26, 100%, 80%) 0 5px 20px 1px;
`;
