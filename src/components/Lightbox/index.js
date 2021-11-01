import React from 'react';
import Container from './Container';
import FullResImage from '../shared/FullResImage';
import { CloseButtonOrange } from '../shared/CloseButton';
import { GalleryNavButton } from '../shared/GalleryNavButton';
import ThumbnailsImagesList from '../shared/ThumbnailsImagesList';

const Lightbox = ({ isOpened, toggle, currImageData, thumbnailsArr }) => {
	const [{ index, currImg, ImgThumbnail }, dispatchImg] = currImageData;
	return (
		<>
			<Container isOpened={isOpened}>
				<CloseButtonOrange handleClick={() => toggle()} />
				<FullResImage>
					<GalleryNavButton prev onClick={() => dispatchImg({ type: 'prev' })} />
					<img src={currImg} alt="white and brown sneakers on an orange background" />
					<GalleryNavButton next onClick={() => dispatchImg({ type: 'next' })} />
				</FullResImage>
				<ThumbnailsImagesList thumbnailsArr={thumbnailsArr} index={index} dispatchImg={dispatchImg} />
			</Container>
		</>
	);
};

export default Lightbox;
