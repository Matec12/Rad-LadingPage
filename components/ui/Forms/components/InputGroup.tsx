import React from 'react';
import clsxm from '@/utils/clsxm';

type InputGroupProps = {} & React.ComponentPropsWithRef<'div'>;

const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, className, ...rest }: InputGroupProps, ref) => {
    return (
      <div ref={ref} className={clsxm('input-group', className)} {...rest}>
        {children}
      </div>
    );
  }
);

export default InputGroup;
