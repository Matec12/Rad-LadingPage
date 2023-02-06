import React from 'react';
import Container from '@/components/ui/Container';
import { H2, H5, Paragraph } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675633824/radsync/9-small_cgjwjl.png',
    name: 'Sheila Ademola',
    title: 'CEO, Jola Hospitals',
    comment:
      'Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675633824/radsync/8-small_kvvwhy.png',
    name: 'Kola Olawuyi',
    title: 'COO, Helta Hospitals',
    comment:
      'Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675633824/radsync/8-small_kvvwhy.png',
    name: 'Kola Olawuyi',
    title: 'COO, Helta Hospitals',
    comment:
      'Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and squeak he legged it Charles bonnet arse at public school bamboozled.'
  }
];

export default function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + '</span>';
    }
  };
  return (
    <section className='testimonials relative overflow-hidden bg-[#f6f6f6] py-16 xl:py-24'>
      <Image
        src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602792/radsync/hero-1-dot_isfu2h.png'
        className='absolute left-4 top-5  animate-[hero-dot-1_5s_linear_0s_infinite_alternate]'
        alt=''
      />
      <Container>
        <div className='relative flex flex-wrap items-center'>
          <div className='z-[1] grid gap-y-4 px-2 text-left sm:gap-y-4 md:w-1/2 md:flex-initial'>
            <H2 className='text-section-title'>
              <span className='block'> Thoughts From</span>
              <span className='relative'>
                Our Best
                <Image
                  className='absolute bottom-5 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                  src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                  alt=''
                />
              </span>{' '}
              Clients.
            </H2>
            <Paragraph className='mx-auto max-w-xl text-section-subtitle'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur, et, quis
              quaerat necessitatibus ut ipsum provident
            </Paragraph>
            <div className='mt-5'>
              <Swiper
                // slidesPerView={'auto'}
                // centeredSlides={true}
                autoplay={{ delay: 1000 }}
                spaceBetween={30}
                pagination={pagination}
                modules={[Pagination]}
                className='mySwiper overflow-y-visible'
              >
                {TESTIMONIALS.map(item => (
                  <SwiperSlide key={item.name} className='bg-white'>
                    jjj
                    <div className='bg-white p-8 shadow-custom'>
                      <div className='user-profile flex items-center gap-4'>
                        <div className='overflow-hidden rounded-full'>
                          <Image src={item.image} className='rounded-full' />
                        </div>
                        <div className='text-left'>
                          <H5>{item.name}</H5>
                          <Paragraph>{item.title}</Paragraph>
                        </div>
                      </div>
                      <div className='flex justify-end'>
                        <div></div>
                        <Paragraph className='mt-8 text-left'>{item.comment}</Paragraph>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className='relative z-[1] hidden overflow-visible px-4 md:flex md:w-1/2 md:flex-initial'>
            <div className='thumbs'>
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602792/radsync/hero-1-dot_isfu2h.png'
                className='absolute -left-6 -bottom-20 z-[-1] animate-[hero-dot-1_5s_linear_0s_infinite_alternate]'
                alt=''
              />
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602723/radsync/hero-1-circle-3_qs6bnr.png'
                className='absolute right-6 -bottom-20 z-[-1]'
                alt=''
              />
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602792/radsync/hero-1-dot_isfu2h.png'
                className='absolute right-6 -top-20 z-[-1] rotate-90 animate-[hero-dot-1_5s_linear_0s_infinite_alternate]'
                alt=''
              />
            </div>
            <div className='banner-img z-50'>
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675601805/radsync/accuray-TVwfFFSDIfo-unsplash_y6kikn.jpg'
                className='min-[1560]:h-auto h-[470px] object-cover px-2'
                alt=''
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
