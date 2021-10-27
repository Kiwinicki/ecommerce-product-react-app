import { useEffect, useState } from 'react';
import MenuButton from './MenuButton';
import UserAccountButton from './UserAccountButton';
import SiteLogo from './SiteLogo';
import Container from './Container';
import MenuList from './MenuList';
import CartButton from './CartButton';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const SiteHeader = ({ expand, toggleCartModal }) => {
	const [isExpanded, toggleExpand] = expand;
	const [windowWidth, setDocWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setDocWidth(window.innerWidth);
		});
	});

	return (
		<Container>
			{windowWidth < BREAKPOINTS.desktop && <MenuButton handleClick={toggleExpand} />}
			<SiteLogo />
			{windowWidth >= BREAKPOINTS.desktop && <MenuList />}
			<CartButton handleClick={() => toggleCartModal()} />
			<UserAccountButton />
		</Container>
	);
};

export default SiteHeader;
