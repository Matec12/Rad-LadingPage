import React from 'react';
import clsxm from '@/utils/clsxm';

export type LabelProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithRef<'label'>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, ...rest }: LabelProps, ref) => {
    return (
      <label
        ref={ref}
        className={clsxm('text-body-primary', className)}
        {...rest}
      >
        {children}
      </label>
    );
  }
);

export default Label;
