import styled from 'styled-components';

import imageThumbnail1 from 'images/image-product-1-thumbnail.jpg';
import imageThumbnail2 from 'images/image-product-2-thumbnail.jpg';
import imageThumbnail3 from 'images/image-product-3-thumbnail.jpg';
import imageThumbnail4 from 'images/image-product-4-thumbnail.jpg';
import image1 from 'images/image-product-1.jpg';
import image2 from 'images/image-product-2.jpg';
import image3 from 'images/image-product-3.jpg';
import image4 from 'images/image-product-4.jpg';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const images = [image1, image2, image3, image4];
const imagesThumbnails = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4];

const screenWidth = document.body.clientWidth;

const ProductGallery = () => {
	return (
		<GalleryContainer>
			<FullResolutionImage>
				<img src={images[0]} alt="product" />
			</FullResolutionImage>
			{screenWidth >= BREAKPOINTS.desktop && <ThumbnailsImagesList />}
		</GalleryContainer>
	);
};

const ThumbnailsImagesList = () => {
	return (
		<ThumbnailsImagesContainer>
			{imagesThumbnails.map((img) => (
				<ThumbnailImage src={img} alt="product thumbnail image" />
			))}
		</ThumbnailsImagesContainer>
	);
};

export default ProductGallery;

const GalleryContainer = styled.div``;

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
	overflow-y: hidden;
	height: 300px;
	img {
		object-fit: cover;
		width: 100vw;
		height: 100%;
	}
`;
