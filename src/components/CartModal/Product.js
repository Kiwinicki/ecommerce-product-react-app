import React from 'react';
import styled from 'styled-components/macro';

const Product = styled.li`
	display: grid;
	grid-template-columns: 50px 1fr min-content;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas: 'img name delete-btn' 'img cost delete-btn';
	gap: 0 14px;
	margin-bottom: 26px;
`;

export default Product;
