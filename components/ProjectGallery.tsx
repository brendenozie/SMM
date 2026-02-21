"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Instagram, Trophy, Eye, TrendingUp, Zap } from "lucide-react";

const VIRAL_PROJECTS = [
  {
    title: "The 'Ghost Kitchen' Campaign",
    creator: "Alex Rivers",
    category: "Short-Form",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    impact: "2.4M Views",
    status: "Trending",
    tags: ["TikTok", "Storytelling"],
  },
  {
    title: "Zenith Tech Rebrand",
    creator: "Sarah Chen",
    category: "Visual ID",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    impact: "+400% ROI",
    status: "Viral",
    tags: ["AI-Design", "Branding"],
  },
  {
    title: "Mindful Morning Series",
    creator: "Marcus J.",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    impact: "80k Shares",
    status: "Top Performer",
    tags: ["Engagement", "Insta"],
  },
  {
    title: "Crypto-Pulse Weekly",
    creator: "Elena Vance",
    category: "Information",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    impact: "15k Leads",
    status: "High Conv.",
    tags: ["Twitter", "Threads"],
  },
];

export function ProjectGallery() {
  return (
    <section className="py-32 bg-[#020617] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <Trophy className="w-3.5 h-3.5" />
              The Viral Hall of Fame
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] italic">
              BUILT WITH <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">VIBEFLOW AI.</span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed">
              Real creators. Real numbers. See how our community uses the engine to break the algorithm and scale their influence.
            </p>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VIRAL_PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative aspect-[3/4] rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.2)]"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-100" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="space-y-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-center">
                    <Badge className="bg-cyan-500 text-slate-950 border-none text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                      {project.status}
                    </Badge>
                    <span className="text-[10px] font-black text-cyan-400/70 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight italic">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-tighter">@{project.creator.replace(' ', '').toLowerCase()}</p>
                  </div>

                  {/* Impact Stat */}
                  <div className="flex items-center gap-2 py-3 border-y border-white/10">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-lg font-black text-white tracking-tighter">{project.impact}</span>
                  </div>

                  {/* Action Bar (Appears on Hover) */}
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 pt-2">
                    <button className="flex-grow h-12 rounded-xl bg-white text-slate-950 font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
                      View Breakdown <ExternalLink className="w-3 h-3" />
                    </button>
                    <button className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center text-white hover:bg-pink-500 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CALL TO ACTION BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-px rounded-[3rem] bg-gradient-to-r from-slate-800 via-cyan-500/50 to-slate-800"
        >
          <div className="bg-[#020617] rounded-[2.9rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <div className="h-20 w-20 rounded-[2rem] bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                <Zap className="w-10 h-10 text-cyan-400 fill-current" />
              </div>
              <div className="space-y-1">
                <h4 className="text-2xl md:text-3xl font-black text-white italic">WANT TO GO VIRAL?</h4>
                <p className="text-slate-400 font-medium text-lg">Your first 10k followers are one lab away.</p>
              </div>
            </div>
            <button className="w-full md:w-auto h-20 px-12 rounded-[2rem] bg-white hover:bg-cyan-400 text-slate-950 font-black text-xl shadow-[0_20px_40px_rgba(255,255,255,0.05)] transition-all active:scale-95 uppercase tracking-tighter italic">
              Claim Your Free Lab
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}