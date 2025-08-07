import type { ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const noHeaderFooterPaths = ['/signup', '/login'];
  const hideHeaderFooter = noHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeaderFooter && <Header />}
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;