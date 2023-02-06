import { ReactNode, useState } from 'react';
import { Icon } from '@iconify/react';
import Input, { InputProps } from './Input';
import clsxm from '@/utils/clsxm';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';
import Label from './Label';

type InputPasswordProps = {
  show?: boolean;
  hideIcon?: ReactNode;
  showIcon?: ReactNode;
  htmlFor?: string;
  label?: string;
  labelClassName?: string;
  groupClassName?: string;
  addonClassName?: string;
} & InputProps;

const InputPassword = ({
  show = false,
  hideIcon,
  showIcon,
  htmlFor,
  label,
  groupClassName,
  addonClassName,
  labelClassName,
  ...rest
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(show);

  const renderIcon = () => {
    if (showPassword === false) {
      return showIcon ? showIcon : <Icon icon='eva:eye-fill' width={24} height={24} />;
    } else {
      return hideIcon ? hideIcon : <Icon icon='eva:eye-off-fill' width={24} height={24} />;
    }
  };

  return (
    <>
      {label && (
        <Label className={labelClassName} htmlFor={htmlFor}>
          {label}
        </Label>
      )}
      <InputGroup className={groupClassName}>
        <Input type={showPassword ? 'text' : 'password'} {...rest} />
        <InputGroupAddon
          onClick={() => setShowPassword(!showPassword)}
          className={clsxm('cursor-pointer', addonClassName)}
          addonType='append'
        >
          <span className='text-body-primary input-group-text'>{renderIcon()}</span>
        </InputGroupAddon>
      </InputGroup>
    </>
  );
};

export default InputPassword;
