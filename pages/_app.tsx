import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/index.scss';
import { CustomAppProps } from '@/types/app';

function MyApp({ Component, pageProps }: CustomAppProps) {
  const getLayout = Component.getLayout || (page => page);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
