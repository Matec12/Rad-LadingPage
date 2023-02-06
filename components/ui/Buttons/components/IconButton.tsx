import { Icon } from '@iconify/react';
import clsxm from '@/utils/clsxm';
import { Button, ButtonProps } from '../index';

type IconButtonProps = {
  icon?: string;
  iconClassName?: string;
} & ButtonProps;

const IconButton = ({
  icon = 'clarity:window-close-line',
  onClick,
  className,
  iconClassName,
  ...rest
}: IconButtonProps) => {
  return (
    <Button
      className={clsxm(
        'overflow-visible rounded-full border-[#E5E7EA] bg-transparent p-1 shadow-none hover:bg-transparent hover:shadow-none',
        icon === 'clarity:window-close-line' && 'border',
        className
      )}
      onClick={onClick}
      {...rest}
    >
      <Icon icon={icon} className={clsxm('close-modal h-8 w-8 text-inherit', iconClassName)} />
    </Button>
  );
};

export default IconButton;
