"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ExternalLink, ArrowRight, ShieldCheck, Zap, TrendingUp, BarChart3 } from "lucide-react";

const SUCCESS_STORY = {
  name: "Ibrahim Yusuf",
  role: "Content Architect",
  company: "Zipline Media",
  location: "Rwanda",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800",
  project: "Automated Viral Engine",
  results: "24M Monthly Views",
  quote: "Before VibeFlow, I was guessing. I had the gear, but no strategy. The Viral Alchemy track didn't just teach me tools—it taught me how to engineer attention. Three months in, I scaled my agency from zero to 24M views and secured a partnership with Zipline.",
  tags: ["Viral Alchemy Grad", "0 to 100K Case Study"]
};

export function Testimonials() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-3xl rounded-[4rem] border border-white/5 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch"
        >
          
          {/* --- IMAGE & PERFORMANCE METRIC --- */}
          <div className="lg:w-1/2 relative min-h-[500px] overflow-hidden group">
            <Image 
              src={SUCCESS_STORY.image}
              alt={SUCCESS_STORY.name}
              fill
              className="object-cover object-top opacity-80 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            
            {/* Status Badges */}
            <div className="absolute top-8 left-8 flex flex-col gap-3">
              {SUCCESS_STORY.tags.map((tag, i) => (
                <motion.span 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  key={i} 
                  className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-white/10 shadow-2xl"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Float Metric Badge */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute bottom-8 left-8 right-8 p-6 bg-cyan-500 rounded-[2.5rem] flex items-center justify-between shadow-[0_20px_50px_rgba(34,211,238,0.3)]"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-950/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-slate-950" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-950/60 uppercase tracking-widest">Performance Peak</p>
                  <p className="text-2xl font-black text-slate-950 tracking-tighter italic">{SUCCESS_STORY.results}</p>
                </div>
              </div>
              <BarChart3 className="w-8 h-8 text-slate-950/20" />
            </motion.div>
          </div>

          {/* --- TESTIMONIAL CONTENT --- */}
          <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center relative bg-gradient-to-br from-slate-900/80 to-slate-950/80">
            <Quote className="absolute top-12 right-12 w-32 h-32 text-cyan-400/5 pointer-events-none" />
            
            <div className="space-y-10 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em]">
                  <Zap className="w-4 h-4 fill-current" />
                  Proof of Concept
                </div>
                <h3 className="text-5xl font-black text-white tracking-tighter italic uppercase">
                  {SUCCESS_STORY.name}
                </h3>
                <p className="text-slate-400 font-bold text-xl">
                  {SUCCESS_STORY.role} <span className="text-white/20 px-2">/</span> <span className="text-cyan-500 italic">@{SUCCESS_STORY.company}</span>
                </p>
              </div>

              <p className="text-2xl text-slate-200 leading-snug font-medium italic tracking-tight">
                &quot;{SUCCESS_STORY.quote}&quot;
              </p>

              {/* PROJECT PREVIEW CARD */}
              <div className="p-8 rounded-[3rem] bg-white/5 border border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-500">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-[1.5rem] bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Verified Infrastructure</p>
                    <p className="text-lg font-black text-white italic tracking-tighter uppercase">{SUCCESS_STORY.project}</p>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center text-white group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              <div className="pt-6">
                 <button className="flex items-center gap-3 text-[11px] font-black text-white uppercase tracking-[0.2em] hover:text-cyan-400 transition-colors group">
                    The Results Library 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                 </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}