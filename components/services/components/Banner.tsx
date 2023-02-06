import Container from '@/components/ui/Container';
import { H1 } from '@/components/ui/Typography';

const Banner = () => {
  return (
    <section className='service-banner banner-overlay pt-[235px] pb-[150px]'>
      <Container>
        <div className=''>
          <H1 className='mb-4 text-center text-white'>Services</H1>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
