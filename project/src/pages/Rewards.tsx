import { Gift, Lock, Star, Zap, Crown, Sparkles } from 'lucide-react';

const Rewards = () => {
  const availableRewards = [
    {
      icon: Gift,
      title: 'Eco Starter Kit',
      points: 100,
      description: 'Reusable bags and water bottle',
      color: 'text-blue-400',
      unlocked: false
    },
    {
      icon: Star,
      title: 'Tree Planting Certificate',
      points: 250,
      description: 'Plant a tree in your name',
      color: 'text-green-400',
      unlocked: false
    },
    {
      icon: Zap,
      title: 'Solar Panel Discount',
      points: 500,
      description: '10% off solar installation',
      color: 'text-yellow-400',
      unlocked: false
    },
    {
      icon: Crown,
      title: 'Premium Member Badge',
      points: 1000,
      description: 'Exclusive leaderboard badge',
      color: 'text-purple-400',
      unlocked: false
    },
  ];

  const unlockedRewards = [
    {
      icon: Sparkles,
      title: 'Welcome Badge',
      description: 'Earned for joining GreenTracker',
      color: 'text-[#22c55e]',
      date: 'Unlocked Today'
    }
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Rewards</h1>
        <p className="text-[#94a3b8]">Redeem your eco points for amazing rewards</p>
      </div>

      <div className="bg-gradient-to-br from-[#22c55e]/20 to-[#152236] rounded-2xl p-8 mb-8 border border-[#22c55e]/30">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[#94a3b8] text-sm mb-2">Your Available Points</div>
            <div className="text-5xl font-bold text-white mb-2">0</div>
            <p className="text-[#94a3b8] text-sm">
              Complete actions to earn more points and unlock rewards
            </p>
          </div>
          <div className="w-32 h-32 bg-[#22c55e]/20 rounded-full flex items-center justify-center border-4 border-[#22c55e]">
            <Gift className="w-16 h-16 text-[#22c55e]" />
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Available Rewards</h2>
        <div className="grid grid-cols-2 gap-6">
          {availableRewards.map((reward, index) => {
            const Icon = reward.icon;
            return (
              <div
                key={index}
                className="bg-[#152236] rounded-2xl p-6 border-2 border-transparent hover:border-[#22c55e]/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-[#0d1b2a] rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${reward.color}`} />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-[#0d1b2a] rounded-lg">
                    <Star className="w-4 h-4 text-[#22c55e]" />
                    <span className="text-white font-bold">{reward.points}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{reward.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-4">{reward.description}</p>
                <button
                  disabled
                  className="w-full py-3 bg-gray-700 text-gray-400 rounded-lg font-medium flex items-center justify-center gap-2 cursor-not-allowed"
                >
                  <Lock className="w-4 h-4" />
                  Locked
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Unlocked Rewards</h2>
        <div className="space-y-4">
          {unlockedRewards.map((reward, index) => {
            const Icon = reward.icon;
            return (
              <div
                key={index}
                className="bg-[#152236] rounded-xl p-6 flex items-center gap-4 border-2 border-[#22c55e]/30"
              >
                <div className={`w-16 h-16 bg-[#22c55e]/20 rounded-xl flex items-center justify-center`}>
                  <Icon className={`w-8 h-8 ${reward.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{reward.title}</h3>
                  <p className="text-[#94a3b8] text-sm">{reward.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-[#22c55e] font-medium">{reward.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
