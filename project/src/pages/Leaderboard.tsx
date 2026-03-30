import { Trophy, Medal, Award } from 'lucide-react';

const Leaderboard = () => {
  const topUsers = [
    { rank: 1, name: 'Alex Johnson', points: 2450, badge: 'ECO MASTER', avatar: 'A', color: 'bg-yellow-500' },
    { rank: 2, name: 'Sarah Williams', points: 2150, badge: 'ECO CHAMPION', avatar: 'S', color: 'bg-gray-400' },
    { rank: 3, name: 'Mike Chen', points: 1890, badge: 'ECO WARRIOR', avatar: 'M', color: 'bg-orange-600' },
    { rank: 4, name: 'Emma Davis', points: 1620, badge: 'ECO WARRIOR', avatar: 'E', color: 'bg-[#22c55e]' },
    { rank: 5, name: 'HASHIM', points: 0, badge: 'ECO NEWBIE', avatar: 'U', color: 'bg-[#22c55e]', isCurrentUser: true },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-400" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-orange-600" />;
    return <span className="text-[#94a3b8] font-bold text-lg">#{rank}</span>;
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
        <p className="text-[#94a3b8]">Compete with eco-warriors around the globe</p>
      </div>

      <div className="bg-[#152236] rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Top Contributors</h2>
          <div className="px-4 py-2 bg-[#0d1b2a] rounded-lg text-[#94a3b8] text-sm">
            Updated 5 mins ago
          </div>
        </div>

        <div className="space-y-3">
          {topUsers.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-4 p-4 rounded-xl transition-colors ${
                user.isCurrentUser
                  ? 'bg-[#22c55e]/10 border-2 border-[#22c55e]'
                  : 'bg-[#0d1b2a] hover:bg-[#111f2e]'
              }`}
            >
              <div className="w-12 flex items-center justify-center">
                {getRankIcon(user.rank)}
              </div>
              <div className={`w-12 h-12 ${user.color} rounded-full flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">{user.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{user.name}</span>
                  {user.isCurrentUser && (
                    <span className="text-xs px-2 py-0.5 bg-[#22c55e] text-white rounded-full">
                      YOU
                    </span>
                  )}
                </div>
                <div className="text-sm text-[#94a3b8]">{user.badge}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#22c55e]">{user.points.toLocaleString()}</div>
                <div className="text-xs text-[#94a3b8]">points</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-[#22c55e]/10 to-transparent border border-[#22c55e]/20 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-2">Climb the Ranks!</h3>
        <p className="text-[#94a3b8] text-sm mb-4">
          Complete eco-friendly actions to earn points and move up the leaderboard. The more you contribute, the higher you climb!
        </p>
        <button className="px-6 py-2 bg-[#22c55e] hover:bg-[#16a34a] text-white font-medium rounded-lg transition-colors">
          View All Rankings
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
