import Container from './Container';
import ProducerName from './ProducerName';
import ProductTitle from './ProductTitle';
import ProductDescription from './ProductDescription';

const ProductInfoSection = ({ products }) => (
	<Container>
		<ProducerName>Sneaker company</ProducerName>
		<ProductTitle>{products.name}</ProductTitle>
		<ProductDescription>{products.description}</ProductDescription>
	</Container>
);

export default ProductInfoSection;
