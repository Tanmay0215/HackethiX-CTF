function Content() {
  const Card = ({ title, children, icon }) => (
    <div className="glass-panel p-6 rounded-xl hover:border-green-500/50 transition-colors duration-300 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-xl font-bold text-white font-mono">{title}</h3>
      </div>
      <div className="text-gray-400 leading-relaxed text-sm flex-grow">
        {children}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-20 z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Mission Briefing</h2>
        <div className="h-1 w-20 bg-green-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="md:col-span-2">
          <div className="glass p-8 rounded-2xl border-l-4 border-l-green-500">
            <h3 className="text-2xl font-bold text-white mb-4">What is CTF?</h3>
            <p className="text-gray-300 text-lg">
              Capture The Flag (CTF) is a cybersecurity competition where
              participants solve challenges to find hidden flags. These challenges
              test a wide range of skills in areas such as cryptography, reverse
              engineering, web security, and forensics.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <Card title="Cryptography" icon="🔐">
          Challenges that involve encrypting or decrypting messages to find the flag. Decode ciphers, break keys, and uncover secrets.
        </Card>
        <Card title="Reverse Engineering" icon="⚙️">
          Analyzing binary files to understand their functionality and extract hidden information from compiled code.
        </Card>
        <Card title="Web Security" icon="🌐">
          Exploiting vulnerabilities in web applications like SQLi, XSS, and IDOR to retrieve hidden flags from servers.
        </Card>
        <Card title="Forensics" icon="🔍">
          Analyzing data from disk images, memory dumps, or network traffic (pcap) to find digital evidence and flags.
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
           <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
             <span className="text-green-500 mr-2">&gt;</span> Essential Tools
           </h3>
           <ul className="space-y-4">
             {[
               { name: 'Wireshark', desc: 'Network protocol analyzer for traffic inspection.' },
               { name: 'Ghidra', desc: 'NSA developed reverse engineering suite.' },
               { name: 'Burp Suite', desc: 'Platform for web application security testing.' },
               { name: 'John the Ripper', desc: 'Fast password cracker for various formats.' }
             ].map((tool, i) => (
               <li key={i} className="flex items-start bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:border-green-500/30 transition-colors">
                 <span className="text-green-500 font-bold mr-2">•</span>
                 <div>
                   <strong className="text-gray-200 block">{tool.name}</strong>
                   <span className="text-gray-500 text-sm">{tool.desc}</span>
                 </div>
               </li>
             ))}
           </ul>
        </div>
        
        <div>
           <h3 className="text-2xl font-bold text-white mb-6 font-mono flex items-center">
             <span className="text-green-500 mr-2">&gt;</span> Strategy Guide
           </h3>
           <div className="glass-panel p-6 rounded-xl space-y-6">
             {[
               { title: 'Read Carefully', text: 'Understand the constraints and objectives.' },
               { title: 'Document Everything', text: 'Keep notes of failed attempts and findings.' },
               { title: 'Collaborate', text: 'Teamwork leverages diverse skill sets.' },
               { title: 'Practice', text: 'Regularly solve challenges on CTFtime.' }
             ].map((item, i) => (
               <div key={i} className="relative pl-6 border-l border-gray-700 hover:border-green-500 transition-colors">
                 <h4 className="text-white font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                 <p className="text-gray-400 text-sm mt-1">{item.text}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
      
      <div className="mt-20 text-center">
         <h3 className="text-white text-xl mb-6">Ready to start?</h3>
         <div className="flex justify-center gap-4 flex-wrap">
           {['CTFtime', 'HackTheBox', 'TryHackMe'].map(platform => (
             <span key={platform} className="px-4 py-2 rounded-full border border-gray-700 text-gray-400 text-sm font-mono hover:text-green-400 hover:border-green-500 cursor-default transition-all">
               {platform}
             </span>
           ))}
         </div>
      </div>
    </div>
  );
}

export default Content;
