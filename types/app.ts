import type { AppProps } from 'next/app';
import type { NextPage } from 'next';

export type CustomPageProps<T = any> = NextPage<T> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export type CustomAppProps = AppProps & {
  Component: CustomPageProps;
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export type InputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>;
export type TextareaChangeEventHandler = React.ChangeEventHandler<HTMLTextAreaElement>;
export type SelectChangeEventHandler = React.ChangeEventHandler<HTMLSelectElement>;
