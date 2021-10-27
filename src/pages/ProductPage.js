import { useState } from 'react';
import SideMenu from 'components/SideMenu/index';
import SiteHeader from 'components/SiteHeader/index';
import CartModal from 'components/CartModal/index';
import MainContainer from 'components/MainContainer/index';
import ProductGallery from 'components/ProductGallery/index';
import ProductInfoSection from 'components/ProductInfoSection/index';
import BuyProductSection from 'components/BuyProductSection';
import LeftColumn from 'components/RightColumn/index';
import useToggle from 'hooks/useToggle';

const ProductPage = () => {
	const [isSideMenuExpanded, toggleSideMenu] = useToggle(false);
	const [isCartModalOpened, toggleCartModal] = useToggle(false);
	const [products, setProducts] = useState({
		name: 'Fall Limited Edition Sneakers',
		description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they 'll withdtand everything the weather can offer.",
		cost: 125,
		amount: 2,
	});

	return (
		<>
			<SideMenu expand={[isSideMenuExpanded, toggleSideMenu]} />
			<SiteHeader expand={[isSideMenuExpanded, toggleSideMenu]} toggleCartModal={toggleCartModal} />
			<CartModal isOpened={isCartModalOpened} products={[products, setProducts]} />
			<MainContainer>
				<ProductGallery />
				<LeftColumn>
					<ProductInfoSection products={products} />
					<BuyProductSection products={[products, setProducts]} />
				</LeftColumn>
			</MainContainer>
		</>
	);
};

export default ProductPage;
