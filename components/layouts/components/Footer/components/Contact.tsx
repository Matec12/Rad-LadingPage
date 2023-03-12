import React from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { UnstyledLink } from '@/components/ui/Links';
import { Paragraph } from '@/components/ui/Typography';

export default function Contact() {
  const pathname: any = usePathname();

  return (
    <div className='contact'>
      <h5 className='mb-4 text-xl font-bold text-white'>
        <UnstyledLink
          href='/contact'
          className={
            pathname.includes('/contact')
              ? 'font-bold text-primary'
              : 'hover:text-primary'
          }
        >
          Contact
        </UnstyledLink>
      </h5>
      <ul>
        <li className='mb-3 flex items-center gap-3 text-base text-footer-link'>
          <Icon icon='fe:phone' width={20} height={20} />
          <Paragraph className='text-base text-footer-link'>
            +234 915 916 2524{' '}
          </Paragraph>
        </li>
        <li className='mb-3  flex items-center gap-3 text-base text-footer-link'>
          <Icon icon='ic:round-mail' width={24} height={24} />
          <UnstyledLink
            href='mailto:info@radsync.com?subject=[Feedback] from Customer'
            className='text-footer-link'
          >
            info@radsync.com
          </UnstyledLink>
        </li>
        <li className='mb-3  flex items-center gap-3 text-base text-footer-link'>
          <Icon icon='fe:phone' width={20} height={20} />
          <Paragraph className='text-base text-footer-link'>
            34, Admiralty way, Lekki Phase 1, Lagos- Nigeria
          </Paragraph>
        </li>
      </ul>
    </div>
  );
}
