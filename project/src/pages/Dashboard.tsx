import { useState } from 'react';
import {
  Leaf,
  Droplet,
  Zap,
  Globe,
  Star,
  Shield,
  CheckCircle2,
  Sprout,
  Unplug,
  Waves,
  TrendingUp
} from 'lucide-react';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'VERIFIED' | 'PENDING'>('ALL');

  const stats = [
    { icon: Leaf, label: 'Total Eco Points', value: '0', color: 'bg-[#22c55e]', textColor: 'text-white', iconColor: 'text-white' },
    { icon: Droplet, label: 'Water Saved', value: '1,240 L', color: 'bg-[#152236]', textColor: 'text-white', iconColor: 'text-blue-400' },
    { icon: Zap, label: 'Energy Offset', value: '85 kWh', color: 'bg-[#152236]', textColor: 'text-white', iconColor: 'text-orange-400' },
    { icon: Globe, label: 'CO2 Reduced', value: '12.5 kg', color: 'bg-[#152236]', textColor: 'text-white', iconColor: 'text-teal-400' },
  ];

  const achievements = [
    { icon: Star, label: 'Seed Hunter', color: 'text-yellow-400' },
    { icon: Shield, label: 'Eco Warrior', color: 'text-blue-400' },
    { icon: CheckCircle2, label: 'Zero Waster', color: 'text-green-400' },
  ];

  const quickActions = [
    { icon: Sprout, label: 'Plant a Sapling', color: 'text-green-400' },
    { icon: Unplug, label: 'Unplug Idle Devices', color: 'text-orange-400' },
    { icon: Waves, label: 'Save Water', color: 'text-blue-400' },
  ];


  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Hello, <span className="text-[#22c55e]">UZAIF</span>!
          </h1>
          <p className="text-[#94a3b8]">Ready to make an impact today?</p>
        </div>
        <div className="self-start px-4 py-2 bg-[#152236] rounded-full flex items-center gap-2 border border-gray-700">
          <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-pulse" />
          <span className="text-white text-xs md:text-sm font-medium whitespace-nowrap">Live Status: Eco Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className={`${stat.color} rounded-2xl p-6 shadow-lg`}>
              <Icon className={`w-8 h-8 ${stat.iconColor} mb-3`} />
              <div className={`text-sm ${stat.textColor} opacity-80 mb-1`}>{stat.label}</div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.textColor}`}>{stat.value}</div>
            </div>
          );
        })}
      </div>

      {/* Main Grid Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Impact History Card */}
          <div className="bg-[#152236] rounded-2xl p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-white">Your Impact History</h2>
              <div className="flex flex-wrap gap-2">
                {(['ALL', 'VERIFIED', 'PENDING'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
                      activeFilter === filter ? 'bg-[#22c55e] text-white' : 'bg-[#0d1b2a] text-[#94a3b8] hover:bg-[#111f2e]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#0d1b2a] rounded-xl p-4 text-center sm:text-left">
                <div className="text-[#94a3b8] text-xs md:text-sm mb-1">Actions</div>
                <div className="text-xl md:text-2xl font-bold text-white">0</div>
              </div>
              <div className="bg-[#0d1b2a] rounded-xl p-4 text-center sm:text-left">
                <div className="text-[#94a3b8] text-xs md:text-sm mb-1">Verified Rate</div>
                <div className="text-xl md:text-2xl font-bold text-white">0%</div>
              </div>
              <div className="bg-[#0d1b2a] rounded-xl p-4 text-center sm:text-left">
                <div className="text-[#94a3b8] text-xs md:text-sm mb-1">Points Gained</div>
                <div className="text-xl md:text-2xl font-bold text-white">0</div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center py-12">
              <Leaf className="w-12 h-12 md:w-16 md:h-16 text-[#22c55e] opacity-50 mb-4" />
              <p className="text-[#94a3b8] text-xs md:text-sm font-medium uppercase tracking-wider text-center">
                No Content Available Yet
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div key={index} className="bg-[#152236] rounded-xl p-4 flex items-center sm:flex-col sm:items-start gap-4 sm:gap-2 hover:bg-[#1a2d45] transition-colors cursor-pointer border border-transparent hover:border-[#22c55e]/30">
                  <Icon className={`w-6 h-6 md:w-8 md:h-8 ${action.color}`} />
                  <p className="text-white text-sm font-medium">{action.label}</p>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-2">
            <button className="w-full sm:w-auto px-8 py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Log an Action
            </button>
          </div>
        </div>

        {/* Right Sidebar Section */}
        <div className="space-y-6">
          <div className="bg-[#152236] rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">Recent Achievements</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-[#0d1b2a] rounded-xl border border-gray-800">
                    <Icon className={`w-6 h-6 md:w-8 md:h-8 ${achievement.color}`} />
                    <span className="text-white font-medium text-sm">{achievement.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1a4d2e] to-[#152236] rounded-2xl p-6 border border-[#22c55e]/20 shadow-xl">
            <div className="text-[#22c55e] text-[10px] md:text-xs font-bold uppercase tracking-wider mb-3">Active Community Challenge</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2">Operation Green Earth</h3>
            <p className="text-[#94a3b8] text-sm mb-4">Join 2,500 warriors to plant 10k trees. We're almost there!</p>
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs md:text-sm mb-2">
                <span className="text-[#94a3b8]">Progress</span>
                <span className="text-white font-semibold">65%</span>
              </div>
              <div className="w-full h-2.5 bg-[#0d1b2a] rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-400 to-[#22c55e] rounded-full transition-all duration-1000" style={{ width: '65%' }} />
              </div>
            </div>
            <button className="w-full py-3 bg-[#22c55e] hover:bg-[#16a34a] text-white font-bold rounded-xl transition-all">
              Participate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
