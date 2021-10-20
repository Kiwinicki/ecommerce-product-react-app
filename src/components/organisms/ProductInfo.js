import styled from 'styled-components';
import { COLORS } from 'utils/STYLE_VARIABLES';

const ProductInfo = () => (
	<div>
		<ProducerTitle>Sneaker company</ProducerTitle>
		<ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
		<ProductDescription>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they 'll withdtand everything the weather can offer.</ProductDescription>
	</div>
);

export default ProductInfo;

const ProducerTitle = styled.p`
	color: ${COLORS.orange};
	text-transform: uppercase;
`;

const ProductTitle = styled.h2``;

const ProductDescription = styled.p``;
