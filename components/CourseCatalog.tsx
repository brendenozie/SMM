"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  Instagram, 
  Zap, 
  Target, 
  TrendingUp,
  Globe,
  Video,
  PenTool,
  BarChart2,
  Search
} from "lucide-react";

const CATEGORIES = ["All Strategy", "Short-Form Video", "Brand Authority", "Ads & Scale"];

const PROJECTS = [
  {
    id: 1,
    title: "Viral Aesthetic Overhaul",
    description: "I redesigned the visual identity and content pillars for a luxury lifestyle brand, resulting in 2M+ organic impressions.",
    result: "+420% Engagement",
    category: "Short-Form Video",
    icon: Video,
    color: "bg-pink-50",
    accent: "text-pink-600",
    shadow: "hover:shadow-pink-100",
    tags: ["Reels", "Art Direction", "Viral Hooks"],
  },
  {
    id: 2,
    title: "Thought Leadership Engine",
    description: "Turning founder expertise into high-signal LinkedIn content that builds authority and drives B2B inbound leads.",
    result: "52 Quality Leads",
    category: "Brand Authority",
    icon: PenTool,
    color: "bg-blue-50",
    accent: "text-blue-600",
    shadow: "hover:shadow-blue-100",
    tags: ["Ghostwriting", "LinkedIn", "B2B"],
  },
  {
    id: 3,
    title: "The Growth Accelerator",
    description: "A full-funnel social strategy combining paid amplification with community-first organic content.",
    result: "12x ROI on Ads",
    category: "Ads & Scale",
    icon: BarChart2,
    color: "bg-emerald-50",
    accent: "text-emerald-600",
    shadow: "hover:shadow-emerald-100",
    tags: ["Meta Ads", "Scaling", "Retention"],
  },
  {
    id: 4,
    title: "Community First Protocol",
    description: "Strategy focused on high-retention engagement and DM automation to turn followers into a loyal 'cult' following.",
    result: "85% Retention",
    category: "All Strategy",
    icon: Target,
    color: "bg-orange-50",
    accent: "text-orange-600",
    shadow: "hover:shadow-orange-100",
    tags: ["Community", "DMs", "Loyalty"],
  }
];

export function CourseCatalog() {
  const [activeTab, setActiveTab] = useState("All Strategy");

  const filteredProjects = activeTab === "All Strategy" 
    ? PROJECTS 
    : PROJECTS.filter(pb => pb.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32 space-y-20 bg-white">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-[0.2em]"
          >
            <Zap className="w-4 h-4 fill-current" />
            Proven Impact
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.9]">
            RESULTS DRIVEN <br />
            <span className="text-slate-400">NOT JUST POSTS.</span>
          </h2>
        </div>
        <div className="max-w-md space-y-4">
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            I don&apos;t just manage accounts; I build digital assets. These playbooks represent the exact frameworks I use to scale brands from zero to viral.
          </p>
          <div className="flex items-center gap-4 text-blue-600 font-bold text-sm">
             <span className="h-px w-8 bg-blue-600" />
             View all 50+ case studies
          </div>
        </div>
      </div>

      {/* --- LIGHT MODE FILTER BAR --- */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-50 rounded-[2rem] w-fit border border-slate-100">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-8 py-3.5 text-xs font-bold rounded-[1.5rem] transition-all duration-300 ${
              activeTab === cat 
              ? "bg-white text-blue-600 shadow-sm border border-slate-100" 
              : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* --- PLAYBOOK GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((pb) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={pb.id}
              className={`group flex flex-col bg-white border border-slate-100 rounded-[3rem] p-4 transition-all duration-500 shadow-sm ${pb.shadow} hover:-translate-y-2`}
            >
              {/* Header Visual Section */}
              <div className={`h-52 w-full ${pb.color} rounded-[2.5rem] flex items-center justify-center relative transition-transform duration-500 overflow-hidden`}>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/80 backdrop-blur-md text-slate-900 border-none px-3 py-1 font-bold text-[10px] uppercase tracking-tighter shadow-sm">
                    {pb.result}
                  </Badge>
                </div>
                <pb.icon className={`w-14 h-14 ${pb.accent} transition-transform duration-500 group-hover:scale-110`} />
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${pb.accent}`}>
                    {pb.category}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {pb.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                  {pb.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pb-6">
                  {pb.tags.map((tag) => (
                    <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-slate-50 text-slate-500 font-bold uppercase tracking-tight border border-slate-100">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button className="w-full h-14 bg-slate-900 text-white hover:bg-blue-600 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all group/btn shadow-lg shadow-slate-100">
                  Case Study
                  <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* --- EMPTY STATE --- */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-24 rounded-[4rem] bg-slate-50 border border-slate-100">
          <Search className="w-10 h-10 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">New Case Studies Loading...</p>
        </div>
      )}
    </section>
  );
}