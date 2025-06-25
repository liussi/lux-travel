import { Outlet } from 'react-router-dom';
import { LayoutWrapper } from '../Layout/Layout.styled';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
