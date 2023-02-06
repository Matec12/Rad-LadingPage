import * as React from 'react';
import clsxm from '@/utils/clsxm';
import { Icon } from '@iconify/react';

enum ButtonVariant {
  'primary',
  'secondary',
  'danger',
  'success',
  'info',
  'warning'
}

export type ButtonProps = {
  isLoading?: boolean;
  direction?: 'right' | 'left';
  variant?: keyof typeof ButtonVariant;
  outlined?: boolean;
  flat?: boolean;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      direction = 'right',
      variant = 'primary',
      onClick,
      outlined = false,
      flat = false,
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    const createRipple = (event: any) => {
      const button = event.currentTarget;

      const circle = document.getElementById('button-ripple');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle!.style.width = circle!.style.height = `${diameter}px`;
      circle!.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle!.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle!.classList.add('ripple');

      const ripple = button.getElementsByClassName('ripple')[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    };

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        onClick={e => {
          createRipple(e);
          onClick!(e);
        }}
        className={clsxm(
          'relative inline-flex items-center justify-center overflow-hidden rounded-[4px] px-4 py-3 text-base font-light',
          'gap-x-6 text-center focus:outline-none',
          'shadow-sm',
          'transition delay-150 duration-300 ease-in',
          [
            variant === 'primary' && [
              'bg-primary font-medium text-white',
              'hover:text-white hover:shadow-md hover:shadow-primary-lighten-5/50',
              'disabled:bg-primary disabled:bg-opacity-60 disabled:hover:bg-primary disabled:hover:bg-opacity-60 disabled:hover:shadow-none',
              {
                'hover:text-primary-darken-3 border border-primary bg-transparent text-primary hover:bg-primary-10 hover:shadow-primary-darken-5/25 active:bg-primary-25 disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-primary disabled:hover:bg-opacity-0':
                  outlined
              },
              {
                'border-0 bg-transparent text-primary shadow-none hover:bg-primary-20 hover:text-primary hover:shadow-none disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent disabled:hover:bg-opacity-100':
                  flat
              }
            ],
            variant === 'secondary' && [
              'bg-secondary font-medium text-white',
              'hover:text-white hover:shadow-md hover:shadow-secondary-lighten-5/50',
              'disabled:bg-secondary disabled:bg-opacity-60 disabled:hover:bg-secondary disabled:hover:bg-opacity-60 disabled:hover:shadow-none',
              {
                'hover:text-secondary-darken-3 border border-secondary bg-transparent text-secondary hover:bg-secondary-10 hover:shadow-secondary-darken-5/25 active:bg-secondary-25 disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-secondary disabled:hover:bg-opacity-0 ':
                  outlined
              },
              {
                'border-0 bg-transparent text-secondary shadow-none hover:bg-secondary-20 hover:text-secondary hover:shadow-none disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent disabled:hover:bg-opacity-100':
                  flat
              }
            ],
            variant === 'success' && [
              'bg-success font-medium text-white',
              'hover:text-white hover:shadow-md hover:shadow-success-lighten-5/50',
              'disabled:bg-success disabled:bg-opacity-60 disabled:hover:bg-success disabled:hover:bg-opacity-60 disabled:hover:shadow-none',
              {
                'hover:text-success-darken-3 border border-success bg-transparent text-success hover:bg-success-10 hover:shadow-success-darken-5/25 active:bg-success-25 disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-success disabled:hover:bg-opacity-0 ':
                  outlined
              },
              {
                'border-0 bg-transparent text-success shadow-none hover:bg-success-20 hover:text-success hover:shadow-none disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent disabled:hover:bg-opacity-100':
                  flat
              }
            ],
            variant === 'danger' && [
              'bg-danger font-medium text-white',
              'hover:text-white hover:shadow-md hover:shadow-danger-lighten-5/50',
              'disabled:bg-danger disabled:bg-opacity-60 disabled:hover:bg-danger disabled:hover:bg-opacity-60 disabled:hover:shadow-none',
              {
                'hover:text-danger-darken-3 border border-danger bg-transparent text-danger hover:bg-danger-10 hover:shadow-danger-darken-5/25 active:bg-danger-25 disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-danger disabled:hover:bg-opacity-0 ':
                  outlined
              },
              {
                'border-0 bg-transparent text-danger shadow-none hover:bg-danger-20 hover:text-danger hover:shadow-none disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent disabled:hover:bg-opacity-100':
                  flat
              }
            ],
            variant === 'warning' && [
              'bg-warning font-medium text-white',
              'hover:text-white hover:shadow-md hover:shadow-warning-lighten-5/50',
              'disabled:bg-warning disabled:bg-opacity-60 disabled:hover:bg-warning disabled:hover:bg-opacity-60 disabled:hover:shadow-none',
              {
                'hover:text-warning-darken-3 border border-warning bg-transparent text-warning hover:bg-warning-10 hover:shadow-warning-darken-5/25 active:bg-warning-25 disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-warning disabled:hover:bg-opacity-0 ':
                  outlined
              },
              {
                'border-0 bg-transparent text-warning shadow-none hover:bg-warning-20 hover:text-warning hover:shadow-none disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent disabled:hover:bg-opacity-100':
                  flat
              }
            ],
            variant === 'info' && [
              'bg-info font-medium text-white',
              'hover:text-white hover:shadow-md hover:shadow-info-lighten-5/50',
              'disabled:bg-info disabled:bg-opacity-60 disabled:hover:bg-info disabled:hover:bg-opacity-60 disabled:hover:shadow-none',
              {
                'hover:text-info-darken-3 border border-info bg-transparent text-info hover:bg-info-10 hover:shadow-info-darken-5/25 active:bg-info-25 disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-info disabled:hover:bg-opacity-0 ':
                  outlined
              },
              {
                'border-0 bg-transparent text-info shadow-none hover:bg-info-20 hover:text-info hover:shadow-none disabled:border-opacity-60 disabled:bg-transparent disabled:text-opacity-50 disabled:hover:bg-transparent disabled:hover:bg-opacity-100':
                  flat
              }
            ]
          ],
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white',
              [
                variant === 'primary' && ['text-white', { 'text-primary-80': outlined || flat }],
                variant === 'secondary' && [
                  'text-white',
                  { 'text-secondary-80': outlined || flat }
                ],
                variant === 'success' && ['text-white', { 'text-success-80': outlined || flat }],
                variant === 'danger' && ['text-white', { 'text-danger-80': outlined || flat }],
                variant === 'warning' && ['text-white', { 'text-warning-80': outlined || flat }],
                variant === 'info' && ['text-white', { 'text-info-80': outlined || flat }]
              ]
            )}
          >
            <Icon className='h-6 w-6 animate-spin' icon='lucide:loader' />
          </div>
        )}
        {children}
        <span
          id='button-ripple'
          className={clsxm('ripple z-50', [
            variant === 'primary' && [
              'bg-white bg-opacity-40',
              { 'bg-primary-30': outlined || flat }
            ],
            variant === 'secondary' && [
              'bg-white bg-opacity-40',
              { 'bg-secondary-30': outlined || flat }
            ],
            variant === 'success' && [
              'bg-white bg-opacity-40',
              { 'bg-success-30': outlined || flat }
            ],
            variant === 'danger' && [
              'bg-white bg-opacity-40',
              { 'bg-danger-30': outlined || flat }
            ],
            variant === 'warning' && [
              'bg-white bg-opacity-40',
              { 'bg-warning-30': outlined || flat }
            ],
            variant === 'info' && ['bg-white bg-opacity-40', { 'bg-info-30': outlined || flat }]
          ])}
        ></span>
      </button>
    );
  }
);

export default Button;
