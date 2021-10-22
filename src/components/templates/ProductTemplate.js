import MainContainer from 'components/atoms/MainContainer';
import SiteHeader from 'components/organisms/SiteHeader';
import ProductGallery from 'components/organisms/ProductGallery';
import ProductInfo from 'components/organisms/ProductInfo';
import BuyProduct from 'components/organisms/BuyProduct';

const ProductTemplate = () => (
	<>
		<SiteHeader />
		<MainContainer>
			<ProductGallery />
			<ProductInfo />
			<BuyProduct />
		</MainContainer>
	</>
);

export default ProductTemplate;
