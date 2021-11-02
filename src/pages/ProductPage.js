import React, { useState } from 'react';
import SideMenu from 'components/SideMenu/index';
import SiteHeader from 'components/SiteHeader/index';
import MainContainer from 'components/MainContainer/index';
import ProductGallery from 'components/ProductGallery/index';
import ProductInfoSection from 'components/ProductInfoSection/index';
import BuyProductSection from 'components/BuyProductSection';
import LeftColumn from 'components/RightColumn/index';
import Lightbox from 'components/Lightbox';
import useToggle from 'hooks/useToggle';
import useWindowWidth from 'hooks/useWindowWidth';
import useGallery from 'hooks/useGallery';
import { BREAKPOINTS } from 'utils/STYLE_VARIABLES';

import image1 from 'images/image-product-1.jpg';
import image2 from 'images/image-product-2.jpg';
import image3 from 'images/image-product-3.jpg';
import image4 from 'images/image-product-4.jpg';

import imageThumbnail1 from 'images/image-product-1-thumbnail.jpg';
import imageThumbnail2 from 'images/image-product-2-thumbnail.jpg';
import imageThumbnail3 from 'images/image-product-3-thumbnail.jpg';
import imageThumbnail4 from 'images/image-product-4-thumbnail.jpg';

const images = [image1, image2, image3, image4];
const thumbnails = [imageThumbnail1, imageThumbnail2, imageThumbnail3, imageThumbnail4];

const ProductPage = () => {
	const windowWidth = useWindowWidth();
	const [currImgData, dispatchImg] = useGallery();
	const [isSideMenuExpanded, toggleSideMenu] = useToggle(false);
	const [isCartModalOpened, toggleCartModal] = useToggle(false);
	const [isLightboxOpened, toggleLightbox] = useToggle(false);
	const [products, setProducts] = useState({
		name: 'Fall Limited Edition Sneakers',
		description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they 'll withdtand everything the weather can offer.",
		cost: 125,
		amount: 0,
	});

	return (
		<>
			{windowWidth < BREAKPOINTS.tablet && <SideMenu expand={[isSideMenuExpanded, toggleSideMenu]} />}
			{windowWidth >= BREAKPOINTS.tablet && <Lightbox isOpened={isLightboxOpened} toggle={toggleLightbox} currImageData={[currImgData, dispatchImg]} thumbnailsArr={thumbnails} />}
			<SiteHeader toggleExpand={toggleSideMenu} cartModal={[isCartModalOpened, toggleCartModal]} products={[products, setProducts]} windowWidth={windowWidth} />
			<MainContainer>
				<ProductGallery lightbox={[isLightboxOpened, toggleLightbox]} windowWidth={windowWidth} currImageData={[currImgData, dispatchImg]} imgArr={images} thumbnailsArr={thumbnails} />
				<LeftColumn>
					<ProductInfoSection products={products} />
					<BuyProductSection products={[products, setProducts]} />
				</LeftColumn>
			</MainContainer>
		</>
	);
};

export default ProductPage;
