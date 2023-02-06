import Layout from '../layouts';
import Banner from './components/Banner';
import Clients from './components/Clients';
import Stats from '../ui/Stats';
import GetStartedWidget from '../home/components/GetStartedWidget';
import WhoWeAre from './components/WhoWeAre';
import WhyChooseUs from './components/WhyChooseUs';

const AboutPage = () => {
  return (
    <Layout title='Contact' navLinkClassName='text-white' iconClassName='text-white' isLogoWhite>
      <Banner />
      <WhoWeAre />
      <WhyChooseUs />
      <Clients />
      <Stats />
      <GetStartedWidget />
    </Layout>
  );
};

export default AboutPage;
