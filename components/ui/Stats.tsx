import React from 'react';
import CountUp from 'react-countup';
import { Icon } from '@iconify/react';
import Container from '@/components/ui/Container';
import { H2, Paragraph } from '@/components/ui/Typography';
import Image from '@/components/ui/Image';
import clsxm from '@/utils/clsxm';

const STATS: Stats[] = [
  {
    title: 'Doctors Enrolled',
    icon: 'healthicons:doctor-female-outline',
    stat: 1200,
    iconColor: 'text-[#fc4d93]'
  },
  {
    title: 'Clients',
    icon: 'bi:hospital',
    stat: 400,
    iconColor: 'text-[#FF8F21]'
  },
  {
    title: 'Test Reports',
    icon: 'carbon:report',
    stat: 30000,
    iconColor: 'text-[#14C0DA]'
  },
  {
    title: 'Lorem',
    icon: 'fluent:xray-24-regular',
    stat: 400,
    iconColor: 'text-[#516EFF]'
  }
];

export default function Stats() {
  return (
    <section className='stats py-16 xl:py-24'>
      <Container>
        <div className='section-header z-[1] mb-14 text-center'>
          <H2 className='mb-3 text-section-title'>
            <span className=''>We Are </span>
            <span className='relative'>
              Proud{' '}
              <Image
                className='absolute bottom-4 -left-2 z-[-1] animate-[fade-show_infinite_3s]'
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675600756/radsync/yellow-shape_m5cvcu.png'
                alt=''
              />
            </span>{' '}
          </H2>
          <Paragraph className='mx-auto max-w-xl text-section-subtitle'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta consequuntur, et, quis
            quaerat necessitatibus ut ipsum provident
          </Paragraph>
        </div>
        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 place-items-center'>
          {STATS.map(stat => (
            <StatsItem key={stat.title} stat={stat} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function StatsItem({ stat }: { stat: Stats }) {
  const { title, icon, stat: statNumber, iconColor } = stat;

  return (
    <div className={clsxm('stat-item')}>
      <div className='stat-icon overflow-hidden'>
        <Icon width={40} height={40} icon={icon} className={clsxm('font-light', iconColor)} />
      </div>
      <div className='stat-content mt-4 '>
        <CountUp start={0} end={statNumber} delay={0}>
          {({ countUpRef }) => (
            <div>
              <span className='mb-1 text-2xl font-bold text-secondary' ref={countUpRef} />
            </div>
          )}
        </CountUp>
        <Paragraph>{title}</Paragraph>
      </div>
    </div>
  );
}
