import Layout from '../layouts';
import Banner from './components/Banner';
import XRay from './components/XRay';
import CTScan from './components/CTScan';
import MRI from './components/MRI';
import SecondOpinions from './components/SecondOpinions';
import GetStartedWidget from '../home/components/GetStartedWidget';

const ServicesPage = () => {
  return (
    <Layout title='Contact'>
      <Banner />
      <XRay />
      <MRI />
      <CTScan />
      <SecondOpinions />
      <GetStartedWidget />
    </Layout>
  );
};

export default ServicesPage;
