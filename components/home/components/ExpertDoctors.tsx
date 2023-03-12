import React from 'react';
import { Icon } from '@iconify/react';
import Container from '@/components/ui/Container';
import { H2, H6, Paragraph } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';
import { ButtonLink, UnstyledLink } from '@/components/ui/Links';

const EXPERTS: Experts[] = [
  {
    name: 'Paschal Nduleo',
    expertise: 'Radiologist',
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675612041/radsync/bruno-rodrigues-279xIHymPYY-unsplash_lcochl.jpg',
    facebook: '',
    twitter: '',
    linkedin: ''
  },
  {
    name: 'Lilian Esoro',
    expertise: 'Radiologist',
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675612041/radsync/rian-ramirez-rm7rZYdl3rY-unsplash_c7nxz0.jpg',
    facebook: '',
    twitter: '',
    linkedin: ''
  },
  {
    name: 'Ibrahim Alayo',
    expertise: 'Radiologist',
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675612041/radsync/ashkan-forouzani-DPEPYPBZpB8-unsplash_p1jceo.jpg',
    facebook: '',
    twitter: '',
    linkedin: ''
  }
];

export default function ExpertDoctors() {
  return (
    <section className='expert-doctors py-16 xl:py-24'>
      <Container>
        <div className='section-header z-[1] mb-14 text-center'>
          <H2 className='mb-3 text-section-title'>
            <span className='block'>Some of </span>
            <span>
              Our{' '}
              <span className='relative'>
                Expert{' '}
                <Image
                  className='absolute bottom-4 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                  src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                  alt=''
                />
              </span>{' '}
              Doctors
            </span>
          </H2>
          <Paragraph className='mx-auto max-w-xl text-section-subtitle'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
            consequuntur, et, quis quaerat necessitatibus ut ipsum provident
          </Paragraph>
        </div>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {EXPERTS.map(expert => (
            <div key={expert.name} className='rounded-md bg-[#f5f6fa] p-7'>
              <div className='doctor-image h-96 overflow-hidden'>
                <Image src={expert.image} />
              </div>
              <div className='doctor-content mt-4 '>
                <div className='flex w-full items-center justify-center gap-1 text-center text-secondary'>
                  <H6 className='text-secondary'>{expert.name}, </H6>{' '}
                  <span> {expert.expertise}</span>
                </div>
                <div className='socials mt-2'>
                  <div className='flex items-center justify-center gap-3'>
                    <UnstyledLink
                      className='rounded-md border-2 border-[#d7d9e3] bg-transparent p-2 text-lg text-secondary transition delay-300 ease-in hover:border-primary hover:bg-primary hover:text-white'
                      href={expert.facebook}
                    >
                      <Icon icon='ri:facebook-fill' />
                    </UnstyledLink>
                    <UnstyledLink
                      className='rounded-md border-2 border-[#d7d9e3] bg-transparent p-2 text-lg text-secondary transition delay-300 ease-in hover:border-primary hover:bg-primary hover:text-white'
                      href={expert.twitter}
                    >
                      <Icon icon='prime:twitter' />
                    </UnstyledLink>

                    <UnstyledLink
                      className='rounded-md border-2 border-[#d7d9e3] bg-transparent p-2 text-lg text-secondary transition delay-300 ease-in hover:border-primary hover:bg-primary hover:text-white'
                      href={expert.linkedin}
                    >
                      <Icon icon='prime:linkedin' />
                    </UnstyledLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-14 flex justify-center '>
          <ButtonLink
            href=''
            outlined
            className='border-gray-300 text-secondary hover:shadow-none'
          >
            Become a Consultant
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
