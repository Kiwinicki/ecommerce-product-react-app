import styled from 'styled-components';
import { Button } from 'components/sharedStyled/Buttons';
import iconMinus from 'images/icon-minus.svg';
import iconPlus from 'images/icon-plus.svg';

const ChangeAmountButton = ({ type, handleClick }) => <ExtButton onClick={() => handleClick()}>{type === 'plus' ? <img src={iconPlus} alt="plus icon" /> : <img src={iconMinus} alt="minus icon" />}</ExtButton>;

export default ChangeAmountButton;

const ExtButton = styled(Button)`
	padding: 24px 26px;
	border-radius: 15px;
	& > img {
		display: block;
	}
`;
