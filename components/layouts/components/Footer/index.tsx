import { UnstyledLink } from '@/components/ui/Links';
import Container from '@/components/ui/Container';
import Company from './components/Company';
import Contact from './components/Contact';
import Subscribe from './components/Subscribe';
import LogoWhite from '@/components/ui/Logos/LogoWhite';
import { Paragraph } from '@/components/ui/Typography';

export default function Footer() {
  return (
    <div className='footer bg-footer pt-32'>
      <div className='py-6'>
        <Container>
          <div className='mb-10 grid grid-cols-1 gap-5 md:grid-cols-4'>
            <div className=' pb-10'>
              <UnstyledLink href='/'>
                <LogoWhite className='' />
              </UnstyledLink>
              <Paragraph className='mt-5 text-footer-link'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempore soluta
                dolorum totam repudiandae.
              </Paragraph>
            </div>
            <Company />
            <Contact />
            <Subscribe />
          </div>
        </Container>
      </div>
      <div className='flex justify-center border-t border-gray-600 py-6 text-footer-link md:mt-0'>
        © {new Date().getFullYear()} RadSync Corporation. All rights reserved
      </div>
    </div>
  );
}
