import React from 'react';
import Container from './Container';
import FullResImage from '../shared/FullResImage';
import { GalleryNavButton } from '../shared/GalleryNavButton';
import ThumbnailsImagesList from '../shared/ThumbnailsImagesList';

import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const ProductGallery = ({ lightbox, windowWidth, currImageData, imgArr, thumbnailsArr }) => {
	const [isLightboxOpened, toggleLightbox] = lightbox;
	const [{ index, currImg, ImgThumbnail }, dispatchImg] = currImageData;

	return (
		<Container>
			<FullResImage>
				{windowWidth < BREAKPOINTS.desktop && <GalleryNavButton prev onClick={() => dispatchImg({ type: 'prev' })} />}
				<img src={imgArr[index]} alt="product" onClick={toggleLightbox} />
				{windowWidth < BREAKPOINTS.desktop && <GalleryNavButton next onClick={() => dispatchImg({ type: 'next' })} />}
			</FullResImage>
			{windowWidth >= BREAKPOINTS.desktop && <ThumbnailsImagesList thumbnailsArr={thumbnailsArr} index={index} dispatchImg={dispatchImg} />}
		</Container>
	);
};

export default ProductGallery;
