import React from 'react';
import '@/styles/index.scss';
import { CustomAppProps } from '@/types/app';

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || (page => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
