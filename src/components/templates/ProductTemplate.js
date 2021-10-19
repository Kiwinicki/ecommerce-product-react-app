import MainContainer from 'components/atoms/MainContainer';
import PageHeader from 'components/organisms/PageHeader';
import ProductGallery from 'components/organisms/ProductGallery';

const ProductTemplate = () => (
	<>
		<PageHeader />
		<MainContainer>
			<ProductGallery />
			{/* <ProductDesc /> */}
		</MainContainer>
	</>
);

export default ProductTemplate;
