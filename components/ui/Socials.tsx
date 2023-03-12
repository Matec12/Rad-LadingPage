import clsxm from '@/utils/clsxm';
import { Icon } from '@iconify/react';

interface SocialProps {
  icon: string;
  className: string;
}

export default function Socials({ icon, className }: SocialProps) {
  return (
    <Icon
      icon={icon}
      width={36}
      height={36}
      className={clsxm(
        'text-primary transition delay-150 duration-300 ease-in',
        className
      )}
    />
  );
}

Socials;
