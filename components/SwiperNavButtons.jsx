"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from 'swiper/react';

const SwiperNavButtons = ({containerStyles, btnStyles, iconStyles}) => {
    const swiper = useSwiper();

  return (
		<div className={containerStyles}>
			<button aria-label="Previous slide" className={btnStyles} onClick={() => swiper.slidePrev()}>
				<PiCaretLeftBold className={iconStyles} />
			</button>
			<button aria-label="Next slide" className={btnStyles} onClick={() => swiper.slideNext()}>
				<PiCaretRightBold className={iconStyles} />
			</button>
		</div>
	);
}

export default SwiperNavButtons