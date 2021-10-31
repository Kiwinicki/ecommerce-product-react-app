import styled from 'styled-components';
import { Button } from 'components/shared/Buttons';
import { COLORS } from 'utils/STYLE_VARIABLES';

const IconPath = () => <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" />;

const CloseButton = ({ handleClick }) => (
	<Button onClick={handleClick}>
		<IconClose width="14" height="15" xmlns="http://www.w3.org/2000/svg">
			<IconPath />
		</IconClose>
	</Button>
);

const CloseButtonOrange = ({ handleClick }) => (
	<Button onClick={handleClick}>
		<IconCloseOrange width="20" height="20" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
			<IconPath />
		</IconCloseOrange>
	</Button>
);

export { CloseButton, CloseButtonOrange };

const IconClose = styled.svg``;
const IconCloseOrange = styled.svg`
	path {
		fill: ${COLORS.white};
		&:hover {
			fill: ${COLORS.orange};
		}
	}
`;
