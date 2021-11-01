import React from 'react';
import styled from 'styled-components/macro';
import LightboxContainer from 'components/Lightbox/Container';
import { COLORS } from 'utils/STYLE_VARIABLES';

const ThumbnailsImagesList = ({ thumbnailsArr, index, dispatchImg }) => (
	<ThumbnailsImagesContainer>
		{thumbnailsArr &&
			thumbnailsArr.map((img, imgIndex) => (
				<Thumbnail active={index === imgIndex ? true : false} onClick={() => dispatchImg({ type: 'index', value: imgIndex })} key={imgIndex}>
					<ThumbnailImage src={img} alt="product thumbnail" />
				</Thumbnail>
			))}
	</ThumbnailsImagesContainer>
);

export default ThumbnailsImagesList;

const ThumbnailsImagesContainer = styled.div`
	display: flex;
	gap: 20px;
	isolation: isolate;
	${LightboxContainer} & {
		padding: 0 30px;
	}
`;

const Thumbnail = styled.div`
	flex: 0 1 25%;
	border-radius: 10px;
	position: relative;
	border: 2px solid transparent;
	cursor: pointer;
	&:hover {
		&::after {
			content: '';
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			background: rgba(255, 255, 255, 0.5);
			border-radius: 8px;
		}
	}
	${({ active }) =>
		active &&
		`
			border: 2px solid ${COLORS.orange};
			&::after {
				content: '';
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(255, 255, 255, 0.65);
				border-radius: 8px;
			}
	`}
`;

const ThumbnailImage = styled.img`
	display: block;
	border-radius: 8px;
	width: 100%;
`;
