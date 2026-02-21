"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Trophy, 
  Zap, 
  Users, 
  Sparkles,
  ArrowRight,
  Target,
  Rocket,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";

const VIRAL_PATH = [
  {
    phase: "01",
    title: "Brand Calibration",
    description: "We dive deep into your brand's DNA to identify high-signal opportunities and calibrate your unique voice.",
    deliverables: ["Platform Strategy", "Persona Blueprint", "Content Pillars"],
    icon: Target,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    phase: "02",
    title: "The Velocity Phase",
    description: "Batch-producing high-retention assets. We deploy our proprietary 'Viral Hook' framework across all channels.",
    deliverables: ["Visual Identity", "Batch Production", "Hook Optimization"],
    icon: Zap,
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    phase: "03",
    title: "Community Growth",
    description: "Turning viewers into a loyal army. We design engagement loops that force algorithms to favor your brand.",
    deliverables: ["DM Automation", "Retention Hacks", "Viral Loops"],
    icon: Users,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-100",
  },
  {
    phase: "04",
    title: "Empire Scaling",
    description: "Monetize your influence. We help you secure high-ticket sponsors and automate your entire media engine.",
    deliverables: ["Funnel Design", "Sponsor Kits", "Full Automation"],
    icon: Rocket,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  }
];

export function CurriculumTimeline() {
  return (
    <section className="py-32 bg-white overflow-hidden relative">
      {/* Subtle Structural Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="max-w-4xl mb-32 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em]"
          >
            <span className="w-8 h-px bg-blue-600" />
            The Roadmap to Impact
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85]">
            YOUR STORY, <br />
            <span className="text-slate-300">SCALED TO MILLIONS.</span>
          </h2>
          <p className="text-slate-500 font-medium text-xl max-w-2xl leading-relaxed">
            A proven 4-phase methodology designed to take brands from digital obscurity to market dominance.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Desktop Timeline Path (Clean Minimalist SVG) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M500 0V150C500 200 850 200 850 350C850 500 150 500 150 650C150 800 500 800 500 1000" 
                stroke="#e2e8f0" 
                strokeWidth="2" 
                strokeDasharray="12 12"
              />
            </svg>
          </div>

          <div className="space-y-12 lg:space-y-0 lg:min-h-[1100px] relative">
            {VIRAL_PATH.map((stage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "relative flex flex-col lg:absolute lg:w-[460px] group",
                  index === 0 && "lg:top-0 lg:left-1/2 lg:-translate-x-1/2",
                  index === 1 && "lg:top-[300px] lg:right-0",
                  index === 2 && "lg:top-[600px] lg:left-0",
                  index === 3 && "lg:top-[900px] lg:left-1/2 lg:-translate-x-1/2"
                )}
              >
                {/* Stage Content Card */}
                <div className={cn(
                  "relative z-10 p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 group-hover:border-blue-200 shadow-[0_10px_30px_rgba(0,0,0,0.03)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group-hover:-translate-y-3"
                )}>
                  
                  {/* Phase Counter Floating */}
                  <div className="absolute -top-6 -right-4 text-8xl font-black text-slate-50 select-none pointer-events-none group-hover:text-blue-50 transition-colors italic">
                    {stage.phase}
                  </div>

                  <div className="flex items-center gap-5 mb-8">
                    <div className={cn("p-4 rounded-2xl transition-colors duration-500", stage.bg, stage.color)}>
                      <stage.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium relative z-10">
                    {stage.description}
                  </p>

                  <div className="grid grid-cols-1 gap-3 pt-8 border-t border-slate-50">
                    {stage.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className={cn("w-4 h-4", stage.color)} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Aesthetic Link Indicator */}
                  <div className={cn("absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2", stage.color)}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* --- FINAL MILESTONE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center pt-64 lg:pt-48 pb-20"
          >
            <div className="relative group text-center">
              {/* Animated glow background */}
              <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-10 group-hover:opacity-25 transition-opacity" />
              
              <div className="relative z-10 bg-slate-900 text-white px-20 py-12 rounded-[3.5rem] flex flex-col items-center gap-3 shadow-2xl transition-all hover:scale-105 active:scale-95">
                <div className="p-5 bg-white/10 rounded-3xl backdrop-blur-md mb-2">
                  <Trophy className="w-12 h-12 text-blue-400" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-blue-400">The Destination</span>
                <p className="text-4xl md:text-5xl font-black italic tracking-tighter">MARKET AUTHORITY</p>
                <div className="flex items-center gap-3 mt-4 text-slate-400 text-[11px] font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Passive Inbound • Industry Leader • Global Reach
                </div>
              </div>
              
              {/* Floating Cursor Mockup */}
              <motion.div 
                animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-12 hidden md:block"
              >
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                   <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                   <span className="text-[10px] font-black text-slate-900 uppercase">System Automated</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}