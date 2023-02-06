import React from 'react';
import { usePathname } from 'next/navigation';
import { UnstyledLink } from '@/components/ui/Links';
import Socials from '@/components/ui/Socials';
import IconButton from '@/components/ui/Buttons/components/IconButton';
import { FormGroup, Input } from '@/components/ui/Forms';

const SOCIALS = [
  {
    title: 'facebook',
    link: 'https://www.facebook.com/cheal.hey.5?mibextid=LQQJ4d',
    icon: 'eva:facebook-fill'
  },

  {
    title: 'instagram',
    link: 'https://instagram.com/chaelhey?igshid=MWI4MTIyMDE=',
    icon: 'ant-design:instagram-filled'
  },

  {
    title: 'whatsapp',
    link: 'https://wa.me/message/YGE2GNFSMD7VE1',
    icon: 'ri:whatsapp-fill'
  }
];

export default function Subscribe() {
  const pathname: any = usePathname();

  const handleSubscribe = () => {};

  return (
    <div className='subscribe last:items-end'>
      <h5 className='mb-4 text-xl font-bold text-white'>Subscribe</h5>
      <div>
        <form className=' mt-8 flex w-full '>
          <FormGroup className='m-auto flex w-full content-center items-center'>
            <Input className='focus:border-0' type='text' placeholder='Your email address' />
            <IconButton
              onClick={handleSubscribe}
              icon='ic:sharp-arrow-right-alt'
              type='submit'
              className='-ml-3 rounded-l-none rounded-r-[4px] bg-primary py-1.5 px-2 font-semibold text-white hover:bg-primary'
            />
          </FormGroup>
        </form>
      </div>
      <div className='mt-2 text-footer-link'>
        Get the latest news and updates right at your inbox
        <div className='mt-2'>
          <div className='flex items-center space-x-4'>
            {SOCIALS?.map(social => (
              <UnstyledLink
                key={social.title}
                href={social.link}
                target='_blank'
                className='mt-2 inline-block'
              >
                <Socials
                  icon={social.icon}
                  className='h-8 w-8 border-0 text-primary hover:animate-bounce'
                />
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
