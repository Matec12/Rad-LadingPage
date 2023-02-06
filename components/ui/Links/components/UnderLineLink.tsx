import * as React from 'react';
import clsxm from '@/utils/clsxm';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'animated-underline custom-link inline-flex items-center font-semibold',
          'focus:outline-none focus-visible:rounded ',
          'border-dark border-b border-dotted hover:border-black/0',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;
