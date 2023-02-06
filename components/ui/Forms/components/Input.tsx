import React from 'react';
import clsxm from '@/utils/clsxm';

export type InputProps = {} & React.ComponentPropsWithRef<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...rest }: InputProps, ref) => {
    return <input ref={ref} type={type} className={clsxm('form-control', className)} {...rest} />;
  }
);

export default Input;
