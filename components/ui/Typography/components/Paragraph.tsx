import React from 'react';
import clsxm from '@/utils/clsxm';

export type ParagraphProps = {
  children: React.ReactNode;
} & React.ComponentProps<'p'>;

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p
      className={clsxm('text-base font-normal leading-6 text-body', className)}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
