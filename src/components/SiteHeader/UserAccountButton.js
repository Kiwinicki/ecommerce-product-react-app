import styled from 'styled-components';
import { Button } from 'components/sharedStyled/Buttons';
import userImage from 'images/image-avatar.png';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const UserAccountButton = () => (
	<ExtButton>
		<ProfileImage src={userImage} alt="user profile" />
	</ExtButton>
);

export default UserAccountButton;

const ExtButton = styled(Button)`
	border-radius: 50%;
	border: 1px solid transparent;
	cursor: pointer;
	&:active {
		border: 1px solid ${COLORS.orange};
	}
`;

const ProfileImage = styled.img`
	width: 26px;
	height: 26px;
	@media only screen and (min-width: ${BREAKPOINTS.tablet}px) {
		width: 40px;
		height: 40px;
	}
`;
