"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Share2,
  Cpu,
  TrendingUp,
  Plus
} from "lucide-react";

const EXPERTISE_TRACKS = [
  {
    title: "AI Narrative Design",
    tagline: "Unbreakable Storytelling",
    icon: Sparkles,
    color: "text-blue-600",
    bg: "bg-blue-50",
    stats: "24 Blueprints",
    difficulty: "Elite",
    description: "Using LLMs to engineer psychological hooks and narrative arcs that sustain engagement throughout the entire viewer journey."
  },
  {
    title: "Algorithmic Arbitrage",
    tagline: "The Science of Reach",
    icon: TrendingUp,
    color: "text-purple-600",
    bg: "bg-purple-50",
    stats: "15 Strategems",
    difficulty: "Master",
    description: "Mastering the math behind retention, CTR, and the 'viral threshold' through real-time platform data and trend analysis."
  },
  {
    title: "Automated Media Engines",
    tagline: "Scale to Infinity",
    icon: Cpu,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    stats: "10 Workflows",
    difficulty: "Advanced",
    description: "Chaining AI tools to script, edit, and post on a 24/7 cycle, allowing your brand to remain omnipresent without manual effort."
  }
];

export function ExpertiseSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Aesthetic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest"
            >
              <Zap className="w-3.5 h-3.5 text-blue-600 fill-current" />
              Technical Core
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85]">
              FUTURE-PROOF <br />
              <span className="text-blue-600">CAPABILITIES.</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-md text-xl font-medium leading-relaxed border-l-4 border-blue-600 pl-8 pb-2">
            The social landscape has shifted. We provide the infrastructure to dominate the attention economy using the latest in AI and data science.
          </p>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {EXPERTISE_TRACKS.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="h-full"
            >
              <Card className="group relative p-12 h-full bg-white border-slate-100 overflow-hidden transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-2">
                
                {/* Decorative Number */}
                <span className="absolute top-8 right-12 text-7xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 select-none">
                  0{idx + 1}
                </span>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-16">
                    <div className={`p-5 rounded-3xl ${track.bg} ${track.color} transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                      <track.icon className="w-10 h-10" />
                    </div>
                    <Badge className="bg-slate-900 text-white font-bold text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-full">
                      {track.difficulty}
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-12">
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${track.color}`}>
                      {track.tagline}
                    </p>
                    <h3 className="text-3xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">
                      {track.description}
                    </p>
                  </div>

                  {/* Stats Bar */}
                  <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Terminal className="w-4 h-4 text-blue-600" />
                        {track.stats}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                        <Share2 className="w-4 h-4 text-blue-600" />
                        Cross-Platform
                      </div>
                    </div>
                    
                    <div className={`h-10 w-10 rounded-full ${track.bg} ${track.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300`}>
                       <Plus className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Left Edge Accent */}
                <div className={`absolute left-0 top-0 w-1 h-full ${track.color.replace('text', 'bg')} scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FOOTER DECOR --- */}
      <div className="container mx-auto px-6 mt-20 text-center">
        <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.5em]">
          All Systems Verified • 2026 Engagement Standards
        </p>
      </div>
    </section>
  );
}