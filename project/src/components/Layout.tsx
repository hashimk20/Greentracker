import { ReactNode } from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#0d1b2a] flex">
      {/* Sidebar is fixed, so it doesn't take up space in the flex flow */}
      <Sidebar />
      
      {/* 
          MAIN CONTENT AREA
          - ml-0: No margin on mobile (so content fills the screen)
          - md:ml-[220px]: Add margin on desktop to make room for the sidebar
          - pt-20: Add top padding on mobile so the Hamburger button doesn't cover content
          - md:pt-8: Standard padding on desktop
      */}
      <main className="flex-1 ml-0 md:ml-[220px] p-4 md:p-8 pt-20 md:pt-8 transition-all duration-300">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
