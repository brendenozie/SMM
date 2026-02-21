"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle2, 
  Trophy, 
  Zap, 
  Eye, 
  Users, 
  Share2,
  Sparkles,
  ArrowRight,
  Target,
  Rocket
} from "lucide-react";
import { cn } from "@/lib/utils";

const VIRAL_PATH = [
  {
    phase: "01",
    title: "Niche Calibration",
    description: "Identify high-signal opportunities and calibrate your brand voice using AI trend analysis.",
    deliverables: ["Platform Strategy", "Persona Blueprint", "Hook Library"],
    icon: Target,
    color: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    border: "border-cyan-500/20",
  },
  {
    phase: "02",
    title: "The Velocity Engine",
    description: "Master the 24-hour content cycle. Use VibeFlow AI to generate 30 days of high-retention assets.",
    deliverables: ["AI Prompt Mastery", "Batch Processing", "A/B Testing"],
    icon: Zap,
    color: "text-purple-400",
    glow: "shadow-purple-500/20",
    border: "border-purple-500/20",
  },
  {
    phase: "03",
    title: "Community Growth",
    description: "Convert views into a loyal army. Design engagement loops that force the algorithm to push your content.",
    deliverables: ["DM Automation", "Retention Hacks", "Viral Loops"],
    icon: Users,
    color: "text-pink-400",
    glow: "shadow-pink-500/20",
    border: "border-pink-500/20",
  },
  {
    phase: "04",
    title: "Empire Scaling",
    description: "Monetize your reach. Launch products, secure high-ticket sponsors, and automate your entire media house.",
    deliverables: ["Funnel Design", "Sponsor Kits", "Full Automation"],
    icon: Rocket,
    color: "text-blue-400",
    glow: "shadow-blue-500/20",
    border: "border-blue-500/20",
  }
];

export function CurriculumTimeline() {
  return (
    <section className="py-32 bg-[#020617] overflow-hidden relative">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-6">
          <Badge className="px-4 py-1.5 border-cyan-500/30 text-cyan-400 bg-cyan-500/10 rounded-full font-black uppercase tracking-[0.2em] text-[10px]">
            The Blueprint
          </Badge>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white italic leading-[0.85]">
            FROM ZERO TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">OMNIPRESENT.</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg">
            A 4-phase masterclass designed to bypass the learning curve and trigger exponential social growth.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Desktop Timeline Path (Neon SVG) */}
          <div className="absolute inset-0 hidden lg:block pointer-events-none" aria-hidden="true">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M500 0V200C500 250 850 250 850 400C850 550 150 550 150 700C150 850 500 850 500 1000" 
                stroke="url(#gradient-path)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeDasharray="20 20"
              />
              <defs>
                <linearGradient id="gradient-path" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#22d3ee" />
                  <stop offset="0.5" stopColor="#8b5cf6" />
                  <stop offset="1" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-20 lg:space-y-0 lg:min-h-[1000px] relative">
            {VIRAL_PATH.map((stage, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={cn(
                  "relative flex flex-col lg:absolute lg:w-[420px] group",
                  index === 0 && "lg:top-0 lg:left-1/2 lg:-translate-x-1/2",
                  index === 1 && "lg:top-[280px] lg:right-0",
                  index === 2 && "lg:top-[580px] lg:left-0",
                  index === 3 && "lg:top-[880px] lg:left-1/2 lg:-translate-x-1/2"
                )}
              >
                {/* Stage Content Card */}
                <div className={cn(
                  "relative z-10 p-10 rounded-[3rem] bg-slate-900/80 backdrop-blur-xl border border-slate-800 transition-all duration-500 group-hover:border-white/20 shadow-2xl group-hover:-translate-y-4",
                  stage.glow
                )}>
                  
                  {/* Phase Counter */}
                  <div className="absolute -top-8 left-10 text-6xl font-black italic text-white/5 select-none pointer-events-none group-hover:text-cyan-400/10 transition-colors">
                    PHASE {stage.phase}
                  </div>

                  <div className="flex items-center gap-5 mb-8">
                    <div className={cn("p-4 rounded-2xl bg-slate-950 border border-slate-800", stage.color)}>
                      <stage.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white italic tracking-tight">
                      {stage.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-base leading-relaxed mb-8 font-medium">
                    {stage.description}
                  </p>

                  <div className="space-y-3 pt-8 border-t border-white/5">
                    {stage.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className={cn("w-4 h-4", stage.color)} />
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Desktop Hover Arrow */}
                  <div className={cn("absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2", stage.color)}>
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Graduation Marker */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative flex justify-center pt-48"
          >
            <div className="relative group cursor-pointer text-center">
              <div className="absolute inset-0 bg-cyan-500 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative z-10 bg-white text-slate-950 px-16 py-10 rounded-[4rem] flex flex-col items-center gap-2 shadow-2xl transition-all hover:scale-105 active:scale-95">
                <Trophy className="w-16 h-16 text-cyan-600 mb-2" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-cyan-600">Ultimate Goal</span>
                <p className="text-4xl font-black italic tracking-tighter">MEDIA EMPIRE</p>
                <div className="flex items-center gap-2 mt-4 text-slate-500 text-[10px] font-black uppercase tracking-widest">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  Sponsors • 1M+ Reach • Autopilot
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}