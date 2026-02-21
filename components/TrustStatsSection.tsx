"use client";

import { motion } from "framer-motion";
import { Globe2, Users2, Rocket, Trophy, ArrowUpRight, Zap, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "Viral Reach", value: 12, suffix: "B+", icon: Users2, color: "from-cyan-400 to-blue-500", glow: "shadow-cyan-500/20" },
  { label: "Success Rate", value: 98, suffix: "%", icon: Zap, color: "from-purple-400 to-pink-500", glow: "shadow-purple-500/20" },
  { label: "Creator ROI", value: 450, suffix: "%", icon: Rocket, color: "from-blue-400 to-indigo-500", glow: "shadow-blue-500/20" },
  { label: "Global Nodes", value: 42, suffix: "", icon: Globe2, color: "from-emerald-400 to-teal-500", glow: "shadow-emerald-500/20" },
];

const BRANDS = ["TIKTOK", "META", "NETFLIX", "YOUTUBE", "DISNEY+", "SPOTIFY", "ADOBE", "OPENAI"];

export function TrustStatsSection() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- KINETIC BRAND MARQUEE --- */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 mb-12"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500/60">
              TRUSTED BY THE ARCHITECTS OF ATTENTION
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
          </motion.div>
          
          <div className="relative flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 15, repeat: Infinity }}
              className="flex whitespace-nowrap gap-20 items-center py-4"
            >
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <span 
                  key={i} 
                  className="text-4xl md:text-6xl font-black text-white/5 hover:text-white transition-all duration-500 cursor-default italic tracking-tighter"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
            {/* Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#020617] to-transparent z-10" />
          </div>
        </div>

        {/* --- DYNAMIC DATA WIDGETS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="relative group"
            >
              {/* Card Glow */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem] blur-2xl -z-10 bg-white/5",
              )} />
              
              <div className="h-full p-10 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 group-hover:border-white/20 transition-all duration-500 shadow-2xl">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 text-white group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all duration-500">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-black text-emerald-500 uppercase">Live</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-1">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-6xl font-black text-white tracking-tighter italic"
                    >
                      {stat.value}
                    </motion.span>
                    <span className="text-3xl font-black text-cyan-400">{stat.suffix}</span>
                  </div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>

                {/* Animated Data Line */}
                <div className="mt-10 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, delay: 0.5, ease: "circOut" }}
                    className={cn("h-full bg-gradient-to-r", stat.color)} 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Endorsement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 flex justify-center"
        >
          <div className="inline-flex items-center gap-6 px-10 py-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                   <Star className="w-4 h-4 text-white fill-current" />
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-300">
              Ranked <span className="text-white font-black italic">#1 CREATOR ACCELERATOR</span> by <span className="text-cyan-400">Forbes Tech</span>
            </p>
            <ArrowUpRight className="w-5 h-5 text-slate-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}