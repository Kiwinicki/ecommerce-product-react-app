import Container from './Container';
import SideMenuBg from './SideMenuBg';
import { CloseButton } from '../shared/CloseButton';
import MenuList from './MenuList';

const SideMenu = ({ expand }) => {
	const [expanded, toggleExpand] = expand;

	return (
		<>
			<Container expanded={expanded}>
				<CloseButton handleClick={() => toggleExpand()} />
				<MenuList vertical />
			</Container>
			<SideMenuBg expanded={expanded} />
		</>
	);
};

export default SideMenu;
