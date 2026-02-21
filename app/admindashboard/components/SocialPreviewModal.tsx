"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Heart, MessageCircle, Send, Bookmark, 
  MoreHorizontal, Smartphone, Check, Instagram,
  ChevronLeft, ChevronRight
} from "lucide-react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  caption: string;
}

export default function SocialPreviewModal({ isOpen, onClose, image, caption }: PreviewModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative flex flex-col md:flex-row max-w-5xl w-full bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl"
          >
            {/* --- LEFT: CONTROL PANEL --- */}
            <div className="p-10 md:w-1/2 border-r border-slate-800 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-white">Final Review</h2>
                <p className="text-slate-400 mt-2 font-medium">Verify how your content renders on mobile devices.</p>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Platform Rendering</label>
                <div className="flex gap-3">
                  <button className="flex-grow flex items-center justify-center gap-2 py-3 bg-white text-slate-950 rounded-2xl font-black text-xs">
                    <Instagram className="w-4 h-4" /> Instagram Feed
                  </button>
                  <button className="flex-grow flex items-center justify-center gap-2 py-3 bg-slate-800 text-slate-400 rounded-2xl font-black text-xs hover:text-white">
                    <Smartphone className="w-4 h-4" /> Stories
                  </button>
                </div>
              </div>

              <div className="p-6 bg-slate-950 rounded-[2rem] border border-slate-800">
                <label className="text-[10px] font-black uppercase text-cyan-400 mb-2 block">Live Caption Editor</label>
                <p className="text-sm text-slate-300 leading-relaxed italic">&quot;{caption}&quot;</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button onClick={onClose} className="flex-grow py-4 bg-slate-800 text-white rounded-2xl font-black text-sm hover:bg-slate-700 transition-all">
                  Edit Creative
                </button>
                <button className="flex-grow py-4 bg-cyan-500 text-slate-950 rounded-2xl font-black text-sm hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> Approve & Schedule
                </button>
              </div>
            </div>

            {/* --- RIGHT: THE PHONE MOCKUP --- */}
            <div className="md:w-1/2 bg-slate-950 flex items-center justify-center p-12 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-[120px]" />

              {/* iPhone Frame */}
              <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl flex flex-col overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />
                
                {/* IG Header */}
                <div className="px-4 pt-8 pb-3 flex justify-between items-center border-b border-slate-800 bg-slate-900">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-slate-900 border-2 border-slate-900 overflow-hidden">
                          <img src="https://i.pravatar.cc/100" alt="avatar" />
                        </div>
                     </div>
                     <span className="text-[10px] font-black text-white">vibe.flow</span>
                   </div>
                   <MoreHorizontal className="w-4 h-4 text-white" />
                </div>

                {/* IG Image */}
                <div className="flex-grow bg-slate-800 overflow-hidden">
                  <img src={image} alt="Preview" className="w-full h-full object-cover" />
                </div>

                {/* IG Actions */}
                <div className="p-3 bg-slate-900">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex gap-3 text-white">
                      <Heart className="w-5 h-5" />
                      <MessageCircle className="w-5 h-5" />
                      <Send className="w-5 h-5" />
                    </div>
                    <Bookmark className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[10px] text-white font-black mb-1">1,248 likes</p>
                  <p className="text-[10px] text-slate-300 leading-tight">
                    <span className="font-black text-white mr-2">vibe.flow</span>
                    {caption}
                  </p>
                  <p className="text-[8px] text-slate-500 mt-2 uppercase tracking-tighter">2 minutes ago</p>
                </div>

                {/* Home Indicator */}
                <div className="h-1 w-24 bg-slate-700 mx-auto mb-2 rounded-full" />
              </div>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-3 bg-slate-800 hover:bg-rose-500/20 hover:text-rose-500 rounded-full text-slate-400 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}