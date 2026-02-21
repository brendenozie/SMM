"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ExternalLink, ArrowRight, ShieldCheck, Zap, TrendingUp, BarChart3, Star } from "lucide-react";

const SUCCESS_STORY = {
  name: "Ibrahim Yusuf",
  role: "Content Architect",
  company: "Zipline Media",
  location: "Rwanda",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800",
  project: "Automated Viral Engine",
  results: "24M Monthly Views",
  quote: "Before SMM, I was guessing. I had the gear, but no strategy. The Viral Alchemy track didn't just teach me tools—it taught me how to engineer attention. Three months in, I scaled my agency from zero to 24M views and secured a partnership with Zipline.",
  tags: ["Viral Alchemy Grad", "0 to 100K Case Study"]
};

export function Testimonials() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Refinement */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-0 rounded-[4rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-2xl shadow-slate-200/50"
        >
          
          {/* --- LEFT: DYNAMIC PORTRAIT --- */}
          <div className="lg:w-[45%] relative min-h-[600px] overflow-hidden group">
            <Image 
              src={SUCCESS_STORY.image}
              alt={SUCCESS_STORY.name}
              fill
              className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Elegant Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-10 left-10 flex flex-wrap gap-2">
              {SUCCESS_STORY.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-white/90 backdrop-blur-md text-slate-900 text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Performance Card Overlay */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-10 right-10 p-8 bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-200">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Peak Traffic Volume</p>
                    <p className="text-3xl font-black text-slate-900 tracking-tighter italic">{SUCCESS_STORY.results}</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                    <div className="flex gap-0.5 text-amber-400 mb-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase">Verified Outcome</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT: EDITORIAL CONTENT --- */}
          <div className="lg:w-[55%] p-12 lg:p-24 bg-white flex flex-col justify-center relative">
            {/* Large Watermark Quote */}
            <Quote className="absolute top-20 right-20 w-48 h-48 text-slate-50 pointer-events-none" />
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-blue-600" />
                  <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Success Story 01 // 2026</span>
                </div>
                
                <div className="space-y-2">
                    <h3 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none uppercase">
                      {SUCCESS_STORY.name.split(' ')[0]} <br />
                      <span className="text-slate-300 italic">{SUCCESS_STORY.name.split(' ')[1]}</span>
                    </h3>
                    <p className="text-xl font-bold text-slate-500">
                      {SUCCESS_STORY.role} at <span className="text-blue-600 underline decoration-2 underline-offset-4">{SUCCESS_STORY.company}</span>
                    </p>
                </div>
              </div>

              <div className="relative">
                <span className="text-6xl text-blue-100 font-serif absolute -top-8 -left-8">&ldquo;</span>
                <p className="text-2xl md:text-3xl text-slate-700 leading-tight font-medium tracking-tight relative z-10">
                  {SUCCESS_STORY.quote}
                </p>
              </div>

              {/* Verified Project Link */}
              <div className="group cursor-pointer p-8 rounded-[3rem] bg-slate-50 border border-slate-100 flex items-center justify-between transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-3xl bg-white shadow-sm flex items-center justify-center text-blue-600 transition-transform group-hover:scale-110">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Deployment Track</p>
                    <p className="text-xl font-black text-slate-900 tracking-tighter uppercase">{SUCCESS_STORY.project}</p>
                  </div>
                </div>
                <div className="h-14 w-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>

              <div className="flex items-center gap-8">
                <button className="flex items-center gap-4 text-[12px] font-black text-slate-900 uppercase tracking-[0.2em] group">
                  EXPLORE THE RESULTS LIBRARY 
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}