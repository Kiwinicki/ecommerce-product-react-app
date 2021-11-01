import React from 'react';
import Container from './Container';
import Header from './Header';
import Content from './Content';
import ProductsList from './ProductsList';
import Product from './Product';
import ProductThumbnail from './ProductThumbnail';
import ProductName from './ProductName';
import ProductCost from './ProductCost';
import TotalCost from './TotalCost';
import DeleteButton from './DeleteButton';
import CheckoutButton from './CheckoutButton';
import EmptyCartText from './EmptyCartText';

import productThumbnail from 'images/image-product-1-thumbnail.jpg';

const CartModal = ({ isOpened, products }) => {
	const [product, setProduct] = products;
	const { name, cost, amount } = product;

	return (
		<Container isOpened={isOpened}>
			<Header>Cart</Header>
			<Content>
				{product.amount !== 0 ? (
					<>
						<ProductsList>
							<Product>
								<ProductThumbnail src={productThumbnail} alt="product thumbnail" />
								<ProductName>{product.name}</ProductName>
								<ProductCost>
									${product.cost.toFixed(2)} x {amount} <TotalCost>${(cost * amount).toFixed(2)}</TotalCost>
								</ProductCost>
								<DeleteButton handleClick={() => setProduct((prev) => ({ ...prev, amount: 0 }))} />
							</Product>
						</ProductsList>
						<CheckoutButton />
					</>
				) : (
					<EmptyCartText>Your cart is empty.</EmptyCartText>
				)}
			</Content>
		</Container>
	);
};

export default CartModal;
