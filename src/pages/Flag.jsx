import MatrixBackground from '../components/MatrixBackground';

const Flag = () => {
  const api = {
    title: "Event Details",
    date: "2024-10-06",
    location: "Virtual",
    participants: [
      {
        name: "Alice",
        role: "Contestant",
      },
      {
        name: "Bob",
        role: "Judge",
      },
    ],
    metadata: {
      description:
        "This is a CTF challenge event for testing cybersecurity skills.",
      j$0n_h34d3r: "ctf{h1dd3n_1n_pl41n_s1ght}",
    },
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center relative p-4">
      <MatrixBackground />
      
      <div className="max-w-2xl w-full">
         <div className="mb-4 flex items-center justify-between">
           <div className="inline-block px-3 py-1 bg-red-500/20 border border-red-500/50 text-red-500 uppercase text-xs font-bold tracking-widest animate-pulse">
             Intercepted Data
           </div>
           <div className="text-gray-500 font-mono text-xs">
             packet_id: 0x9A4F
           </div>
         </div>
         
         <div className="glass-panel p-6 rounded-lg font-mono text-sm relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[loading_2s_ease-in-out_infinite]"></div>
            <pre className="text-green-400 overflow-x-auto">
              {JSON.stringify(api, null, 2)}
            </pre>
         </div>
      </div>
    </div>
  );
};

export default Flag;
