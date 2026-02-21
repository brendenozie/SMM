"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  ChevronRight, 
  BarChart3, 
  Instagram, 
  Twitter, 
  Zap, 
  Smartphone, 
  Target, 
  Play,
  TrendingUp,
  Globe
} from "lucide-react";

const CATEGORIES = ["All", "Instagram", "TikTok", "LinkedIn", "Brand AI"];

const PLAYBOOKS = [
  {
    id: 1,
    title: "The 30-Day Viral Reel Lab",
    description: "Master the exact hook-structure and visual pacing that triggered 1M+ views for top creators.",
    difficulty: "Advanced",
    reach: "100k+ Potential",
    category: "Instagram",
    icon: Instagram,
    color: "from-purple-500/20 to-pink-500/20",
    accent: "text-pink-500",
    border: "group-hover:border-pink-500/50",
    tags: ["Hooks", "CapCut", "Audio Trends"],
  },
  {
    id: 2,
    title: "TikTok Growth Engine",
    description: "Learn to leverage the 'For You' page algorithm using high-retention storytelling and Lo-Fi visuals.",
    difficulty: "Intermediate",
    reach: "High Momentum",
    category: "TikTok",
    icon: Play,
    color: "from-cyan-500/20 to-blue-500/20",
    accent: "text-cyan-400",
    border: "group-hover:border-cyan-400/50",
    tags: ["Algorithms", "UGC", "Engagement"],
  },
  {
    id: 3,
    title: "AI-Driven Copywriter",
    description: "Train a custom AI model on your brand voice to generate 50+ viral-ready captions in seconds.",
    difficulty: "Beginner",
    reach: "Efficiency 10x",
    category: "Brand AI",
    icon: Sparkles,
    color: "from-amber-400/20 to-orange-500/20",
    accent: "text-amber-500",
    border: "group-hover:border-amber-400/50",
    tags: ["ChatGPT", "Prompts", "Branding"],
  },
  {
    id: 4,
    title: "Authority Builder (B2B)",
    description: "Turn your personal profile into a lead machine using high-signal thought leadership content.",
    difficulty: "Advanced",
    reach: "B2B Leads",
    category: "LinkedIn",
    icon: Target,
    color: "from-blue-600/20 to-indigo-600/20",
    accent: "text-blue-500",
    border: "group-hover:border-blue-500/50",
    tags: ["Writing", "Sales", "Networking"],
  }
];

export function CourseCatalog() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredPlaybooks = activeTab === "All" 
    ? PLAYBOOKS 
    : PLAYBOOKS.filter(pb => pb.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-cyan-400 font-black text-[10px] uppercase tracking-[0.3em]"
          >
            <Zap className="w-4 h-4 fill-current" />
            Viral Blueprints
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none italic">
            CHOOSE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">GROWTH LAB.</span>
          </h2>
        </div>
        <p className="max-w-md text-slate-400 font-medium leading-relaxed">
          The exact frameworks, AI prompts, and scheduling patterns used by the world&apos;s most engaging brands.
        </p>
      </div>

      {/* --- MODERN FILTER BAR --- */}
      <div className="flex flex-wrap items-center gap-3 border-b border-slate-800 pb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-3 text-xs font-black uppercase tracking-widest rounded-2xl transition-all duration-300 border ${
              activeTab === cat 
              ? "bg-white text-slate-950 border-white shadow-[0_0_30px_rgba(255,255,255,0.15)]" 
              : "text-slate-500 border-slate-800 hover:border-slate-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- PLAYBOOK GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPlaybooks.map((pb) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={pb.id}
              className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Header Icon Section */}
              <div className={`h-48 w-full bg-gradient-to-br ${pb.color} flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]" />
                <div className="relative p-6 rounded-[2rem] bg-slate-950/80 shadow-2xl group-hover:scale-110 transition-transform duration-500 border border-white/5">
                  <pb.icon className={`w-10 h-10 ${pb.accent}`} />
                </div>
                <Badge className="absolute top-6 right-6 bg-slate-950 text-white border-none px-3 py-1 font-black text-[9px] uppercase tracking-widest">
                  {pb.reach}
                </Badge>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-cyan-400">
                    <Smartphone className="w-3 h-3" /> {pb.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-500">
                    <TrendingUp className="w-3 h-3" /> {pb.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors leading-tight">
                  {pb.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 mb-6">
                  {pb.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {pb.tags.map((tag) => (
                    <span key={tag} className="text-[9px] px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-400 font-black uppercase tracking-tighter border border-slate-700/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 pb-8">
                <Button className="w-full h-14 bg-white text-slate-950 hover:bg-cyan-400 rounded-2xl font-black uppercase text-xs tracking-[0.2em] transition-all group/btn">
                  Start Lab
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- EMPTY STATE --- */}
      {filteredPlaybooks.length === 0 && (
        <div className="text-center py-32 rounded-[3rem] bg-slate-900/30 border-2 border-dashed border-slate-800">
          <Globe className="w-12 h-12 text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500 font-black uppercase tracking-widest text-xs">No playbooks found in this territory.</p>
        </div>
      )}
    </section>
  );
}