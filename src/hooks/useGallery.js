import React, { useReducer } from 'react';

import image1 from 'images/image-product-1.jpg';
import image2 from 'images/image-product-2.jpg';
import image3 from 'images/image-product-3.jpg';
import image4 from 'images/image-product-4.jpg';

import imageThumbnail1 from 'images/image-product-1-thumbnail.jpg';
import imageThumbnail2 from 'images/image-product-2-thumbnail.jpg';
import imageThumbnail3 from 'images/image-product-3-thumbnail.jpg';
import imageThumbnail4 from 'images/image-product-4-thumbnail.jpg';

const images = [image1, image2, image3, image4];
const imagesThumbnails = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4];

const reducer = (state, action) => {
	switch (action.type) {
		case 'prev':
			if (state.index === 0)
				return {
					index: images.length - 1,
					currImg: images[images.length - 1],
					ImgThumbnail: imagesThumbnails[images.length - 1],
				};
			else
				return {
					index: state.index - 1,
					currImg: images[state.index - 1],
					ImgThumbnail: imagesThumbnails[state.index - 1],
				};
		case 'next':
			if (state.index === images.length - 1) return initState;
			else
				return {
					index: state.index + 1,
					currImg: images[state.index + 1],
					ImgThumbnail: imagesThumbnails[state.index + 1],
				};
		case 'index':
			if (action.value >= 0 && action.value < images.length)
				return {
					index: action.value,
					currImg: images[action.value],
					ImgThumbnail: imagesThumbnails[action.value],
				};
			else throw Error(`Invalid action.value, recived: ${action.value}`);
		default:
			throw Error(`Unexpected type, recived: ${action.type}`);
	}
};

const initState = {
	index: 0,
	currImg: images[0],
	ImgThumbnail: imagesThumbnails[0],
};

const useGallery = () => {
	const [currentImgData, dispatchImg] = useReducer(reducer, initState);
	return [currentImgData, dispatchImg];
};

export default useGallery;
