import * as React from 'react';
import clsxm from '@/utils/clsxm';
import UnderlineLink from './UnderLineLink';
import { UnstyledLinkProps } from './UnstyledLink';

type ArrowLinkProps<C extends React.ElementType> = {
  as?: C;
  direction?: 'left' | 'right';
} & UnstyledLinkProps &
  React.ComponentProps<C>;

export default function ArrowLink<C extends React.ElementType>({
  children,
  className,
  direction = 'right',
  as,
  ...rest
}: ArrowLinkProps<C>) {
  const Component = as || UnderlineLink;

  return (
    <Component
      {...rest}
      className={clsxm('group gap-[0.25em]', direction === 'left' && 'flex-row-reverse', className)}
    >
      <span>{children}</span>
      <svg
        width='54'
        height='24'
        viewBox='0 0 54 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={clsxm(
          'relative',
          'transition-transform duration-200',
          direction === 'right' ? 'motion-safe:-translate-x-1' : 'rotate-180',
          'group-hover:translate-x-0'
        )}
      >
        <path
          d='M44.4299 5.92969L50.4999 11.9997L44.4299 18.0697'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.5 12H50.33'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </Component>
  );
}
