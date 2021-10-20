import { useState } from 'react';
import styled from 'styled-components';

import { BREAKPOINTS, COLORS } from 'utils/STYLE_VARIABLES';

import nextIcon from 'images/icon-next.svg';
import prevIcon from 'images/icon-previous.svg';
import imageThumbnail1 from 'images/image-product-1-thumbnail.jpg';
import imageThumbnail2 from 'images/image-product-2-thumbnail.jpg';
import imageThumbnail3 from 'images/image-product-3-thumbnail.jpg';
import imageThumbnail4 from 'images/image-product-4-thumbnail.jpg';
import image1 from 'images/image-product-1.jpg';
import image2 from 'images/image-product-2.jpg';
import image3 from 'images/image-product-3.jpg';
import image4 from 'images/image-product-4.jpg';

const images = [image1, image2, image3, image4];
const imagesThumbnails = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4];

const screenWidth = document.body.clientWidth;

const ProductGallery = () => {
	const [currImgIndex, setCurrImgIndex] = useState(0);

	const changeToNextImage = () => {
		setCurrImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const changeToPrevImage = () => {
		setCurrImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	return (
		<GalleryContainer>
			<FullResolutionImage>
				<GalleryNavBtn prev onClick={changeToPrevImage} />
				<img src={images[currImgIndex]} alt="product" />
				<GalleryNavBtn next onClick={changeToNextImage} />
			</FullResolutionImage>
			{screenWidth >= BREAKPOINTS.desktop && <ThumbnailsImagesList />}
		</GalleryContainer>
	);
};

export default ProductGallery;

const ThumbnailsImagesList = () => {
	return (
		<ThumbnailsImagesContainer>
			{imagesThumbnails.map((img) => (
				<ThumbnailImage src={img} alt="product thumbnail image" />
			))}
		</ThumbnailsImagesContainer>
	);
};

const GalleryContainer = styled.div``;

const GalleryNavBtn = styled.button`
	background-color: ${COLORS.lightGrayishBlue};
	background-image: url(${({ prev, next }) => (next ? nextIcon : prev ? prevIcon : '')});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 10px;
	width: 38px;
	height: 38px;
	position: absolute;
	transform: translateY(-50%);
	top: 50%;
	${({ prev, next }) => (next ? 'right: 1rem;' : prev ? 'left: 1rem;' : '')}
	border-radius: 50%;
	border: none;
`;

const ThumbnailsImagesContainer = styled.div`
	display: flex;
	gap: 10px;
`;

const ThumbnailImage = styled.img.attrs(({ src, alt }) => ({
	src: src,
	alt: alt,
}))`
	display: block;
	border-radius: 1rem;
`;

const FullResolutionImage = styled.div`
	position: relative;
	overflow-y: hidden;
	height: 300px;
	& > img {
		object-fit: cover;
		width: 100vw;
		height: 100%;
	}
`;
