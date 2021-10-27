import styled from 'styled-components';
import { COLORS } from 'utils/STYLE_VARIABLES';

const OldPrice = styled.p`
	text-decoration: line-through;
	font-weight: 700;
	color: ${COLORS.grayishBlue};
	margin-left: auto;
`;

export default OldPrice;
