"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, Search, Filter, Sparkles, Image as ImageIcon, 
  MoreVertical, Download, Copy, Wand2, Hash, 
  LayoutGrid, List, CheckCircle2, CloudUpload
} from "lucide-react";

export default function ContentLibrary() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isGenerating, setIsGenerating] = useState(false);

  const libraryItems = [
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113', title: 'Summer Campaign', tags: ['#lifestyle', '#summer'], date: '2026-02-20' },
    { id: 2, type: 'video', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f', title: 'App Demo Reel', tags: ['#tech', '#b2b'], date: '2026-02-18' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0', title: 'Team Meeting High-Res', tags: ['#culture'], date: '2026-02-15' },
    { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1551434678-e076c223a692', title: 'Product Flatlay', tags: ['#minimal'], date: '2026-02-14' },
  ];

  return (
    <div className="flex h-full gap-8">
      {/* --- LEFT: ASSET EXPLORER --- */}
      <div className="flex-grow space-y-6">
        <div className="flex justify-between items-center bg-slate-900/40 p-4 rounded-3xl border border-slate-800">
          <div className="flex gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all">
              <CloudUpload className="w-4 h-4 text-cyan-400" /> Upload Media
            </button>
          </div>
        </div>

        {/* --- MEDIA GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {libraryItems.map((item) => (
            <motion.div 
              layout
              key={item.id}
              className="group relative bg-slate-900/60 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl"
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <div className="flex gap-2">
                    <button className="flex-grow bg-white text-slate-950 py-2 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors">
                      Select
                    </button>
                    <button className="p-2 bg-slate-900/80 backdrop-blur-md rounded-xl text-white">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-slate-100 mb-1">{item.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black text-cyan-400/80 uppercase">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Empty State / Add Card */}
          <button className="aspect-square border-2 border-dashed border-slate-800 rounded-[2rem] flex flex-col items-center justify-center gap-3 text-slate-500 hover:border-cyan-500/50 hover:text-cyan-400 transition-all bg-slate-900/20">
            <div className="p-4 bg-slate-900 rounded-2xl"><Plus className="w-6 h-6" /></div>
            <span className="text-xs font-black uppercase">Add New Asset</span>
          </button>
        </div>
      </div>

      {/* --- RIGHT: AI CAPTION GENERATOR --- */}
      <aside className="w-96 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-[2.5rem] p-8 h-fit sticky top-0">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-cyan-500/20 rounded-lg">
            <Sparkles className="w-5 h-5 text-cyan-400" />
          </div>
          <h3 className="text-xl font-black">AI Copywriter</h3>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 mb-2 block tracking-widest">Tone of Voice</label>
            <div className="grid grid-cols-2 gap-2">
              {['Witty', 'Professional', 'Bold', 'Minimal'].map(tone => (
                <button key={tone} className="py-2 px-3 rounded-xl border border-slate-800 text-xs font-bold text-slate-400 hover:border-cyan-500 hover:text-cyan-400 transition-all">
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-black uppercase text-slate-500 mb-2 block tracking-widest">Context / Goal</label>
            <textarea 
              placeholder="e.g. Announcing a 20% flash sale for weekend travelers..."
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-4 text-sm text-slate-300 focus:ring-2 focus:ring-cyan-500/20 outline-none h-32 resize-none"
            />
          </div>

          <button 
            disabled={isGenerating}
            onClick={() => setIsGenerating(true)}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all disabled:opacity-50"
          >
            {isGenerating ? <Wand2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
            Generate Caption
          </button>

          <hr className="border-slate-800" />

          {/* AI Result Preview */}
          <div className="bg-slate-950/50 border border-slate-800 rounded-2xl p-4 relative group">
            <p className="text-sm text-slate-400 italic leading-relaxed">
              &quot;Escape the ordinary this weekend. ✈️ We&apos;re dropping a 20% surprise for the boldest travelers. Where are you heading next?&quot;
            </p>
            <div className="mt-4 flex gap-4">
               <button className="text-[10px] font-black uppercase text-cyan-400 flex items-center gap-1"><Copy className="w-3 h-3" /> Copy</button>
               <button className="text-[10px] font-black uppercase text-slate-500 flex items-center gap-1"><Hash className="w-3 h-3" /> Hashtags</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}