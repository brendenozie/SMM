"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowUpRight, 
  Instagram, 
  Trophy, 
  TrendingUp, 
  Zap, 
  Layers,
  Sparkles
} from "lucide-react";

const RECENT_WINS = [
  {
    title: "The Aesthetic Edge",
    client: "Luminaire Home",
    category: "Visual Overhaul",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    impact: "2.4M Views",
    status: "Organic Growth",
    metric: "Reach",
  },
  {
    title: "Founder Authority",
    client: "Sarah Chen, CEO",
    category: "Personal Brand",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
    impact: "+400% ROI",
    status: "B2B Strategy",
    metric: "Lead Gen",
  },
  {
    title: "Community Scaling",
    client: "Sol Studio",
    category: "Community Management",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
    impact: "80k Shares",
    status: "High Retention",
    metric: "Shares",
  },
  {
    title: "Product Launch 2.0",
    client: "Vance Tech",
    category: "Ads & Creative",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1000&auto=format&fit=crop",
    impact: "15k Leads",
    status: "Conversion Max",
    metric: "Sales",
  },
];

export function ProjectGallery() {
  return (
    <section className="py-32 bg-white text-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest"
            >
              <Trophy className="w-3.5 h-3.5" />
              Recent Success Stories
            </motion.div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.85] text-slate-900">
              CRAFTING <br />
              <span className="text-blue-600 italic">CULTURE.</span>
            </h2>
            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
              I don&apos;t just post content; I build ecosystems. View how I&apos;ve scaled global brands from silent observers to industry leaders.
            </p>
          </div>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {RECENT_WINS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-blue-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Floating Status Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-lg">
                    {project.status}
                  </Badge>
                </div>

                {/* Growth Metric Overlay (Appears on Hover) */}
                <div className="absolute inset-0 bg-blue-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-center p-8">
                    <TrendingUp className="w-12 h-12 text-white mb-4 animate-bounce" />
                    <p className="text-4xl font-black text-white tracking-tighter">{project.impact}</p>
                    <p className="text-[10px] font-bold text-blue-100 uppercase tracking-[0.3em] mt-2">Total {project.metric}</p>
                </div>
              </div>

              {/* Text Content */}
              <div className="mt-8 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{project.category}</span>
                  <Layers className="w-4 h-4 text-slate-300 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-tight">For {project.client}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- PREMIUM CTA BAR --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-1.5 rounded-[3.5rem] bg-slate-50 border border-slate-100"
        >
          <div className="bg-white rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 shadow-sm">
            <div className="flex items-center gap-8">
              <div className="h-24 w-24 rounded-[2.5rem] bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-200">
                <Sparkles className="w-10 h-10 text-white fill-current" />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">READY FOR A BOOST?</h4>
                <p className="text-slate-500 font-medium text-lg">Stop scrolling through case studies and become one.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <button className="h-20 px-12 rounded-[2rem] bg-slate-900 text-white font-black text-lg hover:bg-blue-600 shadow-xl transition-all active:scale-95 flex items-center justify-center gap-3 group">
                  Start My Audit
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="h-20 w-20 rounded-[2rem] border-2 border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 transition-all">
                  <Instagram className="w-8 h-8" />
                </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}