"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Play, 
  Zap, 
  TrendingUp, 
  Instagram, 
  Twitter, 
  Share2,
  Heart,
  MousePointer2,
  Users
} from "lucide-react";

export function HeroSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Smooth parallax for light mode elements
  const dashboardY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -120]), springConfig);
  const floatMetricY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-white"
    >
      {/* --- SOFT GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute top-[20%] -right-[5%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[100px] opacity-40" />
        
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1.5px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* --- LEFT CONTENT: THE GROWTH PITCH --- */}
          <div className="flex-[1.1] text-center lg:text-left space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
            >
              <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-700">
                Accepting New Clients for 2024
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.9]"
            >
              YOUR BRAND, <br />
              <span className="text-blue-600">UNMUTED.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              I help brands stop shouting and start connecting. Expert social media management that turns casual scrollers into loyal community members.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all group shadow-xl shadow-blue-200">
                <span className="font-bold text-lg">Book Growth Strategy</span>
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button variant="outline" size="lg" className="h-16 px-8 rounded-2xl text-slate-700 border-slate-200 hover:bg-slate-50 transition-all font-bold">
                <Play className="mr-3 w-5 h-5 fill-current text-blue-600" />
                View Case Studies
              </Button>
            </motion.div>

            {/* Social Proof Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-100"
            >
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">
                Trusted by 50+ Global Brands
              </p>
            </motion.div>
          </div>

          {/* --- RIGHT CONTENT: THE VISUAL PROOF --- */}
          <div className="flex-1 relative w-full h-[550px] lg:h-[750px]">
            
            {/* Main Phone/Dashboard Preview */}
            <motion.div 
              style={{ y: dashboardY }}
              className="absolute top-[5%] right-0 w-[90%] h-[85%] rounded-[3.5rem] bg-slate-50 border-[8px] border-white shadow-[0_32px_64px_rgba(0,0,0,0.1)] overflow-hidden z-10"
            >
              <div className="p-10 space-y-10">
                <div className="flex justify-between items-center">
                  <h3 className="font-black text-slate-900 tracking-tight text-xl uppercase italic">Impact Overview</h3>
                  <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="space-y-4">
                   {[80, 45, 95].map((w, i) => (
                     <div key={i} className="space-y-2">
                       <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                         <span>Metric {i+1}</span>
                         <span>+{w}%</span>
                       </div>
                       <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${w}%` }}
                           transition={{ delay: 1, duration: 1.5 }}
                           className="h-full bg-blue-600 rounded-full" 
                         />
                       </div>
                     </div>
                   ))}
                </div>

                {/* Grid UI Mockup */}
                <div className="grid grid-cols-3 gap-3">
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="aspect-square bg-slate-200 rounded-xl animate-pulse" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating Engagement Bubble */}
            <motion.div 
              style={{ y: floatMetricY }}
              className="absolute top-[10%] -left-6 bg-white p-6 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] z-30 border border-slate-50 flex items-center gap-5"
            >
              <div className="p-4 bg-rose-50 rounded-2xl">
                <Heart className="w-7 h-7 text-rose-500 fill-current" />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">High</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Viral Potential</p>
              </div>
            </motion.div>

            {/* Floating User Reach */}
            <motion.div 
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -450]) }}
              className="absolute bottom-[15%] -left-12 bg-white p-5 rounded-[2rem] shadow-[0_15px_30px_rgba(0,0,0,0.08)] z-30 flex items-center gap-4 border border-slate-50"
            >
              <div className="p-3 bg-blue-50 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-black text-slate-800 uppercase tracking-tight">2.4M Reached</p>
            </motion.div>

            {/* Subtle Cursor Pointer to show "Agency/Managed" feel */}
            <motion.div 
               animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute top-[40%] right-[10%] z-40 opacity-40"
            >
              <MousePointer2 className="w-8 h-8 text-blue-600 fill-current" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}