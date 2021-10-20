import styled from 'styled-components';
import { COLORS } from 'utils/STYLE_VARIABLES';

const ProductInfo = () => (
	<ProductInfoContainer>
		<ProducerTitle>Sneaker company</ProducerTitle>
		<ProductTitle>Fall Limited Edition Sneakers</ProductTitle>
		<ProductDescription>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they 'll withdtand everything the weather can offer.</ProductDescription>
	</ProductInfoContainer>
);

export default ProductInfo;

const ProductInfoContainer = styled.div`
	padding: 22px;
`;

const ProducerTitle = styled.p`
	color: ${COLORS.orange};
	text-transform: uppercase;
	font-weight: 700;
	font-size: 12px;
	letter-spacing: 2px;
	margin-bottom: 12px;
`;

const ProductTitle = styled.h2`
	font-size: 27px;
	word-spacing: 4px;
	font-weight: 700;
	margin-bottom: 12px;
`;

const ProductDescription = styled.p`
	font-size: 15px;
	line-height: 26px;
	color: ${COLORS.darkGrayishBlue};
`;
