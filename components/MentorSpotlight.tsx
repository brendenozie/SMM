"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Instagram, Youtube, Star, Quote, Zap, ArrowUpRight } from "lucide-react";

const ARCHITECTS = [
  {
    name: "Jordan Vane",
    role: "Viral Systems Lead",
    credentials: "Built 10M+ Follower Brands",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=500",
    philosophy: "The algorithm isn't a mystery; it's a math problem with a creative solution.",
    metrics: ["1.2B Total Reach", "Ex-Meta"],
  },
  {
    name: "Sienna Knight",
    role: "AI Creative Director",
    credentials: "Pioneer in Generative Media",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
    philosophy: "AI won't replace creators, but creators using AI will replace everyone else.",
    metrics: ["500+ AI Campaigns", "Brand Architect"],
  },
  {
    name: "Marcus Thorne",
    role: "Growth Engineer",
    credentials: "Founder @ Scale-X",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
    philosophy: "Data tells you what happened. VibeFlow tells you what's going to happen next.",
    metrics: ["$20M Ad-Spend Managed", "Growth Guru"],
  }
];

export function MentorSpotlight() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-10">
          <div className="max-w-2xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Zap className="w-3.5 h-3.5 text-cyan-400 fill-current" />
              The Architect Elite
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter italic leading-[0.8] uppercase">
              MASTER THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">ATTENTION GAME.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm font-medium leading-relaxed border-l-2 border-cyan-500/30 pl-6 mb-2">
            Our architects aren&apos;t theorists. They are the tactical minds behind the internet&apos;s biggest growth stories.
          </p>
        </div>

        {/* --- ARCHITECT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ARCHITECTS.map((architect, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
              className="group relative"
            >
              {/* Image & Main Card Container */}
              <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden mb-8 border border-slate-800 transition-all duration-700 group-hover:border-cyan-500/50">
                <Image 
                  src={architect.image} 
                  alt={architect.name} 
                  fill 
                  className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Dark Overlay with Impact Metrics */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
                
                {/* Floating Metric Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  {architect.metrics.map((metric, i) => (
                    <span key={i} className="bg-slate-950/80 backdrop-blur-md border border-white/10 text-white px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest shadow-2xl">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Hover Glass Quote Overlay */}
                <div className="absolute inset-x-6 bottom-6 p-8 rounded-[3rem] bg-white text-slate-950 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-[0_30px_60px_-15px_rgba(255,255,255,0.3)]">
                  <Quote className="w-8 h-8 text-cyan-500 mb-4 fill-current opacity-20" />
                  <p className="text-sm font-black italic leading-tight mb-6">
                    &quot;{architect.philosophy}&quot;
                  </p>
                  <div className="flex gap-3">
                    <button className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-cyan-500 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                      <Youtube className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Identity Info */}
              <div className="space-y-2 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black text-white italic tracking-tighter uppercase group-hover:text-cyan-400 transition-colors">
                    {architect.name}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-slate-700 group-hover:text-white transition-all" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em]">
                    {architect.role}
                  </span>
                  <span className="text-sm font-bold text-slate-500">
                    {architect.credentials}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- STRATEGY CALL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-12 rounded-[4rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-12 group hover:border-cyan-500/30 transition-all"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="relative h-24 w-24">
               <div className="absolute inset-0 bg-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse" />
               <div className="relative h-24 w-24 rounded-full bg-cyan-500/10 border-2 border-cyan-500/20 flex items-center justify-center">
                  <Star className="w-10 h-10 text-cyan-400 fill-current" />
               </div>
            </div>
            <div>
              <p className="text-3xl font-black text-white uppercase italic tracking-tighter">Inner Circle Access</p>
              <p className="text-slate-500 font-medium text-lg">Join monthly group coaching calls with the Architect Elite.</p>
            </div>
          </div>
          <button className="w-full lg:w-auto px-12 h-20 rounded-[2rem] bg-white text-slate-950 font-black text-xl uppercase tracking-tighter italic hover:bg-cyan-400 hover:scale-105 transition-all shadow-2xl">
            Secure Your Spot
          </button>
        </motion.div>
      </div>
    </section>
  );
}