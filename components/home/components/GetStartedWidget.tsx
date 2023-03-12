import React from 'react';
import Container from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Links';
import { H2 } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';

export default function GetStartedWidget() {
  return (
    <section className='get-started-widget mt-0 -mb-20'>
      <Container>
        <div className='get-started relative z-[1] overflow-hidden rounded-[10px] bg-primary pt-[50px] pr-[100px] pb-[53px] pl-[70px]'>
          <div>
            <Image
              src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675629237/radsync/get-startted-ellipse_pnjq1z.png'
              alt=''
              className='absolute -bottom-12 -right-[160px] z-[-1] hidden md:block'
            />
          </div>
          <div className='z-50 flex flex-col gap-5 md:flex-row md:items-center'>
            <div className='min-[992px]:w-3/5 flex-initial md:w-1/2'>
              <H2 className='text-white'>Connect with specialists now.</H2>
            </div>
            <div className='get-started-btn min-[992px]:w-2/5 flex flex-initial justify-start md:w-1/2 md:justify-end md:py-10'>
              <ButtonLink outlined className='border-white text-white' href='/'>
                Get Started
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

// element.style {
// }
// .elementor *, .elementor :after, .elementor :before {
//     -webkit-box-sizing: border-box;
//     box-sizing: border-box;
// }
// @media (min-width: 1400px)
// .col-xxl-7 {
//     flex: 0 0 auto;
//     width: 58.3333333333%;
// }
// @media (min-width: 1200px)
// .col-xl-7 {
//     flex: 0 0 auto;
//     width: 58.3333333333%;
// }
// @media (min-width: 992px)
// .col-lg-7 {
//     flex: 0 0 auto;
//     width: 58.3333333333%;
// }
// @media (min-width: 768px)
// .col-md-6 {
//     flex: 0 0 auto;
//     width: 50%;
// }
