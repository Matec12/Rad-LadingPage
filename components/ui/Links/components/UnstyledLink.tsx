import * as React from 'react';
import Link, { LinkProps } from 'next/link';
import clsxm from '@/utils/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link
          ref={ref}
          href={href}
          {...nextLinkProps}
          {...rest}
          className={className}
        >
          {children}
        </Link>
      );
    }

    return (
      <Link
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm('cursor-newtab', className)}
      >
        {children}
      </Link>
    );
  }
);

export default UnstyledLink;
