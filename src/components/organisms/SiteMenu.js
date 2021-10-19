import styled from 'styled-components';
import MenuButton from 'components/atoms/MenuButton';
import MenuList from 'components/atoms/MenuList';

const SiteMenu = () => {
	return (
		<MenuWrapper>
			<MenuButton />
			<MenuList />
		</MenuWrapper>
	);
};

export default SiteMenu;

const MenuWrapper = styled.div`
	display: flex;
`;
