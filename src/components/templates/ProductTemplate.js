import MainContainer from 'components/atoms/MainContainer';
import PageHeader from 'components/organisms/PageHeader';
import ProductGallery from 'components/organisms/ProductGallery';
import ProductInfo from 'components/organisms/ProductInfo';

const ProductTemplate = () => (
	<>
		<PageHeader />
		<MainContainer>
			<ProductGallery />
			<ProductInfo />
			{/* <BuyProduct /> */}
		</MainContainer>
	</>
);

export default ProductTemplate;
