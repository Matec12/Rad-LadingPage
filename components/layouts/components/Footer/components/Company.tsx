import React from 'react';
import { usePathname } from 'next/navigation';
import { UnstyledLink } from '@/components/ui/Links';
import clsxm from '@/utils/clsxm';

const NAVLINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services'
  }
];

export default function Company() {
  const pathname: any = usePathname();

  return (
    <div className='company'>
      <h5 className='mb-4 text-xl font-bold text-white'>Company</h5>
      <ul>
        {NAVLINKS?.map(link => (
          <li className='mb-2 text-footer-link'>
            <UnstyledLink
              key={link.name}
              href='/'
              className={clsxm(
                'text-base',
                pathname === link.href
                  ? 'font-medium text-primary'
                  : 'text-footer-link hover:text-primary'
              )}
            >
              {link.name}
            </UnstyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
