import clsxm from '@/utils/clsxm';

interface FormGroupProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
}

const FormGroup = ({ children, className }: FormGroupProps) => {
  return <div className={clsxm('form-group mb-4', className)}>{children}</div>;
};

export default FormGroup;
