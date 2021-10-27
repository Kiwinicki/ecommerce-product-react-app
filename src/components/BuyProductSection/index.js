import Container from './Container';
import PriceInfoRow from './PriceInfoRow';
import Price from './Price';
import Discount from './Discount';
import OldPrice from './OldPrice';
import ChangeAmountRow from './ChangeAmountRow';
import ChangeAmountButton from './ChangeAmountButton';
import CurrentAmount from './CurrentAmount';
import AddToCartButton from './AddToCartButton';
import { useState } from 'react/cjs/react.development';

const BuyProductSection = ({ products }) => {
	const [product, setProduct] = products;
	const [tempAmount, setTempAmount] = useState(0);

	return (
		<Container>
			<PriceInfoRow>
				<Price>$125.00</Price>
				<Discount>50%</Discount>
				<OldPrice>$250.00</OldPrice>
			</PriceInfoRow>

			<ChangeAmountRow>
				<ChangeAmountButton type="minus" handleClick={() => setTempAmount((prev) => (prev <= 0 ? 0 : --prev))} />
				<CurrentAmount>{tempAmount}</CurrentAmount>
				<ChangeAmountButton type="plus" handleClick={() => setTempAmount((prev) => ++prev)} />
			</ChangeAmountRow>

			<AddToCartButton handleClick={() => setProduct((prev) => ({ ...prev, amount: tempAmount }))} />
		</Container>
	);
};

export default BuyProductSection;
