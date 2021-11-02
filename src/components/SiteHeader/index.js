import React from 'react';
import MenuButton from './MenuButton';
import UserAccountButton from './UserAccountButton';
import SiteLogo from './SiteLogo';
import Container from './Container';
import MenuList from './MenuList';
import CartButton from './CartButton';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';
import CartModal from 'components/CartModal/index';

const SiteHeader = ({ toggleExpand, cartModal, products, windowWidth }) => {
	const [isModalOpened, toggleModal] = cartModal;
	const [product, setProduct] = products;

	return (
		<Container>
			{windowWidth < BREAKPOINTS.desktop && <MenuButton handleClick={toggleExpand} />}
			<SiteLogo />
			{windowWidth >= BREAKPOINTS.desktop && <MenuList />}
			<CartButton handleClick={() => toggleModal()} amount={product.amount} />
			<CartModal isOpened={isModalOpened} products={[product, setProduct]} />
			<UserAccountButton />
		</Container>
	);
};

export default SiteHeader;
