import styled from 'styled-components';

const Product = styled.li`
	display: grid;
	grid-template-columns: 50px 1fr 15%;
	grid-template-rows: repeat(2, 1fr);
	grid-template-areas: 'img name delete-btn' 'img cost delete-btn';
	gap: 0 12px;
	margin-bottom: 26px;
`;

export default Product;
