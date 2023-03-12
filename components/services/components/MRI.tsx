import React from 'react';
import Container from '@/components/ui/Container';
import { H2, Paragraph } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';

export default function MRI() {
  return (
    <section id='mri' className='mri pt-16 xl:pt-24'>
      <Container>
        <div className='relative flex flex-col-reverse flex-wrap items-center md:flex-row'>
          <div className='relative z-[1] overflow-visible md:flex md:w-1/2 md:flex-initial md:px-4'>
            <div className='thumbs'>
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602792/radsync/hero-1-dot_isfu2h.png'
                className='absolute -left-6 -bottom-20 z-[-1] animate-[hero-dot-1_5s_linear_0s_infinite_alternate]'
                alt=''
              />
            </div>
            <div className='banner-img z-50'>
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675691230/radsync/national-cancer-institute-rUfUd-7WW78-unsplash_hmotro.jpg'
                className='min-[1560]:h-auto h-[470px] object-cover px-2'
                alt=''
              />
            </div>
          </div>
          <div className='z-[1] grid gap-y-4 text-left sm:gap-y-4 md:w-1/2 md:flex-initial md:px-2'>
            <H2 className='text-section-title'>
              <span className='relative'>
                MRI
                <Image
                  className='absolute bottom-5 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                  src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                  alt=''
                />
              </span>
            </H2>
            <Paragraph className='mx-auto max-w-xl text-section-subtitle'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequuntur, et, quis quaerat necessitatibus ut ipsum provident
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequuntur, et, quis quaerat necessitatibus ut ipsum provident
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequuntur, et, quis quaerat necessitatibus ut ipsum provident
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              consequuntur, et, quis quaerat necessitatibus ut ipsum provident
            </Paragraph>
            <div className='mt-5'></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
