"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  Globe,
  Star,
  Layers,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const TRACKS = [
  {
    title: "Viral Scripting AI",
    emoji: "✍️",
    duration: "4 Weeks",
    level: "Pro",
    color: "text-blue-600",
    bg: "bg-blue-50/50",
    description: "Master the psychology of high-retention hooks."
  },
  {
    title: "Omnichannel Growth",
    emoji: "📈",
    duration: "6 Weeks",
    level: "Elite",
    color: "text-purple-600",
    bg: "bg-purple-50/50",
    description: "Dominate TikTok, IG, and YouTube simultaneously."
  },
  {
    title: "AI Video Alchemy",
    emoji: "🎬",
    duration: "5 Weeks",
    level: "Expert",
    color: "text-emerald-600",
    bg: "bg-emerald-50/50",
    description: "Cinematic assets without ever picking up a camera."
  },
  {
    title: "Faceless Empires",
    emoji: "👤",
    duration: "8 Weeks",
    level: "Master",
    color: "text-rose-600",
    bg: "bg-rose-50/50",
    description: "Scale 10+ channels with total anonymity."
  }
];

export function CourseTrackSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-slate-50/50 border border-slate-100 rounded-[4rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-2xl shadow-slate-200/50">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-50" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            
            {/* --- LEFT CONTENT --- */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Badge className="bg-white text-blue-600 border-blue-100 shadow-sm px-4 py-2 font-bold text-[10px] tracking-[0.2em] mb-8 uppercase">
                  <Sparkles className="w-3 h-3 mr-2" /> 2026 Curriculum Update
                </Badge>
                
                <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.85] uppercase">
                  CHOOSE YOUR <br />
                  <span className="text-slate-300 italic">MASTERY.</span>
                </h2>
                
                <div className="space-y-6 mb-12">
                  {[
                    "Instant access to 100+ high-signal AI workflows",
                    "Weekly strategy drops from the top 1% of creators",
                    "Official Certification for Agency & Brand roles"
                  ].map((text, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-bold text-lg text-slate-600 tracking-tight group-hover:text-slate-900 transition-colors">
                        {text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <Button className="bg-slate-900 hover:bg-blue-600 text-white px-10 h-20 rounded-[2rem] text-xl font-black tracking-tighter transition-all hover:scale-105 active:scale-95 group">
                    VIEW ENTIRE ARSENAL
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="ghost" className="text-slate-500 hover:text-slate-900 px-8 h-20 rounded-[2rem] text-lg font-bold">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center mr-3 bg-white shadow-sm">
                      <Play className="w-4 h-4 fill-slate-900 ml-1" />
                    </div>
                    See Demo
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* --- RIGHT INTERACTIVE CARDS --- */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {TRACKS.map((track, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -12 }}
                    className={cn(
                      "p-8 rounded-[3rem] border border-slate-100 bg-white shadow-xl shadow-slate-200/40 relative group cursor-pointer overflow-hidden transition-all duration-500",
                      idx % 2 !== 0 ? "lg:mt-16" : "lg:-mt-10"
                    )}
                  >
                    {/* Floating Level Badge */}
                    <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {track.level}
                    </div>

                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-8 transition-transform group-hover:scale-110 group-hover:-rotate-6", track.bg)}>
                      {track.emoji}
                    </div>

                    <h5 className="text-slate-900 font-black text-2xl tracking-tighter leading-tight mb-2 uppercase">
                      {track.title}
                    </h5>
                    
                    <div className="flex items-center gap-2 mb-4">
                       <Layers className="w-3.5 h-3.5 text-slate-300" />
                       <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                         {track.duration} • Curriculum
                       </p>
                    </div>

                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 group-hover:text-slate-700 transition-colors">
                      {track.description}
                    </p>
                    
                    <div className={cn("flex items-center gap-2 font-black text-xs uppercase tracking-tighter transition-all opacity-0 group-hover:opacity-100", track.color)}>
                      Explore Track <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Tech Overlay (Subtle) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5">
                <Globe className="w-[500px] h-[500px] text-slate-900" />
              </div>
            </div>

          </div>
        </div>

        {/* --- PARTNER BAR --- */}
        <div className="mt-20 py-10 border-y border-slate-100 flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
            <p className="text-slate-300 font-black italic tracking-widest text-[10px] uppercase w-full text-center lg:w-auto">Validated by Professionals at:</p>
            {['TIKTOK', 'NETFLIX', 'META', 'ADOBE'].map((brand) => (
              <span key={brand} className="text-slate-900 font-black text-2xl tracking-tighter opacity-20 hover:opacity-100 transition-opacity cursor-default">
                {brand}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}