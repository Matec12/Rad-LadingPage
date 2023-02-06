import * as React from 'react';
import clsxm from '@/utils/clsxm';
import UnstyledLink, { UnstyledLinkProps } from './UnstyledLink';

const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center',
          'hover:text-primary-darken-2 font-medium text-primary',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
