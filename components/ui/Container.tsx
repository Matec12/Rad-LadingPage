import React from 'react';
import clsxm from '@/utils/clsxm';

interface IContainer<P> extends React.FunctionComponent<P> {
  Fluid: typeof Fluid;
}

interface IContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Fluid: React.FC<IContainerProps> = ({ children, className }) => {
  return <div className={clsxm('w-full', className)}>{children} </div>;
};

const Container: IContainer<IContainerProps> = ({ children, className }) => {
  return (
    <div className={clsxm('container mx-auto px-4 md:px-8 lg:px-12 xl:px-16', className)}>
      {children}{' '}
    </div>
  );
};

Container.Fluid = Fluid;

export default Container;
