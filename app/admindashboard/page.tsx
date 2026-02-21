"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, Globe, TrendingUp, Search, Plus, 
  Calendar, Layers, Zap, Heart, MessageCircle, 
  Share2, Bell, ChevronRight, Sparkles, X, Menu,
  Instagram, Twitter, Trash2, Edit2, Image as ImageIcon
} from "lucide-react";

export default function SocialMediaDashboard() {
  // --- STATE ---
  const [activeTab, setActiveTab] = useState("Analytics");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Mock Data
  const contentCalendar = [
    { _id: "1", platform: "Instagram", day: "Monday", time: "10:00 AM", status: "Scheduled", title: "New Product Launch" },
    { _id: "2", platform: "Twitter", day: "Tuesday", time: "02:00 PM", status: "Draft", title: "Industry News Thread" },
  ];

  // --- COMPONENTS ---

  const SidebarItem = ({ label, icon: Icon, color }: any) => (
    <button 
      onClick={() => { setActiveTab(label); setIsSidebarOpen(false); }}
      className={`w-full flex items-center px-4 py-3 rounded-2xl transition-all duration-200 group ${
        activeTab === label ? "bg-indigo-50 text-indigo-700 font-semibold" : "hover:bg-slate-50 text-slate-500"
      }`}
    >
      <Icon className={`w-5 h-5 mr-3 ${activeTab === label ? color : "text-slate-400"}`} />
      <span className="text-sm">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-[#F8FAFC] text-slate-800 font-sans overflow-hidden">
      
      {/* --- MOBILE SIDEBAR OVERLAY --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* --- SIDEBAR --- */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-100 p-6 flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 lg:static ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between mb-10 px-2">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">S-Flow</span>
          </div>
          <button className="lg:hidden" onClick={() => setIsSidebarOpen(false)}><X className="w-5 h-5 text-slate-400" /></button>
        </div>

        <nav className="flex-grow space-y-1">
          <SidebarItem label="Analytics" icon={BarChart3} color="text-indigo-600" />
          <SidebarItem label="Content Library" icon={Layers} color="text-amber-500" />
          <SidebarItem label="Content Calendar" icon={Calendar} color="text-rose-500" />
          <SidebarItem label="Audience Insights" icon={Globe} color="text-emerald-500" />
        </nav>

        <div className="mt-auto p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl text-white shadow-xl shadow-indigo-100 hidden lg:block">
          <p className="text-xs font-medium opacity-80">Manage more clients?</p>
          <p className="text-sm font-bold mt-1">Upgrade to Pro</p>
          <button className="mt-3 w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-xs font-bold transition-all">View Pricing</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow overflow-y-auto p-4 md:p-8 lg:p-12 relative">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 bg-white rounded-xl shadow-sm border border-slate-100" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">{activeTab}</h1>
              <p className="text-xs text-slate-500 font-medium">Monitoring real-time performance</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input type="text" placeholder="Search..." className="pl-11 pr-4 py-2.5 bg-white border border-slate-100 rounded-2xl text-sm w-48 lg:w-64 focus:ring-4 focus:ring-indigo-500/5 outline-none transition-all shadow-sm" />
            </div>
            <button onClick={() => setIsModalOpen(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-2xl font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-200 active:scale-95">
              <Plus className="w-4 h-4" /> <span className="hidden sm:inline">Create</span>
            </button>
          </div>
        </header>

        {/* --- VIEW LOGIC --- */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === "Analytics" && (
              <div className="space-y-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { label: "Reach", val: "1.2M", change: "+12.5%", icon: Heart, color: "bg-rose-50 text-rose-600" },
                    { label: "Engage", val: "48.5k", change: "+5.2%", icon: MessageCircle, color: "bg-indigo-50 text-indigo-600" },
                    { label: "Shares", val: "12.1k", change: "-2.1%", icon: Share2, color: "bg-emerald-50 text-emerald-600" },
                    { label: "Growth", val: "24%", change: "+8.0%", icon: TrendingUp, color: "bg-amber-50 text-amber-600" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white border border-slate-50 p-4 md:p-6 rounded-[24px] shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-2 md:p-3 rounded-xl ${s.color}`}><s.icon className="w-4 h-4 md:w-5 md:h-5" /></div>
                        <span className={`text-[10px] font-bold ${s.change.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{s.change}</span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
                      <p className="text-xl md:text-2xl font-black text-slate-900 mt-1">{s.val}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white border border-slate-50 rounded-[32px] p-6 md:p-8 shadow-sm h-64 md:h-80 flex items-end justify-between gap-2 md:gap-4 overflow-hidden">
                  {[40, 70, 45, 90, 65, 80, 95, 40, 60, 85, 100, 75].map((h, i) => (
                    <div key={i} className="flex-grow bg-indigo-50 hover:bg-indigo-500 rounded-t-xl transition-all duration-300 cursor-pointer" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Content Library" && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                 <button className="aspect-square rounded-[32px] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-400 hover:bg-indigo-50/30 transition-all">
                  <ImageIcon className="w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Add Asset</span>
                </button>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="group relative aspect-square rounded-[32px] overflow-hidden bg-slate-100 border border-slate-50 shadow-sm">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-purple-100 opacity-50" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      <div className="bg-white/90 backdrop-blur px-3 py-2 rounded-xl flex justify-between items-center shadow-lg">
                        <span className="text-[10px] font-bold truncate">Asset_{i}.jpg</span>
                        <Share2 className="w-3 h-3 text-indigo-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Content Calendar" && (
              <div className="overflow-x-auto pb-4">
                <div className="flex gap-6 min-w-[1000px] lg:min-w-0 lg:grid lg:grid-cols-5">
                  {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                    <div key={day} className="w-64 lg:w-auto space-y-4">
                      <div className="px-2 flex justify-between items-center">
                        <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">{day}</span>
                        <div className="h-2 w-2 rounded-full bg-indigo-200" />
                      </div>
                      <div className="min-h-[400px] bg-slate-50/50 border-2 border-dashed border-slate-100 rounded-[2.5rem] p-3">
                        {contentCalendar.filter(p => p.day === day).map(post => (
                          <div key={post._id} className="bg-white border border-slate-100 p-4 rounded-[22px] mb-4 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                              <div className="h-7 w-7 rounded-lg bg-indigo-50 flex items-center justify-center"><Instagram className="w-3.5 h-3.5 text-indigo-600" /></div>
                              <span className="text-[10px] font-bold text-slate-400">{post.time}</span>
                            </div>
                            <p className="text-xs font-bold text-slate-700 leading-snug mb-3">{post.title}</p>
                            <div className="flex justify-between pt-3 border-t border-slate-50">
                              <div className="flex -space-x-1.5">
                                <div className="w-5 h-5 rounded-full bg-slate-200 border-2 border-white" />
                                <div className="w-5 h-5 rounded-full bg-slate-300 border-2 border-white" />
                              </div>
                              <Edit2 className="w-3 h-3 text-slate-300" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Audience Insights" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-white border border-slate-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                  <div className="aspect-video bg-slate-50 rounded-[24px] flex items-center justify-center relative overflow-hidden">
                    <Globe className="w-24 h-24 text-slate-100" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                       <span className="animate-ping absolute h-4 w-4 rounded-full bg-indigo-400 opacity-75"></span>
                       <div className="h-3 w-3 rounded-full bg-indigo-600 border-2 border-white" />
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-slate-100 rounded-[32px] p-6 md:p-8 shadow-sm">
                   <h3 className="text-lg font-bold mb-6">Top Regions</h3>
                   <div className="space-y-6">
                      {[{c:'USA', v:'42%'}, {c:'UK', v:'18%'}, {c:'GER', v:'12%'}].map(r => (
                        <div key={r.c} className="flex justify-between items-center">
                          <span className="text-sm font-bold text-slate-600">{r.c}</span>
                          <div className="flex items-center gap-3 flex-grow mx-4">
                            <div className="h-1.5 bg-slate-100 rounded-full flex-grow overflow-hidden">
                              <div className="h-full bg-indigo-500" style={{width: r.v}} />
                            </div>
                          </div>
                          <span className="text-xs font-black">{r.v}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* --- CREATE POST MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/10 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-4xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[600px]">
              <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black">Craft Post</h2>
                  <button onClick={() => setIsModalOpen(false)}><X className="w-5 h-5 text-slate-300" /></button>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-2">
                    {['Instagram', 'Twitter'].map(p => <button key={p} className="flex-1 py-3 rounded-2xl border border-slate-100 text-xs font-bold hover:border-indigo-500 transition-all">{p}</button>)}
                  </div>
                  <textarea placeholder="Write a caption..." className="w-full h-32 p-4 bg-slate-50 rounded-2xl text-sm outline-none resize-none font-medium" />
                  <div className="p-8 border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center gap-2 hover:bg-indigo-50 transition-all cursor-pointer">
                    <Plus className="w-5 h-5 text-indigo-500" />
                    <span className="text-xs font-bold text-slate-400">Add Assets</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[360px] bg-slate-50 p-6 md:p-10 flex flex-col items-center justify-center">
                <div className="w-full max-w-[240px] bg-white rounded-[32px] shadow-xl p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-indigo-500" />
                    <div className="h-2 w-16 bg-slate-100 rounded-full" />
                  </div>
                  <div className="aspect-square bg-slate-100 rounded-2xl" />
                  <div className="h-2 w-full bg-slate-100 rounded-full" />
                </div>
                <button className="mt-8 w-full py-4 bg-indigo-600 text-white rounded-[20px] font-black text-sm shadow-lg shadow-indigo-100 transition-all">Schedule Post</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}