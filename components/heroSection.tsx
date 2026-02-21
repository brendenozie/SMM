"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Play, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  Instagram, 
  Twitter, 
  Share2,
  Heart
} from "lucide-react";

export function HeroSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // High-velocity parallax for a "dynamic" feel
  const dashboardY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);
  const floatMetricY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -250]), springConfig);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#020617]"
    >
      {/* --- CINEMATIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0">
        {/* Deep mesh gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(34,211,238,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[150px] rounded-full" />
        
        {/* Subtle scanning line effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* --- LEFT CONTENT: THE VALUE PROP --- */}
          <div className="flex-[1.2] text-center lg:text-left space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-300">
                The AI-Powered Content Engine
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] italic"
            >
              OWN THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                ALGORITHM.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Stop posting into the void. Use AI-driven insights to schedule, generate, and dominate your social presence across every platform.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-white text-slate-950 hover:bg-cyan-400 transition-all group shadow-[0_20px_40px_rgba(255,255,255,0.1)]">
                <span className="font-black text-lg">Start Growing Free</span>
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="ghost" size="lg" className="h-16 px-8 rounded-2xl text-white hover:bg-slate-900 border border-slate-800 transition-all font-bold">
                <Play className="mr-3 w-5 h-5 fill-current text-cyan-400" />
                See How It Works
              </Button>
            </motion.div>

            {/* Platform Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-6 grayscale opacity-50"
            >
              <Instagram className="w-6 h-6" />
              <Twitter className="w-6 h-6" />
              <Share2 className="w-6 h-6" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Supported Platforms</span>
            </motion.div>
          </div>

          {/* --- RIGHT CONTENT: THE VISUAL PROOF --- */}
          <div className="flex-1 relative w-full h-[500px] lg:h-[700px]">
            
            {/* Mock Dashboard Preview */}
            <motion.div 
              style={{ y: dashboardY }}
              className="absolute top-[10%] right-0 w-[95%] h-[80%] rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden z-10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <div className="px-4 py-1 rounded-full bg-slate-800 text-[10px] font-bold text-slate-400 uppercase">Live Analytics</div>
                </div>
                {/* Visual Bar Graph Mockup */}
                <div className="flex items-end gap-2 h-32 pt-10">
                   {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                     <div key={i} className="flex-grow bg-cyan-500/20 rounded-t-lg transition-all hover:bg-cyan-500" style={{ height: `${h}%` }} />
                   ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Metric Card: Engagement */}
            <motion.div 
              style={{ y: floatMetricY }}
              className="absolute top-[5%] -left-10 bg-white/10 backdrop-blur-2xl p-6 rounded-[2rem] shadow-2xl z-30 border border-white/10 flex items-center gap-4"
            >
              <div className="p-4 bg-rose-500 rounded-2xl shadow-lg shadow-rose-500/30">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
              <div>
                <p className="text-xl font-black text-white">+12.4k</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">New Engagement</p>
              </div>
            </motion.div>

            {/* Floating Metric Card: Trending */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -400]) }}
              className="absolute bottom-[20%] -right-5 bg-cyan-500 p-6 rounded-[2rem] shadow-2xl z-30 flex items-center gap-4"
            >
              <TrendingUp className="w-6 h-6 text-slate-950" />
              <p className="text-sm font-black text-slate-950 uppercase tracking-tight italic">Trending in NYC</p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}