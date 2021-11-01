import React from 'react';
import styled from 'styled-components';

const ProductThumbnail = styled.img.attrs(({ alt, src }) => ({
	alt: alt,
	src: src,
}))`
	border-radius: 5px;
	display: block;
	width: 100%;
	grid-area: img;
`;

export default ProductThumbnail;
