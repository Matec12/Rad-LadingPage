import Container from '@/components/ui/Container';
import { H1 } from '@/components/ui/Typography';

const Banner = () => {
  return (
    <section className='about-banner banner-overlay pt-[235px] pb-[150px]'>
      <Container>
        <div className='z-50'>
          <H1 className='z-50 mb-4 text-center text-white'>About Us</H1>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
