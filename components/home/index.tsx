import React from 'react';
import Layout from '@/components/layouts';
// components
import Banner from './components/Banner';
import Services from './components/Services';
import ExpertDoctors from './components/ExpertDoctors';
import Stats from '@/components/ui/Stats';
import GetStartedWidget from './components/GetStartedWidget';
import Testimonials from './components/Testimonials';

interface HomepageProps {}

const HomePage: React.FC<HomepageProps> = () => {
  return (
    <Layout title='RADSNYC | Home'>
      <Banner />
      <Services />
      <ExpertDoctors />
      <Testimonials />
      <Stats />
      <GetStartedWidget />
    </Layout>
  );
};

export default HomePage;
