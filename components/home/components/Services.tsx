import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/ui/Container';
import { H2, H6, Paragraph } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';
import { Icon } from '@iconify/react';
import { ButtonLink } from '@/components/ui/Links';
import clsxm from '@/utils/clsxm';

const SERVICES: Services[] = [
  {
    title: 'X-ray',
    detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    href: '/services/#x-ray',
    icon: 'fluent:xray-24-regular',
    color: 'bg-[#2d69f0]'
  },
  {
    title: 'MRI',
    detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    href: '/services/#mri',
    icon: 'medical-icon:i-imaging-alternative-mri',
    color: 'bg-[#DD246E]'
  },
  {
    title: 'CT Scan',
    detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    href: '/services/#ct-scan',
    icon: 'majesticons:scan-user-line',
    color: 'bg-[#8007E6]'
  },
  {
    title: 'Second Opinions',
    detail: 'Lorem, ipsum dolor sit amet consectetur adipisicing',
    href: '/services/#second-opinions',
    icon: 'fluent:people-call-20-regular',
    color: 'bg-[#0CAE74]'
  }
];

export default function Services() {
  return (
    <section className='services pt-16 xl:pt-24'>
      <Container>
        <div className='section-header z-[1] mb-14 text-center'>
          <H2 className='mb-3 text-section-title'>
            <span className='block'>Our </span>
            <span className='relative'>
              Comprehensive{' '}
              <Image
                className='absolute bottom-4 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                alt=''
              />
            </span>{' '}
            Testing Services
          </H2>
          <Paragraph className='mx-auto max-w-xl text-section-subtitle'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur, et, quis
            quaerat necessitatibus ut ipsum provident
          </Paragraph>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
          {SERVICES.map(service => (
            <ServiceItem key={service.title} service={service} />
          ))}
        </div>
        <div className='mt-14 flex justify-center '>
          <ButtonLink
            href='/services'
            outlined
            className='border-gray-300 text-secondary hover:shadow-none'
          >
            View All
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

function ServiceItem({ service }: { service: Services }) {
  const router = useRouter();
  const { title, detail, icon, href, color } = service;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsxm(
        'service-item rounded-md p-8 shadow-custom transition duration-300 ease-in hover:-translate-y-2',
        color
      )}
    >
      <div className='service-icon overflow-hidden text-white'>
        <Icon width={40} height={40} icon={icon} />
      </div>
      <div className='service-content mt-4 '>
        <H6 className='mb-4 text-white'>{title}</H6>
        {!isHovered ? (
          <Paragraph className='text-white'> {detail}</Paragraph>
        ) : (
          <button
            onClick={() => router.push(href)}
            className={clsxm(
              'rounded-full border border-gray-300 bg-transparent p-2 text-white hover:border-white hover:text-lg',
              isHovered ? 'translate-x-0 transition-all duration-300' : '-translate-x-10'
            )}
          >
            <Icon icon='material-symbols:arrow-right-alt-rounded' />
          </button>
        )}
      </div>
    </div>
  );
}
