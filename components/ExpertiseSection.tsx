"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Eye, 
  BarChart3, 
  Share2,
  Cpu,
  TrendingUp
} from "lucide-react";

const EXPERTISE_TRACKS = [
  {
    title: "AI Narrative Design",
    tagline: "Unbreakable Storytelling",
    icon: Sparkles,
    color: "cyan",
    stats: "24 Blueprints",
    difficulty: "Elite",
    description: "Use LLMs to engineer psychological hooks and narrative arcs that force viewers to watch until the very last second."
  },
  {
    title: "Algorithmic Arbitrage",
    tagline: "The Science of Reach",
    icon: TrendingUp,
    color: "purple",
    stats: "15 Strategems",
    difficulty: "Master",
    description: "Decode real-time platform updates. Master the math behind retention, CTR, and the 'viral threshold' across all platforms."
  },
  {
    title: "Automated Media Engines",
    tagline: "Scale to Infinity",
    icon: Cpu,
    color: "blue",
    stats: "10 Workflows",
    difficulty: "Advanced",
    description: "Build a 24/7 content factory. Learn to chain AI tools to script, edit, and post while you sleep."
  }
];

export function ExpertiseSection() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full" />

      {/* --- HEADER --- */}
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="space-y-6 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              The Alpha Skillset
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic leading-[0.85] uppercase">
              SKILLS THAT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">BREAK THE MATRIX.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg font-medium leading-relaxed border-l-2 border-white/10 pl-8">
            The old playbook is dead. We provide the technical and psychological infrastructure to scale influence at the speed of light.
          </p>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {EXPERTISE_TRACKS.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
            >
              <Card className="group relative p-10 h-full bg-slate-900/40 backdrop-blur-xl border-slate-800 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_50px_-12px_rgba(34,211,238,0.3)]">
                {/* Background Icon Watermark */}
                <track.icon className="absolute -right-12 -top-12 w-56 h-56 text-white/5 -rotate-12 transition-transform group-hover:rotate-0 group-hover:scale-110 duration-1000" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-5 rounded-[2rem] bg-slate-950 border border-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                      <track.icon className="w-10 h-10" />
                    </div>
                    <Badge className="bg-white/5 hover:bg-white/10 border-white/10 text-white font-black text-[9px] uppercase tracking-widest px-3 py-1">
                      {track.difficulty}
                    </Badge>
                  </div>

                  <div className="space-y-4 mb-10">
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-500/80">
                      {track.tagline}
                    </p>
                    <h3 className="text-3xl font-black text-white italic tracking-tighter group-hover:text-cyan-400 transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-base font-medium">
                      {track.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <Terminal className="w-4 h-4 text-cyan-500" />
                        {track.stats}
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                        <Share2 className="w-4 h-4 text-cyan-500" />
                        Platform Ready
                      </div>
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                       <ArrowRight className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom Accent Glow */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}