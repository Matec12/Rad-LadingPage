import React from 'react';
import Container from '@/components/ui/Container';
import { H2 } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';
import clsxm from '@/utils/clsxm';

const CLIENTS: { image: string }[] = [
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675661826/radsync/medical-logo-png-906_geqmp0.png'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675661826/radsync/medical-logo-png-894_plybkt.png'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675661826/radsync/medical-logo-png-907_brpe1z.png'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675661826/radsync/medical-logo-png-891_eqfmsk.png'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675662008/radsync/medical-logo-png-904_y2tq0t.png'
  },
  {
    image:
      'https://res.cloudinary.com/matec-technology-services/image/upload/v1675662007/radsync/medical-logo-png-902_lbsj6y.png'
  }
];

export default function Clients() {
  return (
    <section className='stats pt-16 xl:pt-24'>
      <Container>
        <div className='section-header z-[1] mb-14 text-center'>
          <H2 className='mb-3 text-section-title'>
            <span className=''>Trusted by The</span>
            <span className='relative'>
              World's{' '}
              <Image
                className='absolute bottom-4 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                alt=''
              />
            </span>{' '}
            Best Hospitals
          </H2>
        </div>
        <div className='flex w-full flex-wrap items-center gap-3'>
          {CLIENTS.map(client => (
            <ClientsItem key={client.image} image={client.image} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ClientsItem(client: { image: string }) {
  const { image } = client;

  return (
    <div className={clsxm('stat-item w-20 flex-1')}>
      <Image src={image} className='' alt='' />
    </div>
  );
}
