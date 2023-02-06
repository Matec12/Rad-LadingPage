import React from 'react';
import Container from '@/components/ui/Container';
import { H1, Paragraph } from '@/components/ui/Typography';
import { ButtonLink } from '@/components/ui/Links';
import Image from '@/components/ui/Image';

export default function Banner() {
  return (
    <section id='banner' className='hero hero-pattern w-full bg-banner pt-32 pb-24 xl:py-44 -mt-24'>
      <Container>
        <div className='relative flex flex-wrap items-center'>
          <div className='z-[1] grid gap-y-4 px-2 text-left sm:gap-y-4 md:w-1/2 md:flex-initial'>
            <H1 className='text-[2rem] font-bold leading-9 text-section-title lg:text-5xl lg:leading-[4.2rem] xl:text-[3.5rem]'>
              <span className='block font-light'>Streamlining the</span>{' '}
              <span className='relative'>
                Test Report
                <Image
                  className='absolute bottom-5 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                  src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                  alt=''
                />
              </span>{' '}
              Process with Doctor Expertise.{' '}
            </H1>
            <Paragraph className='text-xl text-section-title'>
              Transforming the Way Hospitals Approach Diagnostic Testing with Comprehensive Doctor
              Collaboration{' '}
            </Paragraph>
            <div className='mt-5'>
              <ButtonLink className='px-8 py-3' href='/'>
                Get Started
              </ButtonLink>
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
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675602284/radsync/hero-1-circle-4_je2z4n.png'
                className='absolute right-6 -top-20 z-[-1]'
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
