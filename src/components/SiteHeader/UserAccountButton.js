import React from 'react';
import styled from 'styled-components/macro';
import { Button } from 'components/shared/Buttons';
import userImage from 'images/image-avatar.png';
import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

const UserAccountButton = () => (
	<ExtButton>
		<ProfileImage src={userImage} alt="user profile" />
	</ExtButton>
);

export default UserAccountButton;

const ExtButton = styled(Button)`
	border-radius: 100%;
	border: 2px solid transparent;
	width: 32px;
	height: 32px;
	cursor: pointer;
	&:active {
		border: 2px solid ${COLORS.orange};
	}
	@media only screen and (min-width: ${BREAKPOINTS.tablet}px) {
		width: 52px;
		height: 52px;
	}
`;

const ProfileImage = styled.img`
	width: 28px;
	height: 28px;
	@media only screen and (min-width: ${BREAKPOINTS.tablet}px) {
		width: 48px;
		height: 48px;
	}
`;
