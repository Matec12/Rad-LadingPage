import React from 'react';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import { H2, Paragraph, H5 } from '@/components/ui/Typography';


export default function WhoWeAre() {
  return (
    <section className='who-we-are pt-16 xl:pt-24'>
      <Container>
        <div className='relative flex flex-wrap items-center'>
          <div className='z-[1] grid gap-y-4 md:px-2 text-left sm:gap-y-4 md:w-1/2 md:flex-initial'>
            <H2 className='text-section-title'>
              <span className='relative'>
                Who{' '}
                <Image
                  className='absolute bottom-5 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                  src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                  alt=''
                />
              </span>
              We Are
            </H2>
            <Paragraph className='mx-auto max-w-xl text-section-subtitle'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur, et, quis
              quaerat necessitatibus ut ipsum provident Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dicta consequuntur, et, quis quaerat necessitatibus ut ipsum
              provident Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequuntur, et, quis quaerat necessitatibus ut ipsum provident Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Dicta consequuntur, et, quis quaerat
              necessitatibus ut ipsum provident
            </Paragraph>
            <div className='mt-5'></div>
          </div>
          <div className='relative z-[1] overflow-visible md:px-4 md:flex md:w-1/2 md:flex-initial'>
            <div className='thumbs'>
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602792/radsync/hero-1-dot_isfu2h.png'
                className='absolute -left-6 -bottom-20 z-[-1] animate-[hero-dot-1_5s_linear_0s_infinite_alternate]'
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
