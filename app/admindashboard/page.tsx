"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Globe, TrendingUp, Search, Loader2, 
  Plus, X, Trash2, Edit2, Calendar, MapPin, 
  Clock, AlertTriangle, Instagram, Twitter, 
  Facebook, Zap, Heart, MessageCircle, Share2, 
  Layers, Send, Image as ImageIcon
} from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function SocialMediaDashboard() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("Analytics");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Mock Data for Content
  const [contentCalendar, setContentCalendar] = useState([
    { _id: "1", platform: "Instagram", day: "Monday", time: "10:00 AM", status: "Scheduled", title: "New Product Launch", likes: 0 },
    { _id: "2", platform: "Twitter", day: "Tuesday", time: "02:00 PM", status: "Draft", title: "Industry News Thread", likes: 0 },
  ]);

  // --- STYLING CONSTANTS ---
  const platformColors: any = {
    Instagram: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600",
    Twitter: "bg-sky-500",
    Facebook: "bg-blue-700",
  };

  return (
    <div className="flex h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-cyan-500/30">
      
      {/* --- SIDEBAR: NEON GLASSMORPHISM --- */}
      <aside className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-slate-800 p-8 flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">Vibe<span className="text-cyan-400">Flow</span></span>
        </div>

        <nav className="flex-grow space-y-2">
          {[
            { label: "Analytics", icon: BarChart3 },
            { label: "Content Library", icon: Layers },
            { label: "Content Calendar", icon: Calendar },
            { label: "Audience Insights", icon: Globe },
          ].map((item) => (
            <button 
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                activeTab === item.label 
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-[inset_0_0_10px_rgba(34,211,238,0.1)]" 
                : "hover:bg-slate-800/50 text-slate-400"
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-bold text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow overflow-y-auto p-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              {activeTab}
            </h1>
            <p className="text-slate-500 font-medium text-sm mt-1">Your brand is currently trending in <span className="text-cyan-400">3 regions</span>.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2.5 bg-slate-800/50 border border-slate-700 rounded-xl text-sm w-64 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
              />
            </div>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2.5 rounded-xl font-black text-sm flex items-center gap-2 transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
              <Plus className="w-4 h-4" /> Create Post
            </button>
          </div>
        </header>

        {/* --- VIEW: ANALYTICS --- */}
        {activeTab === "Analytics" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Total Reach", val: "1.2M", change: "+12%", icon: Heart, color: "text-rose-500" },
                { label: "Engagement", val: "48.5k", change: "+5.2%", icon: MessageCircle, color: "text-cyan-500" },
                { label: "Shares", val: "12.1k", change: "-2.1%", icon: Share2, color: "text-emerald-500" },
                { label: "Growth", val: "24%", change: "+8%", icon: TrendingUp, color: "text-purple-500" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-[2rem] hover:border-slate-700 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl bg-slate-800 ${s.color}`}><s.icon className="w-6 h-6" /></div>
                    <span className={`text-xs font-black ${s.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {s.change}
                    </span>
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{s.label}</p>
                  <p className="text-3xl font-black mt-1">{s.val}</p>
                </div>
              ))}
            </div>

            {/* PERFORMANCE GRAPH PLACEHOLDER */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-[2.5rem] p-8 h-80 flex items-end justify-between gap-2">
              {[40, 70, 45, 90, 65, 80, 95, 40, 60, 85, 100, 75].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-full bg-gradient-to-t from-cyan-600/20 to-cyan-400 rounded-t-lg relative group"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-950 text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* --- VIEW: CONTENT CALENDAR --- */}
        {activeTab === "Content Calendar" && (
          <div className="space-y-6">
            <div className="grid grid-cols-5 gap-4">
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                <div key={day} className="space-y-4">
                  <div className="text-center py-2 bg-slate-800/50 rounded-xl border border-slate-700">
                    <span className="text-xs font-black uppercase text-slate-400 tracking-tighter">{day}</span>
                  </div>
                  
                  {/* Drop-zone Area */}
                  <div className="min-h-[400px] bg-slate-900/20 border-2 border-dashed border-slate-800 rounded-[2rem] p-4">
                    {contentCalendar.filter(post => post.day.startsWith(day)).map(post => (
                      <div key={post._id} className="bg-slate-800 border border-slate-700 p-4 rounded-2xl mb-4 hover:scale-[1.02] transition-transform cursor-pointer group">
                        <div className="flex justify-between items-start mb-3">
                          <div className={`h-6 w-6 rounded-md ${platformColors[post.platform]} flex items-center justify-center`}>
                            {post.platform === 'Instagram' && <Instagram className="w-3 h-3 text-white" />}
                            {post.platform === 'Twitter' && <Twitter className="w-3 h-3 text-white" />}
                          </div>
                          <span className="text-[9px] font-black text-slate-500">{post.time}</span>
                        </div>
                        <p className="text-xs font-bold leading-tight mb-3 line-clamp-2">{post.title}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                           <div className="flex -space-x-2">
                              <div className="w-5 h-5 rounded-full bg-slate-600 border border-slate-800" />
                              <div className="w-5 h-5 rounded-full bg-slate-500 border border-slate-800" />
                           </div>
                           <Send className="w-3 h-3 text-slate-500 group-hover:text-cyan-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}