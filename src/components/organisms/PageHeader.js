import styled from 'styled-components';
import SiteMenu from './SiteMenu';
import SiteLogo from 'components/atoms/SiteLogo';
import { Button, UserAccountButton } from 'components/atoms/Button';

import iconCart from 'images/icon-cart.svg';
import userAvatar from 'images/image-avatar.png';

const PageHeader = () => {
	return (
		<Header>
			<SiteMenu />
			<SiteLogo />
			<Button>
				<img src={iconCart} alt="cart icon" />
			</Button>
			<UserAccountButton>
				<img src={userAvatar} alt="user avatar" />
			</UserAccountButton>
		</Header>
	);
};

export default PageHeader;

const Header = styled.header`
	display: grid;
	grid-template-columns: min-content 1fr min-content min-content;
	grid-template-rows: 1fr;
	padding: 22px;
	gap: 18px;
`;
