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
  ArrowRight,
  Zap,
  ShieldCheck,
  Activity
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
    <footer className="bg-[#020617] text-slate-400 pt-32 pb-12 overflow-hidden relative border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* --- BRAND BLOCK --- */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-white">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                  <Zap className="w-6 h-6 text-slate-950 fill-current" />
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase italic">
                  VIBEFLOW<span className="text-cyan-500">.</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                The world&apos;s first attention-engineering ecosystem. We build the creators who build the future. Join the elite 1% dominant in the viral matrix.
              </p>
            </div>

            <div className="flex gap-3">
              {[Twitter, Github, Linkedin, Youtube].map((Icon, i) => (
                <motion.button 
                  whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.1)" }}
                  key={i} 
                  className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* --- LINKS GRID --- */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(FOOTER_LINKS).slice(0, 3).map(([category, links]) => (
              <div key={category} className="space-y-8">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">{category}</h4>
                <ul className="space-y-5">
                  {links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-tight">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* --- NEWSLETTER / TERMINAL --- */}
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Secure Channel</h4>
              <p className="text-xs text-slate-500 font-medium">Inject your email for weekly alpha leaks and protocol updates.</p>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="PROTOCOL@USER.COM" 
                  className="w-full h-14 bg-white/5 border border-white/10 rounded-2xl px-5 text-[10px] font-black tracking-[0.2em] text-white focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all placeholder:text-slate-700"
                />
                <button className="absolute right-2 top-2 h-10 w-10 bg-white rounded-xl flex items-center justify-center hover:bg-cyan-400 transition-colors group/btn">
                  <ArrowRight className="w-5 h-5 text-slate-950 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span>Global Hub: Nairobi / Remote</span>
              </div>
              <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>ACCESS@VIBEFLOW.IO</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM STATUS BAR --- */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
             <div className="flex items-center gap-2.5">
                <Activity className="w-4 h-4 text-cyan-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500/80">Mainnet: Live v4.0.2</span>
             </div>
             <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-slate-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">Encrypted Endpoint</span>
             </div>
             <p className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">
               © {currentYear} VIBEFLOW CREATIVE LABS.
             </p>
          </div>
          
          <div className="flex items-center gap-6 group cursor-default">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-700 group-hover:text-slate-500 transition-colors">Core Engine by</span>
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-slate-700 group-hover:text-cyan-500 transition-colors" />
              <span className="text-sm font-black text-slate-600 group-hover:text-white transition-colors italic tracking-tighter">SalesmanPro</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}