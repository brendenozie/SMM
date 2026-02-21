"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  CheckCircle, 
  Sparkles, 
  ArrowRight, 
  Play, 
  Target, 
  Rocket, 
  Globe,
  MonitorPlay
} from "lucide-react";

const TRACKS = [
  {
    title: "Viral Scripting AI",
    emoji: "✍️",
    duration: "4 Weeks",
    level: "Pro",
    color: "bg-cyan-500",
    description: "Master the psychology of hooks and retention."
  },
  {
    title: "Omnichannel Growth",
    emoji: "📈",
    duration: "6 Weeks",
    level: "Elite",
    color: "bg-purple-600",
    description: "Dominate TikTok, IG, and YouTube simultaneously."
  },
  {
    title: "AI Video Alchemy",
    emoji: "🎬",
    duration: "5 Weeks",
    level: "Expert",
    color: "bg-blue-500",
    description: "Generate cinematic assets with zero camera gear."
  },
  {
    title: "The Faceless Empire",
    emoji: "👤",
    duration: "8 Weeks",
    level: "Master",
    color: "bg-pink-600",
    description: "Scale 10+ channels without ever showing your face."
  }
];

export function CourseTrackSection() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[4rem] p-10 md:p-20 overflow-hidden relative">
          
          {/* Top Right Decorative Accent */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content Side */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-cyan-500 text-slate-950 border-none px-4 py-1.5 font-black text-[10px] tracking-[0.2em] mb-6">
                  2024 VIBE-CORE UPDATE
                </Badge>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.85] italic uppercase">
                  PICK YOUR <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">WEAPON.</span>
                </h2>
                
                <div className="space-y-6 mb-12">
                  {[
                    "Instant Access to 100+ AI Workflows",
                    "Weekly Strategy Drops from Top 1% Creators",
                    "The VibeFlow 'Viral-Ready' Certification"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 text-slate-400"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <span className="font-bold text-lg tracking-tight">{text}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-white hover:bg-cyan-400 text-slate-950 px-10 h-20 rounded-[2rem] text-xl font-black italic tracking-tighter transition-all hover:scale-105 active:scale-95 group">
                    EXPLORE ARSENAL
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="border-white/10 bg-white/5 text-white px-8 h-20 rounded-[2rem] text-lg font-bold hover:bg-white/10">
                    <Play className="mr-2 w-5 h-5 fill-current" /> Watch Demo
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Interactive Cards Side */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {TRACKS.map((track, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className={cn(
                      "p-8 rounded-[3rem] border border-white/5 relative group cursor-pointer overflow-hidden",
                      idx === 1 || idx === 3 ? "mt-12" : "mb-12",
                      idx === 1 ? "bg-purple-600/10 border-purple-500/20" : "bg-white/5 backdrop-blur-md"
                    )}
                  >
                    {/* Background Glow on Hover */}
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl",
                      track.color
                    )} />

                    <span className="text-5xl block mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12">
                      {track.emoji}
                    </span>
                    <h5 className="text-white font-black text-xl italic tracking-tighter leading-tight mb-2">
                      {track.title}
                    </h5>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">
                      {track.duration} • {track.level}
                    </p>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {track.description}
                    </p>
                    
                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Tech Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
                <Globe className="w-96 h-96 text-white animate-[spin_20s_linear_infinite]" />
              </div>
            </div>

          </div>
        </div>

        {/* --- TRUST BAR --- */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <p className="text-white font-black italic tracking-widest text-sm uppercase">Powering Creators At:</p>
           <span className="text-white font-black text-2xl tracking-tighter">TIKTOK</span>
           <span className="text-white font-black text-2xl tracking-tighter">NETFLIX</span>
           <span className="text-white font-black text-2xl tracking-tighter">DISNEY+</span>
           <span className="text-white font-black text-2xl tracking-tighter">META</span>
        </div>
      </div>
    </section>
  );
}

// Utility function for conditional classes
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}