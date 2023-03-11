'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import clsxm from '@/utils/clsxm';
import Container from '../../ui/Container';
import { UnstyledLink, PrimaryLink, ButtonLink } from '../../ui/Links';
import Logo from '../../ui/Logos/Logo';
import { Popover, Transition } from '@headlessui/react';
import LogoWhite from '@/components/ui/Logos/LogoWhite';

const NAVLINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'X-ray', href: '/services/#x-ray' },
      { name: 'MRI', href: '/services/#mri' },
      { name: 'CT scan', href: '/services/#ct-scan' },
      { name: 'Second opinions', href: '/services/#second-opinions' }
    ]
  },
  { name: 'Contact', href: '/contact' }
];

export interface IHeaderProps {
  headerClassName?: string;
}

export default function Header({ headerClassName }: IHeaderProps) {
  const [hide, setHide] = useState(true);
  let [overlayOpen, setOverlayOpen] = useState(false);
  const pathname: any = usePathname();
  const [isShadow, setIsShadow] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 89) {
        setIsShadow(true);
        setIsSticky(true);
      } else {
        setIsShadow(false);
        setIsSticky(false);
      }
    };
  }, [isShadow]);

  console.log(pathname);

  return (
    <>
      {/* {overlayOpen && <div className='fixed inset-0 z-10 h-screen bg-black opacity-60' />} */}
      <header
        className={clsxm(
          'main_header z-30 w-full bg-transparent  py-4',
          {
            'shadow-custom': isShadow,
            'header_sticky bg-white': isSticky
          },
          headerClassName
        )}
      >
        <Container>
          <div className='flex items-center justify-between'>
            <div className='z-50 flex flex-row items-center space-x-12'>
              <UnstyledLink href='/'>
                <Logo width={120} height={60} />
              </UnstyledLink>
            </div>
            <div className='items-center justify-end space-x-12 lg:flex'>
              <nav
                className={clsxm(
                  'fixed top-0 right-0 bottom-0 z-30 h-screen w-full duration-500 lg:static lg:block lg:h-auto lg:translate-x-0',
                  hide ? 'translate-x-full' : 'translate-x-0'
                )}
              >
                <ul className='z-30 flex h-full w-full flex-col items-center justify-center space-y-6 overflow-x-visible overflow-y-visible bg-white lg:flex-row lg:justify-end lg:space-y-0 lg:bg-transparent'>
                  {NAVLINKS?.map(({ name, href, children }, idx) => {
                    if (children) {
                      return (
                        <Popover key={name} className=''>
                          {({ open }) => {
                            setOverlayOpen(open);
                            return (
                              <>
                                <Popover.Button
                                  className={clsxm(
                                    'flex items-center px-6 py-2 text-base font-medium capitalize text-secondary duration-500 hover:text-primary focus:border-0',
                                    {
                                      'text-opacity-90': open,
                                      'text-primary': pathname.includes(href)
                                    }
                                  )}
                                >
                                  <span>{name}</span>
                                  <Icon icon='bx:chevron-down' className='' />
                                </Popover.Button>
                                <Popover.Overlay className='fixed inset-0 bg-black opacity-30 lg:hidden' />
                                <Transition
                                  as={Fragment}
                                  enter='transition ease-out duration-200'
                                  enterFrom='opacity-0 translate-y-1'
                                  enterTo='opacity-100 translate-y-0'
                                  leave='transition ease-in duration-150'
                                  leaveFrom='opacity-100 translate-y-0'
                                  leaveTo='opacity-0 translate-y-1'
                                >
                                  <Popover.Panel className='fixed left-1/4 z-50 mt-3 w-[200px] translate-y-5 transform sm:px-0 md:left-[40%] lg:left-1/3 lg:max-w-3xl'>
                                    <div className='overflow-hidden rounded-lg shadow-2xl drop-shadow-xl'>
                                      <div className='relative grid gap-8 bg-white p-7'>
                                        {children.map(({ name, href }, idx) => (
                                          <UnstyledLink key={name} href={href}>
                                            {name}
                                          </UnstyledLink>
                                        ))}
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            );
                          }}
                        </Popover>
                      );
                    }
                    return (
                      <li key={name}>
                        <PrimaryLink
                          href={href}
                          className={clsxm(
                            'inline-block px-6 py-2 text-base font-medium capitalize text-secondary duration-500 hover:text-primary',
                            { 'text-primary': pathname === href }
                          )}
                        >
                          {name}
                        </PrimaryLink>
                      </li>
                    );
                  })}
                  <div className='flex flex-col gap-6 lg:hidden'>
                    <ButtonLink flat href='https://radsync-portal.netlify.app/auth/login' className='hover:bg:transparent'>
                      Login
                    </ButtonLink>
                    <ButtonLink href='https://radsync-portal.netlify.app/auth/register'>Sign up</ButtonLink>
                  </div>
                </ul>
              </nav>
            </div>

            <div className='hidden gap-x-5 lg:flex'>
              <ButtonLink flat href='https://radsync-portal.netlify.app/auth/login' isNewTab className='hover:bg-transparent'>
                Login
              </ButtonLink>
              <ButtonLink href='https://radsync-portal.netlify.app/auth/register' isNewTab>Sign up</ButtonLink>
            </div>

            <span
              className={clsxm('relative z-30 cursor-pointer text-secondary lg:hidden')}
              onClick={() => setHide(!hide)}
            >
              <Icon icon={hide ? 'eva:menu-fill' : 'eva:close-fill'} width={32} height={32} />
            </span>
          </div>
        </Container>
      </header>
    </>
  );
}
