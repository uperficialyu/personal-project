import React, { memo, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Scrollbar, Autoplay]);

// direction: horizontal / vertical
export default memo(({
  slidesPerView = 2,
  autoplay = true,
  loop = true,
  direction = 'vertical',
  spaceBetween = 0,
  render,
  ...others
}) =>  {

  // const [key, setKey] = useState(Date.now()+Math.floor(Math.random()*99999))
  const key = Date.now()+Math.floor(Math.random()*99999)

  const swiperRef = useRef(null);

  return (
    <Swiper
      key={key}
      ref={swiperRef}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      direction={direction}
      autoplay={autoplay}
      loop={loop}
      {...others}
      // onResize={() => {
      //   setKey(Date.now()+Math.floor(Math.random()*99999))
      //   // swiperRef.current && swiperRef.current.swiper.update()
      // }}
    >
      {render(SwiperSlide)}
    </Swiper>
  )
})