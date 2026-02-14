import React, { useState, useEffect } from 'react';
import Head from 'next/head';

// --- SYSTEM LOGS DATA ---
const SYSTEM_LOGS = [
  "> Initializing Neural Core v2.1...",
  "> Bypass firewall: SUCCESS",
  "> Connecting to Binance API (0ms)...",
  "> Analyzing BTC/USDT Sentiment...",
  "> Loading Whale Wallet Tracker...",
  "> Optimizing execution path...",
  "> Alpha signal detected.",
  "> Encrypting user data...",
  "> System readiness: 98%"
];

export default function NeuralTradeComingSoon() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [text, setText] = useState('');
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<string[]>([SYSTEM_LOGS[0]]);
  
  // Typewriter Data
  const fullText = "Institutional-grade strategies. Retail access. 0ms latency.";

  useEffect(() => {
    setMounted(true);

    // 1. Typewriter Effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    // 2. System Logs Animation
    let logIndex = 1;
    const logInterval = setInterval(() => {
      if (logIndex < SYSTEM_LOGS.length) {
        setLogs(prev => [...prev.slice(-4), SYSTEM_LOGS[logIndex]]); 
        logIndex = (logIndex + 1) % SYSTEM_LOGS.length; 
      }
    }, 1500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(logInterval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log('Email captured:', email);
    }
  };

  if (!mounted) return null;

  return (
    // min-h-screen ve py-10 ekleyerek mobilde dikey taşmaları önledik (scroll açılır)
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00ff88] selection:text-black relative flex flex-col justify-between overflow-x-hidden">
      <Head>
        <title>NeuralTrade - The Market Has Awakened</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </Head>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Grid */}
        <div 
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at center, black 0%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 80%)"
          }}
        />
        {/* Animated Glows */}
        <div className="absolute top-[-10%] left-[20%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#00ff88]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#00F0FF]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse-slow" />
      </div>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 py-10 text-center w-full max-w-7xl mx-auto">
        
        {/* --- TOP BADGE --- */}
        <div className="animate-fade-in-down mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff88]"></span>
          </span>
          <span className="text-[10px] font-mono text-[#00ff88] tracking-[0.2em] uppercase">
            System Online
          </span>
        </div>

        {/* --- MAIN TITLE --- */}
        {/* Mobilde text-5xl, Masaüstünde text-8xl */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight font-['Space_Grotesk'] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 group relative">
          NeuralTrade
          <span className="absolute inset-0 text-white opacity-0 group-hover:opacity-100 animate-pulse mix-blend-difference pointer-events-none translate-x-[2px]">NeuralTrade</span>
        </h1>
        
        {/* --- SUBTITLE --- */}
        <div className="h-12 md:h-8 mb-6 w-full max-w-lg">
          <p className="text-sm md:text-xl text-gray-400 font-mono leading-relaxed">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              {text}
            </span>
            <span className="inline-block w-2 h-4 md:h-5 ml-1 bg-[#00ff88] animate-pulse align-middle" />
          </p>
        </div>

        {/* --- CENTER VISUAL: AI CORE --- */}
        {/* Mobilde w-40, Masaüstünde w-64 */}
        <div className="relative w-40 h-40 md:w-64 md:h-64 my-6 flex items-center justify-center shrink-0">
            {/* Outer Rings */}
            <div className="absolute inset-0 border border-[#00ff88]/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 border border-[#00F0FF]/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Core Glow */}
            <div className="absolute w-24 h-24 md:w-32 md:h-32 bg-[#00ff88]/10 rounded-full blur-2xl animate-pulse" />
            
            {/* Icon */}
            <span className="material-symbols-outlined text-5xl md:text-7xl text-[#00ff88] relative z-10 drop-shadow-[0_0_15px_rgba(0,255,136,0.8)]">
              
            </span>

            {/* Floating Decor - Mobilde gizleyebiliriz veya küçük gösterebiliriz */}
            <div className="hidden md:block absolute -top-4 right-0 font-mono text-[9px] text-[#00ff88]/50 bg-black/60 px-2 py-0.5 rounded border border-[#00ff88]/10 backdrop-blur">
              {`> status: awake`}
            </div>
            <div className="hidden md:block absolute -bottom-4 left-0 font-mono text-[9px] text-[#00F0FF]/50 bg-black/60 px-2 py-0.5 rounded border border-[#00F0FF]/10 backdrop-blur">
              {`> latency: 0.04ms`}
            </div>
        </div>

        {/* --- EMAIL FORM --- */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4 relative group z-20 mt-2">
            <div className="relative">
              <input 
                type="email" 
                required 
                placeholder="Enter email to request access..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#00ff88] focus:ring-1 focus:ring-[#00ff88] transition-all font-mono text-center md:text-left text-sm md:text-base"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-[#00ff88] border border-[#00ff88]/30 px-2 py-0.5 rounded bg-[#00ff88]/5 hidden md:block">
                INVITE ONLY
              </div>
            </div>
            
            <button 
              type="submit" 
              className="w-full py-4 rounded-lg bg-[#00ff88] hover:bg-[#33ff99] text-black font-bold text-base md:text-lg tracking-wide uppercase transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_35px_rgba(0,255,136,0.5)] flex items-center justify-center gap-2 group"
            >
              <span>Initialize Access</span>
              <span className="material-symbols-outlined text-xl font-bold group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>
        ) : (
          <div className="p-6 border border-[#00ff88]/30 bg-[#00ff88]/5 rounded-lg backdrop-blur-md animate-fade-in w-full max-w-md">
            <div className="flex items-center justify-center gap-2 text-[#00ff88] text-lg md:text-xl font-bold font-mono mb-2">
              <span className="material-symbols-outlined">check_circle</span>
              <span>ACCESS REQUESTED</span>
            </div>
            <p className="text-gray-400 text-xs md:text-sm">Priority queue position: #842. Stand by for encrypted transmission.</p>
          </div>
        )}

        {/* --- MARKET TICKER --- */}
        <div className="mt-12 w-full max-w-3xl border-t border-white/5 pt-6 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
            
            <div className="flex justify-center gap-8 md:gap-12 animate-scroll whitespace-nowrap text-[10px] md:text-xs font-mono text-gray-500">
                <span className="flex items-center gap-2">BTC <span className="text-[#00ff88]">▲ $98,420</span></span>
                <span className="flex items-center gap-2">ETH <span className="text-[#00ff88]">▲ $3,850</span></span>
                <span className="flex items-center gap-2">SOL <span className="text-[#00ff88]">▲ $142.50</span></span>
                <span className="flex items-center gap-2">AI_INDEX <span className="text-[#00F0FF]">▲ 12.4%</span></span>
            </div>
        </div>
      </main>

      {/* --- LIVE CONSOLE (Hidden on Mobile) --- */}
      <div className="hidden md:block absolute bottom-6 left-6 text-left z-20 opacity-60 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 mb-2 text-[10px] text-gray-500 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full animate-pulse"></span>
          System Logs
        </div>
        <div className="w-64 h-32 overflow-hidden relative mask-gradient-b">
           {logs.map((log, i) => (
             <div key={i} className="text-[10px] font-mono text-[#00ff88]/80 mb-1 animate-fade-in-up">
               {log}
             </div>
           ))}
           <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>
      </div>

      <footer className="w-full text-center py-6 relative z-10">
        <p className="text-[10px] text-gray-600 font-mono">
          © 2026 NeuralTrade Inc.<br className="md:hidden"/> Latent Space Division
        </p>
      </footer>
      
      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out forwards;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite ease-in-out;
        }
        /* Mask Gradient Helper for System Logs */
        .mask-gradient-b {
           mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
           -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }
      `}</style>
    </div>
  );

}
