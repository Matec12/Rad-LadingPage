import Container from '@/components/ui/Container';
import { H1 } from '@/components/ui/Typography';

const Banner = () => {
  return (
    <section className='contact-banner bg-banner pt-[235px] pb-[150px]'>
      <Container>
        <div className=''>
          <H1 className='mb-4 text-center text-white'>Contact our Support Team</H1>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
