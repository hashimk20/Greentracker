import { useState } from 'react';
import { Sprout, Droplet, Zap, Recycle, Car, Trash2, Plus } from 'lucide-react';

const LogAction = () => {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [description, setDescription] = useState('');

  const actionTypes = [
    {
      id: 'plant_tree',
      icon: Sprout,
      title: 'Plant a Tree',
      points: 50,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      id: 'save_water',
      icon: Droplet,
      title: 'Save Water',
      points: 20,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      id: 'reduce_energy',
      icon: Zap,
      title: 'Reduce Energy',
      points: 30,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
    {
      id: 'recycle',
      icon: Recycle,
      title: 'Recycle Waste',
      points: 25,
      color: 'text-teal-400',
      bgColor: 'bg-teal-400/10',
    },
    {
      id: 'public_transport',
      icon: Car,
      title: 'Use Public Transport',
      points: 15,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      id: 'zero_waste',
      icon: Trash2,
      title: 'Zero Waste Day',
      points: 40,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting action:', { selectedAction, description });
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Log an Action</h1>
        <p className="text-[#94a3b8]">Track your eco-friendly activities and earn points</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[#152236] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">Select Action Type</h2>
          <div className="grid grid-cols-3 gap-4">
            {actionTypes.map((action) => {
              const Icon = action.icon;
              const isSelected = selectedAction === action.id;
              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => setSelectedAction(action.id)}
                  className={`p-4 rounded-xl transition-all ${
                    isSelected
                      ? 'bg-[#22c55e] border-2 border-[#22c55e]'
                      : 'bg-[#0d1b2a] border-2 border-transparent hover:border-[#22c55e]/50'
                  }`}
                >
                  <div className={`w-12 h-12 ${isSelected ? 'bg-white/20' : action.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${isSelected ? 'text-white' : action.color}`} />
                  </div>
                  <div className={`font-semibold mb-1 ${isSelected ? 'text-white' : 'text-white'}`}>
                    {action.title}
                  </div>
                  <div className={`text-sm ${isSelected ? 'text-white/80' : 'text-[#94a3b8]'}`}>
                    +{action.points} points
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[#152236] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Action Details</h2>
          <div>
            <label className="block text-sm font-medium text-[#94a3b8] mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us more about your eco-friendly action..."
              rows={4}
              className="w-full px-4 py-3 bg-[#0d1b2a] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#22c55e] transition-colors resize-none"
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={!selectedAction}
            className="flex-1 py-4 bg-[#22c55e] hover:bg-[#16a34a] disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Log Action
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedAction(null);
              setDescription('');
            }}
            className="px-8 py-4 bg-[#152236] hover:bg-[#1a2d45] text-white font-medium rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </form>

      <div className="mt-8 bg-gradient-to-r from-[#22c55e]/10 to-transparent border border-[#22c55e]/20 rounded-xl p-6">
        <h3 className="text-white font-semibold mb-2">Did you know?</h3>
        <p className="text-[#94a3b8] text-sm">
          Each action you log is verified by our community moderators. Once verified, your points will be added to your account and you'll contribute to global eco-statistics!
        </p>
      </div>
    </div>
  );
};

export default LogAction;
