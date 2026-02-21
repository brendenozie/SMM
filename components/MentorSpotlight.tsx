"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Instagram, Youtube, Star, Quote, Zap, ArrowUpRight, Plus } from "lucide-react";

const COLLECTIVE = [
  {
    name: "Jordan Vane",
    role: "Viral Systems Lead",
    credentials: "Ex-Meta / 10M+ Follower Growth",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=500",
    philosophy: "The algorithm isn't a mystery; it's a math problem with a creative solution.",
    metrics: ["1.2B Total Reach", "Strategy Architect"],
    accent: "bg-blue-600",
  },
  {
    name: "Sienna Knight",
    role: "Creative Director",
    credentials: "Pioneer in High-Aesthetic Media",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500",
    philosophy: "Authenticity is the new luxury. We don't just create content; we build culture.",
    metrics: ["500+ Campaigns", "Creative Lead"],
    accent: "bg-pink-600",
  },
  {
    name: "Marcus Thorne",
    role: "Growth Engineer",
    credentials: "Founder @ Scale-X Labs",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500",
    philosophy: "Data tells you what happened. Human intuition tells you what happens next.",
    metrics: ["$20M Spend Managed", "ROI Specialist"],
    accent: "bg-emerald-600",
  }
];

export function MentorSpotlight() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Structural Accent Lines */}
      <div className="absolute inset-0 flex justify-between px-6 pointer-events-none opacity-5">
        <div className="w-px h-full bg-slate-900" />
        <div className="w-px h-full bg-slate-900 hidden md:block" />
        <div className="w-px h-full bg-slate-900 hidden md:block" />
        <div className="w-px h-full bg-slate-900" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-900 text-[10px] font-bold uppercase tracking-widest"
            >
              <Zap className="w-3.5 h-3.5 text-blue-600 fill-current" />
              The Strategic Collective
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.8] uppercase">
              THINKERS <br />
              <span className="text-slate-300 italic">& MAKERS.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-slate-500 font-medium leading-relaxed text-lg italic border-l-4 border-blue-600 pl-6">
              &quot;We aren&apos;t just managers. We are the tactical minds behind the internet&apos;s most resilient growth stories.&quot;
            </p>
          </div>
        </div>

        {/* --- COLLECTIVE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {COLLECTIVE.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group relative"
            >
              {/* Image & Card Container */}
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-10 transition-all duration-700 shadow-xl shadow-slate-200 group-hover:shadow-2xl group-hover:shadow-blue-100 group-hover:-translate-y-2">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover transition-all duration-1000 group-hover:scale-105"
                />
                
                {/* Floating Metric Badges (Top) */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 pr-6">
                  {member.metrics.map((metric, i) => (
                    <span key={i} className="bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-sm">
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Bottom Identity Block (Visible on Hover) */}
                <div className="absolute inset-x-4 bottom-4 p-8 rounded-[2.5rem] bg-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out shadow-2xl">
                  <div className="flex justify-between items-start mb-6">
                     <Quote className="w-10 h-10 text-slate-100 fill-current absolute -top-2 -left-2" />
                     <p className="text-base font-bold text-slate-800 leading-snug relative z-10">
                        {member.philosophy}
                     </p>
                  </div>
                  <div className="flex gap-4 border-t border-slate-50 pt-6">
                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
                    <Instagram className="w-5 h-5 text-slate-400 hover:text-pink-600 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>

              {/* Text Info (Static) */}
              <div className="space-y-3 px-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                    {member.name}
                  </h3>
                  <div className={`h-10 w-10 rounded-full ${member.accent} flex items-center justify-center text-white rotate-45 group-hover:rotate-0 transition-transform duration-500`}>
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-black text-blue-600 uppercase tracking-widest">
                    {member.role}
                  </span>
                  <span className="text-sm font-bold text-slate-400">
                    {member.credentials}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PREMIUM CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 p-1.5 rounded-[4rem] bg-slate-50 border border-slate-100"
        >
          <div className="bg-slate-900 rounded-[3.8rem] p-12 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 group transition-all overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />
            
            <div className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left relative z-10">
                <div className="h-24 w-24 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                   <Star className="w-10 h-10 text-blue-400 fill-current" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Direct Partner Access</h4>
                  <p className="text-slate-400 font-medium text-lg max-w-md">Reserve a strategy session with our senior collective members.</p>
                </div>
            </div>

            <button className="w-full lg:w-auto px-16 h-24 rounded-[2.5rem] bg-white text-slate-900 font-black text-xl uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center justify-center gap-3">
              Book a Call <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}