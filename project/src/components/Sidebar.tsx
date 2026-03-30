import { useState } from 'react'; // Added for mobile toggle
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, PlusCircle, Trophy, Gift, 
  Settings, HelpCircle, Leaf, LogOut, Menu, X // Added Menu and X icons
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // State to track mobile menu

  const mainNavItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/log-action', label: 'Log Action', icon: PlusCircle },
    { path: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { path: '/rewards', label: 'Rewards', icon: Gift },
  ];

  const supportNavItems = [
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/help', label: 'Help Center', icon: HelpCircle },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* --- MOBILE HAMBURGER BUTTON --- */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-[#111f2e] text-white rounded-lg md:hidden border border-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* --- MOBILE OVERLAY (Darkens background when menu is open) --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- SIDEBAR CONTAINER --- */}
      <div className={`
        fixed left-0 top-0 h-screen w-[220px] bg-[#111f2e] flex flex-col z-40 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 
      `}>
        {/* LOGO SECTION */}
        <div className="p-5 flex items-center gap-2 border-b border-gray-800">
          <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-[#0d1b2a]" />
          </div>
          <div className="font-bold text-lg">
            <span className="text-[#22c55e]">Green</span>
            <span className="text-white">Tracker</span>
          </div>
        </div>

        {/* NAVIGATION SECTION */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          <div className="mb-4">
            <div className="text-[#94a3b8] text-[10px] font-semibold uppercase tracking-wider px-3 mb-2">
              Main Menu
            </div>
            <nav className="space-y-1">
              {mainNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)} // Close menu on click (mobile)
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-[#22c55e] text-white'
                        : 'text-[#94a3b8] hover:bg-[#152236] hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mb-4">
            <div className="text-[#94a3b8] text-[10px] font-semibold uppercase tracking-wider px-3 mb-2">
              Support
            </div>
            <nav className="space-y-1">
              {supportNavItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)} // Close menu on click (mobile)
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-[#22c55e] text-white'
                        : 'text-[#94a3b8] hover:bg-[#152236] hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* USER PROFILE SECTION */}
        <div className="p-3 border-t border-gray-800">
          <div className="bg-[#152236] rounded-xl p-3 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center">
                <span className="text-[#0d1b2a] font-bold text-sm">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm">UZAIF</div>
                <div className="bg-red-500/20 text-red-400 text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mt-0.5">
                  ECO NEWBIE
                </div>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 text-red-400 text-xs font-medium py-2 hover:bg-red-500/10 rounded-lg transition-colors">
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
