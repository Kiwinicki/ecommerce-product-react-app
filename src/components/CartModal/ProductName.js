import React from 'react';
import styled from 'styled-components';

const ProductName = styled.p`
	grid-area: name;
	height: 1rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin: auto 0;
`;

export default ProductName;
