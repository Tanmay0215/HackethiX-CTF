import { useState, useEffect, useRef } from 'react';

const TerminalWindow = () => {
  const [lines, setLines] = useState([
    "Initialize system kernel...",
    "Loading modules....... [OK]",
    "Bypassing firewall.... [SUCCESS]",
    "Accessing mainframe... [GRANTED]",
  ]);
  const [activeLine, setActiveLine] = useState("Scanning for vulnerabilities...");
  const scrollRef = useRef(null);

  useEffect(() => {
    const sequence = [
      { text: "Connecting to secure server 192.168.X.X...", delay: 800 },
      { text: "Handshake established.", delay: 1500 },
      { text: "Downloading encrypted payload...", delay: 2200 },
      { text: "Decryption key found: ********", delay: 3000 },
      { text: "Root access requested...", delay: 3800 },
      { text: "Verifying user credentials...", delay: 4500 },
      { text: "Access granted. Welcome, Admin.", delay: 5200 },
      { text: "Initializing CTF environment...", delay: 6000 },
      { text: "Ready to deploy.", delay: 6800 },
    ];

    let timeouts = [];

    sequence.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, activeLine]);
        setActiveLine(text);
      }, delay);
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, activeLine]);

  return (
    <div className="w-full max-w-4xl mx-auto font-mono text-sm rounded-lg overflow-hidden glass-panel border border-green-500/30 shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-gray-900/90 p-2 flex items-center gap-2 border-b border-gray-700">
        <div className="flex gap-1.5 ml-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 text-center text-gray-400 text-xs">
          root@hackethix:~
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={scrollRef}
        className="h-64 md:h-80 bg-black/80 p-4 overflow-y-auto font-mono text-sm"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1 text-green-500/80">
            <span className="text-blue-400 mr-2">root@hackethix:~$</span>
            {line}
          </div>
        ))}
        <div className="text-green-400">
          <span className="text-blue-400 mr-2">root@hackethix:~$</span>
          {activeLine}
          <span className="inline-block w-2.5 h-4 ml-1 bg-green-500 animate-pulse align-middle"></span>
        </div>
      </div>
    </div>
  );
};

export default TerminalWindow;
