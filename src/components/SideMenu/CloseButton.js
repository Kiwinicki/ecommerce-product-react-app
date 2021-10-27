import { Button } from 'components/sharedStyled/Buttons';
import iconClose from 'images/icon-close.svg';

const CloseButton = ({ handleClick }) => (
	<Button onClick={handleClick}>
		<img src={iconClose} alt="close icon" />
	</Button>
);

export default CloseButton;
