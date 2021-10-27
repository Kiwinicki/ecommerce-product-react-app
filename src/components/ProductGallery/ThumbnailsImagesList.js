import styled from 'styled-components';

import imageThumbnail1 from 'images/image-product-1-thumbnail.jpg';
import imageThumbnail2 from 'images/image-product-2-thumbnail.jpg';
import imageThumbnail3 from 'images/image-product-3-thumbnail.jpg';
import imageThumbnail4 from 'images/image-product-4-thumbnail.jpg';

const imagesThumbnails = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4];

const ThumbnailsImagesList = () => {
	return (
		<ThumbnailsImagesContainer>
			{imagesThumbnails.map((img) => (
				<div>
					<ThumbnailImage src={img} alt="product thumbnail" />
				</div>
			))}
		</ThumbnailsImagesContainer>
	);
};

export default ThumbnailsImagesList;

const ThumbnailsImagesContainer = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
	& div {
		flex: 0 1 25%;
	}
`;

const ThumbnailImage = styled.img.attrs(({ src, alt }) => ({
	src: src,
	alt: alt,
}))`
	display: block;
	border-radius: 10px;
	width: 100%;
`;
