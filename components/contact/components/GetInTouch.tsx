import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import { UnstyledLink } from '@/components/ui/Links';
import { H2, H5, Paragraph } from '@/components/ui/Typography';
import { Icon } from '@iconify/react';
import ContactForm from './ContactForm';

const GetInTouch = () => {
  return (
    <section className='contact py-16 xl:py-24'>
      <Container>
        <div className='grid place-items-start gap-8 lg:grid-cols-2'>
          <div className='form flex w-full flex-col justify-center'>
            <H2 className='text-section-title'>Get In Touch</H2>
            <Paragraph className='mb-5 text-section-subtitle'>
              Got a question? We'd love to hear from you.
            </Paragraph>
            <ContactForm />
          </div>
          <div className='address-card relative z-[1] w-full md:pl-4'>
            <div>
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675659883/radsync/contact-shape-2_vmdvsx.png'
                className='absolute -right-8 z-[-1] hidden animate-[hero-dot-1_5s_linear_0s_infinite_alternate] md:flex'
              />
              <Image
                src='https://res.cloudinary.com/matec-technology-services/image/upload/v1675660106/radsync/contact-shape-1_bbbaow.png'
                className='absolute -left-2 bottom-6 z-[-1] animate-[hero-dot-1_5s_linear_0s_infinite_alternate]'
              />
            </div>
            <div className='w-full rounded-[4px] bg-white py-14 px-10 shadow-contact-card'>
              <div className='grid grid-cols-1 gap-5'>
                <div className='flex items-start gap-2 text-primary'>
                  <div>
                    <Icon
                      icon='ic:twotone-location-on'
                      width={20}
                      height={20}
                      className='translate-y-1'
                    />
                  </div>
                  <div>
                    <H5 className='mb-2 font-semibold text-section-title'>
                      Lagos Office
                    </H5>
                    <Paragraph className='text-section-subtitle hover:text-primary'>
                      34, Admiralty way, Lekki Phase 1, Lagos- Nigeria
                    </Paragraph>
                  </div>
                </div>

                <div className='flex items-start gap-2 text-primary'>
                  <div>
                    <Icon
                      icon='ic:twotone-email'
                      width={20}
                      height={20}
                      className='translate-y-1'
                    />
                  </div>
                  <div>
                    <H5 className='mb-2 font-semibold text-section-title'>
                      Email Us Directly
                    </H5>
                    <UnstyledLink href=''>
                      <Paragraph className='mb-1 text-section-subtitle hover:text-primary'>
                        info@radsync.com
                      </Paragraph>
                    </UnstyledLink>
                    <UnstyledLink href=''>
                      <Paragraph className='text-section-subtitle hover:text-primary'>
                        support@radsync.com
                      </Paragraph>
                    </UnstyledLink>
                  </div>
                </div>

                <div className='flex items-start gap-2 text-primary'>
                  <div>
                    <Icon
                      icon='icon-park-twotone:phone-telephone'
                      width={20}
                      height={20}
                      className='translate-y-1'
                    />
                  </div>
                  <div>
                    <H5 className='mb-2 font-semibold text-section-title'>
                      Phone
                    </H5>
                    <UnstyledLink href=''>
                      <Paragraph className='mb-1 text-section-subtitle hover:text-primary'>
                        09038484893
                      </Paragraph>
                    </UnstyledLink>
                    <UnstyledLink href=''>
                      <Paragraph className='text-section-subtitle hover:text-primary'>
                        08192838383
                      </Paragraph>
                    </UnstyledLink>
                  </div>
                </div>

                <div className='flex items-start gap-2 text-primary'>
                  <div className='invisible'>
                    <Icon
                      icon='icon-park-twotone:phone-telephone'
                      width={20}
                      height={20}
                      className='translate-y-1'
                    />
                  </div>
                  <div>
                    <H5 className='mb-4 font-semibold text-section-title'>
                      Socials
                    </H5>
                    <div className='socials mt-2'>
                      <div className='flex items-center justify-center gap-3'>
                        <UnstyledLink
                          className='rounded-md bg-gray-200 p-3.5  text-lg text-[#285da1] transition delay-300 ease-in hover:bg-[#285da1] hover:text-white'
                          href=''
                        >
                          <Icon icon='ri:facebook-fill' />
                        </UnstyledLink>
                        <UnstyledLink
                          className='rounded-md bg-gray-200 p-3.5 text-lg text-[#03a9f4] transition delay-300 ease-in hover:bg-[#03a9f4] hover:text-white'
                          href=''
                        >
                          <Icon icon='prime:twitter' />
                        </UnstyledLink>

                        <UnstyledLink
                          className='rounded-md bg-gray-200 p-3.5 text-lg text-[#0966c2] transition delay-300 ease-in hover:bg-[#0966c2] hover:text-white'
                          href=''
                        >
                          <Icon icon='prime:linkedin' />
                        </UnstyledLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
