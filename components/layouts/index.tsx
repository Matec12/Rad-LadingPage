import Footer from './components/Footer';
import Header, { IHeaderProps } from './components/Header';
import Seo from './components/Seo';

interface ILayoutProps extends IHeaderProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children, ...rest }: ILayoutProps) => {
  return (
    <>
      <Seo templateTitle={title} />
      <Header {...rest} />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
