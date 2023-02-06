import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import Image from '../Image';
import 'swiper/css';
import 'swiper/css/pagination';

interface CarouselProps extends SwiperProps {
  slides: any[];
}

const Carousel = ({ slides, ...rest }: CarouselProps) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '</span>';
    }
  };

  return (
    <Swiper
      autoplay={{ delay: 1000 }}
      pagination={pagination}
      modules={[Pagination]}
      className='mySwiper'
      {...rest}
    >
      {slides.map((slide, index) => (
        <SwiperSlide className='dark:bg-background-dark bg-white' key={index}>
          <Image src={slide} alt='' className='h-40' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
