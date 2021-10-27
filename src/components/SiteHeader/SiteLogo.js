import styled from 'styled-components';
import logoIcon from 'images/logo.svg';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const SiteLogo = () => (
	<a href="#">
		<LogoImage src={logoIcon} alt="sneakers logo" />
	</a>
);

export default SiteLogo;

const LogoImage = styled.img`
	height: 21px;
	@media only screen and (min-width: ${BREAKPOINTS.tablet}px) {
		height: 16px;
	}
`;
