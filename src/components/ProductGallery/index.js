import { useEffect, useState } from 'react';
import Container from './Container';
import FullResImage from './FullResImage';
import GalleryNavButton from './GalleryNavButton';
import ThumbnailsImagesList from './ThumbnailsImagesList';

import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

import image1 from 'images/image-product-1.jpg';
import image2 from 'images/image-product-2.jpg';
import image3 from 'images/image-product-3.jpg';
import image4 from 'images/image-product-4.jpg';

const images = [image1, image2, image3, image4];

const ProductGallery = () => {
	const [currImgIndex, setCurrImgIndex] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const changeToNextImage = () => {
		setCurrImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const changeToPrevImage = () => {
		setCurrImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	useEffect(() => {
		window.addEventListener('resize', () => {
			setWindowWidth(window.innerWidth);
		});
	});

	return (
		<Container>
			<FullResImage>
				{windowWidth < BREAKPOINTS.desktop && <GalleryNavButton prev onClick={changeToPrevImage} />}
				<img src={images[currImgIndex]} alt="product" />
				{windowWidth < BREAKPOINTS.desktop && <GalleryNavButton next onClick={changeToNextImage} />}
			</FullResImage>
			{windowWidth >= BREAKPOINTS.desktop && <ThumbnailsImagesList />}
		</Container>
	);
};

export default ProductGallery;
