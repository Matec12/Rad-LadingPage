import React from 'react';
import clsxm from '@/utils/clsxm';

type InputGroupAddonProps = {
  addonType: 'prepend' | 'append';
} & React.ComponentPropsWithRef<'div'>;

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ children, className, addonType, ...rest }: InputGroupAddonProps, ref) => {
    return (
      <div
        ref={ref}
        className={clsxm(
          'text-primary',
          addonType === 'prepend' && 'input-group-prepend',
          addonType === 'append' && 'input-group-append',
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default InputGroupAddon;
