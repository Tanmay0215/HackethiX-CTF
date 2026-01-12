const LeaderboardComp = ({ data }) => {
  const getRankStyle = (index) => {
    switch(index) {
      case 0: return 'text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]';
      case 1: return 'text-gray-300 drop-shadow-[0_0_10px_rgba(209,213,219,0.5)]';
      case 2: return 'text-amber-600 drop-shadow-[0_0_10px_rgba(217,119,6,0.5)]';
      default: return 'text-gray-400';
    }
  };

  const getRankIcon = (index) => {
    switch(index) {
      case 0: return '🥇';
      case 1: return '🥈';
      case 2: return '🥉';
      default: return `#${index + 1}`;
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 z-10 relative">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-white mb-2 tracking-tighter uppercase relative inline-block">
          <span className="absolute -inset-1 blur-lg bg-green-500/30 rounded-lg"></span>
          <span className="relative">Top Hackers</span>
        </h1>
        <p className="text-green-500 font-mono mt-2">Live Rankings // Global</p>
      </div>

      <div className="glass-panel overflow-hidden rounded-2xl">
        <table className="min-w-full">
          <thead>
            <tr className="bg-green-500/10 border-b border-green-500/20">
              <th className="px-6 py-5 text-left text-xs font-bold text-green-400 uppercase tracking-widest font-mono">
                Rank
              </th>
              <th className="px-6 py-5 text-left text-xs font-bold text-green-400 uppercase tracking-widest font-mono">
                Operative
              </th>
              <th className="px-6 py-5 text-right text-xs font-bold text-green-400 uppercase tracking-widest font-mono">
                Score
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {data.map((user, index) => (
              <tr 
                key={user.id} 
                className="hover:bg-white/5 transition-colors duration-300 group"
              >
                <td className="px-6 py-5 whitespace-nowrap font-bold text-xl font-mono">
                  <span className={`${getRankStyle(index)}`}>
                    {getRankIcon(index)}
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap">
                  <div className="text-white font-bold group-hover:text-green-400 transition-colors">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right font-mono text-gray-300">
                  {user.points} <span className="text-green-600 text-xs">PTS</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-center text-xs text-gray-500 font-mono animate-pulse">
        Updating in real-time...
      </div>
    </div>
  );
};

export default LeaderboardComp;
