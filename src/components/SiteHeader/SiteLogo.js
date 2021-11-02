import React from 'react';
import styled from 'styled-components/macro';
import logoIcon from 'images/logo.svg';

const SiteLogo = () => (
	<a href="#0">
		<LogoImage src={logoIcon} alt="sneakers logo" />
	</a>
);

export default SiteLogo;

const LogoImage = styled.img`
	height: 21px;
`;
