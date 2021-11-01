import React from 'react';
import styled from 'styled-components/macro';
import { NavButton as GalleryNavButton } from 'components/shared/GalleryNavButton';
import ProductGalleryContainer from 'components/ProductGallery/Container';
import LightboxContainer from 'components/Lightbox/Container';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

const FullResImage = styled.div`
	position: relative;
	width: 100%;
	& > img {
		object-fit: cover;
		width: 100%;
	}
	@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
		height: auto;
	}

	${ProductGalleryContainer} & {
		height: 300px;
		& > img {
			height: 100%;
		}
		${GalleryNavButton}:first-of-type {
			left: 1rem;
		}
		${GalleryNavButton}:nth-of-type(2) {
			right: 1rem;
		}
		@media only screen and (min-width: ${BREAKPOINTS.desktop}px) {
			cursor: pointer;
			& > img {
				border-radius: 1rem;
			}
		}
	}

	${LightboxContainer} & {
		& > img {
			border-radius: 10px;
		}
		${GalleryNavButton}:first-of-type {
			transform: translate(-50%, -50%);
		}
		${GalleryNavButton}:nth-of-type(2) {
			right: 0;
			transform: translate(50%, -50%);
		}
	}
`;

export default FullResImage;
