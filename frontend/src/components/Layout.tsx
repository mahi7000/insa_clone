import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col mt-[70px]">
      <Header />
      <main className="flex-1 px-[40px] py-[70px]">
        {children || <Outlet />} {/* Supports both approaches */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;