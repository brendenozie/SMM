"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Mail, 
  MapPin, 
  Cpu,
  ArrowUpRight,
  Zap,
  ShieldCheck,
  Activity,
  Globe,
  Command
} from "lucide-react";

const FOOTER_LINKS = {
  Curriculum: ["Viral Alchemy", "Neural Workflows", "The Attention Engine", "Creator Alpha"],
  Infrastructure: ["Student Portal", "Asset Library", "Cloud Compute", "War Room"],
  Organization: ["Our Mission", "Global Nodes", "Brand Kit", "Status"],
  Compliance: ["Data Privacy", "Terms of Usage", "Community Code", "Refund Policy"]
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-32 pb-12 overflow-hidden relative">
      {/* Decorative Branding Watermark */}
      <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 pointer-events-none opacity-[0.03] select-none">
        <h1 className="text-[20rem] font-black italic tracking-tighter">S</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* --- BRAND BLOCK --- */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-slate-900">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-200">
                  <Zap className="w-6 h-6 text-white fill-current" />
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase italic">
                  SMM<span className="text-blue-600">.</span>
                </span>
              </div>
              <p className="text-slate-500 text-lg leading-snug max-w-sm font-medium">
                The world&apos;s first attention-engineering ecosystem. Dominating the 24/7 viral loop through neural infrastructure.
              </p>
            </div>

            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
                <motion.button 
                  whileHover={{ y: -5, backgroundColor: "#f1f5f9" }}
                  key={i} 
                  className="h-12 w-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* --- LINKS GRID --- */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12 pt-4">
            {Object.entries(FOOTER_LINKS).slice(0, 3).map(([category, links]) => (
              <div key={category} className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">{category}</h4>
                <ul className="space-y-4">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-tight flex items-center group">
                        {link}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- NEWSLETTER BLOCK --- */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 space-y-6">
              <div className="space-y-2">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Alpha Intake</h4>
                <p className="text-sm text-slate-900 font-black italic tracking-tight uppercase">Weekly Signal Leaks</p>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="name@domain.com" 
                  className="w-full h-14 bg-white border border-slate-200 rounded-2xl px-5 text-xs font-bold text-slate-900 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all placeholder:text-slate-300 shadow-sm"
                />
                <button className="absolute right-2 top-2 h-10 px-4 bg-slate-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  Join
                </button>
              </div>

              <div className="flex items-center gap-3 text-[9px] font-black text-slate-400 uppercase tracking-widest">
                <Globe className="w-3.5 h-3.5" />
                <span>Nairobi Node / Remote</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SYSTEM STATUS BAR --- */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
             <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">Mainnet Live 4.0</span>
             </div>
             <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slate-300" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 italic">v2026 Secured</span>
             </div>
             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
               © {currentYear} SMM.IO
             </p>
          </div>
          
          <div className="flex items-center gap-6 group">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Engineered by</span>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl">
              <Command className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-black text-white italic tracking-tighter">SMM</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}