"use client";

import { motion } from "framer-motion";
import { Globe2, Users2, Rocket, ArrowUpRight, Zap, Star, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  { label: "Viral Reach", value: 12, suffix: "B+", icon: Users2, color: "bg-blue-600", lightBg: "bg-blue-50" },
  { label: "Success Rate", value: 98, suffix: "%", icon: Zap, color: "bg-amber-500", lightBg: "bg-amber-50" },
  { label: "Creator ROI", value: 450, suffix: "%", icon: Rocket, color: "bg-purple-600", lightBg: "bg-purple-50" },
  { label: "Global Nodes", value: 42, suffix: "", icon: Globe2, color: "bg-emerald-600", lightBg: "bg-emerald-50" },
];

const BRANDS = ["TIKTOK", "META", "NETFLIX", "YOUTUBE", "DISNEY+", "SPOTIFY", "ADOBE", "OPENAI"];

export function TrustStatsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Structural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER & MARQUEE --- */}
        <div className="text-center mb-24 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <ShieldCheck className="w-3 h-3 text-blue-400" />
            The Industry Standard
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase">
            TRUSTED BY THE <br />
            <span className="text-slate-300 italic">NEW ELITE.</span>
          </h2>

          <div className="relative mt-16 flex overflow-hidden border-y border-slate-100 py-10 bg-white/50 backdrop-blur-sm">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 25, repeat: Infinity }}
              className="flex whitespace-nowrap gap-24 items-center"
            >
              {[...BRANDS, ...BRANDS].map((brand, i) => (
                <span 
                  key={i} 
                  className="text-4xl md:text-5xl font-black text-slate-200 hover:text-blue-600 transition-colors duration-500 cursor-default tracking-tighter"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
            {/* Edge Masks */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>

        {/* --- DATA WIDGETS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="h-full p-1 w-full bg-slate-100 rounded-[2.5rem] transition-all duration-500 group-hover:bg-slate-200">
                <div className="h-full p-8 rounded-[2.3rem] bg-white border border-slate-100 flex flex-col justify-between overflow-hidden relative shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  
                  {/* Icon & Label */}
                  <div className="flex justify-between items-start mb-12">
                    <div className={cn("p-4 rounded-2xl text-white shadow-lg transition-transform duration-500 group-hover:scale-110", stat.color)}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                      <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">Verified</span>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="relative z-10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-7xl font-black text-slate-900 tracking-tighter leading-none">
                        {stat.value}
                      </span>
                      <span className={cn("text-3xl font-black italic uppercase", stat.color.replace('bg-', 'text-'))}>
                        {stat.suffix}
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>

                  {/* Background Decor (Hover Only) */}
                  <div className={cn("absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700", stat.color)} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- SOCIAL PROOF ACCELERATOR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex justify-center"
        >
          <div className="group relative flex flex-col md:flex-row items-center gap-8 px-12 py-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden transition-transform group-hover:translate-x-1"
                  style={{ zIndex: 5 - i }}
                >
                  <div className="w-full h-full bg-gradient-to-tr from-slate-200 to-slate-400 flex items-center justify-center">
                    <Star className="w-4 h-4 text-white fill-current" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-slate-600 leading-tight">
                Ranked <span className="text-slate-900 font-black italic">#1 CREATOR GROWTH ENGINE</span>
              </p>
              <p className="text-sm font-medium text-slate-400">Featured in Forbes, TechCrunch & Wired</p>
            </div>

            <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}