import { useState } from 'react';
import { Camera } from 'lucide-react';

const Settings = () => {
  const [displayName, setDisplayName] = useState('UZAIF');
  const [email, setEmail] = useState('uzaif@gmail.com');
  const [darkMode, setDarkMode] = useState(true);
  const [compactSidebar, setCompactSidebar] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [appAlerts, setAppAlerts] = useState(true);
  const [accountVisible, setAccountVisible] = useState(true);

  return (
    <div className="max-w-6xl">
      <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

      <div className="bg-[#152236] rounded-2xl p-8 mb-6">
        <div className="flex items-center gap-6 mb-6">
          <div className="relative">
            <div className="w-24 h-24 bg-[#22c55e] rounded-full flex items-center justify-center">
              <span className="text-[#0d1b2a] font-bold text-3xl">U</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#0d1b2a] rounded-full flex items-center justify-center border-2 border-[#152236] hover:bg-[#111f2e] transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-1">HASHIM</h2>
            <p className="text-[#94a3b8] mb-4">hashim.k78690@gmail.com</p>
            <button className="px-6 py-2 border-2 border-[#22c55e] text-[#22c55e] rounded-lg font-medium hover:bg-[#22c55e] hover:text-white transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-[#152236] rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">General</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Display Name
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-3 bg-[#0d1b2a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#22c55e] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#94a3b8] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-[#0d1b2a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#22c55e] transition-colors"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#152236] rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Appearance</h3>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium mb-1">Dark Mode</div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  darkMode ? 'bg-[#22c55e]' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    darkMode ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-white font-medium mb-1">Compact Sidebar</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={compactSidebar}
                  onChange={(e) => setCompactSidebar(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 bg-[#0d1b2a] border-2 border-gray-600 rounded peer-checked:bg-[#22c55e] peer-checked:border-[#22c55e] transition-colors flex items-center justify-center">
                  {compactSidebar && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-[#152236] rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Notifications</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <label className="relative inline-flex items-center cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 bg-[#0d1b2a] border-2 border-gray-600 rounded peer-checked:bg-[#22c55e] peer-checked:border-[#22c55e] transition-colors flex items-center justify-center">
                  {emailAlerts && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </label>
              <div className="flex-1">
                <div className="text-white font-medium mb-1">Email Alerts</div>
                <p className="text-sm text-[#94a3b8]">Weekly eco-impact summaries</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <label className="relative inline-flex items-center cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={appAlerts}
                  onChange={(e) => setAppAlerts(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-5 h-5 bg-[#0d1b2a] border-2 border-gray-600 rounded peer-checked:bg-[#22c55e] peer-checked:border-[#22c55e] transition-colors flex items-center justify-center">
                  {appAlerts && (
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </label>
              <div className="flex-1">
                <div className="text-white font-medium mb-1">App Alerts</div>
                <p className="text-sm text-[#94a3b8]">Instant updates on verified actions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#152236] rounded-2xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Privacy</h3>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="text-white font-medium mb-1">Account Visibility</div>
              <p className="text-sm text-[#94a3b8]">Appear on community leaderboards</p>
            </div>
            <button
              onClick={() => setAccountVisible(!accountVisible)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                accountVisible ? 'bg-[#22c55e]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  accountVisible ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
