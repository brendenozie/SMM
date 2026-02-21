"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles, ShieldCheck, Rocket, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* --- COSMIC LIGHT BACKGROUND --- */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
      
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[4rem] bg-slate-900 px-8 py-20 md:px-20 md:py-32 overflow-hidden shadow-[0_50px_100px_-20px_rgba(15,23,42,0.3)]"
        >
          {/* --- ULTRA-MODERN GRADIENT OVERLAYS --- */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_90%,rgba(168,85,247,0.2),transparent_50%)]" />
          
          {/* Floating Kinetic Element */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-12 opacity-30 hidden lg:block"
          >
            <div className="p-6 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/10">
              <Sparkles className="w-10 h-10 text-blue-400" />
            </div>
          </motion.div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            
            {/* --- STATUS CHIP --- */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-6 py-2 rounded-full mb-10 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,1)]" />
              <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
                Limited Q1 Intake Active
              </span>
            </motion.div>
            
            {/* --- HEADLINE --- */}
            <h2 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.8] tracking-tighter uppercase">
              DONE WITH <br />
              <span className="text-slate-500 italic">WAITING?</span>
            </h2>
            
            <p className="text-slate-400 text-xl md:text-2xl mb-16 leading-relaxed font-medium max-w-2xl">
              Join <span className="text-white font-bold">12,000+ pioneers</span> using AI to break the retention loop. Your automated empire is ready for deployment.
            </p>

            {/* --- CALL TO ACTION BUTTONS --- */}
            <div className="flex flex-col lg:flex-row gap-6 w-full justify-center items-center">
              <Link href="/register" className="w-full lg:w-auto">
                <Button className="bg-blue-600 hover:bg-blue-500 text-white px-12 h-24 text-2xl rounded-[2.5rem] font-black tracking-tighter shadow-2xl shadow-blue-500/40 w-full transition-all hover:scale-105 active:scale-95 flex items-center gap-4 group">
                  SECURE YOUR SEAT
                  <ArrowUpRight className="w-7 h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/courses" className="w-full lg:w-auto">
                <Button variant="ghost" className="text-white hover:bg-white/5 px-10 h-24 text-lg rounded-[2.5rem] font-bold w-full group border border-white/10">
                  EXPLORE CURRICULUM
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform opacity-50 group-hover:opacity-100" />
                </Button>
              </Link>
            </div>
            
            {/* --- TRUST FOOTER --- */}
            <div className="mt-20 pt-10 border-t border-white/5 w-full flex flex-wrap justify-center gap-12">
               <div className="flex items-center gap-3 group">
                 <div className="p-2 rounded-lg bg-white/5 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <ShieldCheck className="w-4 h-4" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">Bank-Level Security</span>
               </div>
               
               <div className="flex items-center gap-3 group">
                 <div className="p-2 rounded-lg bg-white/5 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                    <Zap className="w-4 h-4" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">Instant 24/7 Access</span>
               </div>

               <div className="flex items-center gap-3 group">
                 <div className="p-2 rounded-lg bg-white/5 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Rocket className="w-4 h-4" />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">Scale-Ready Assets</span>
               </div>
            </div>
          </div>
        </motion.div>

        {/* --- SEO/NAV FOOTER SUBTEXT --- */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 text-[10px] font-bold uppercase tracking-[1em]">
            Protocol established 2024 • AI Infrastructure 2026
          </p>
        </div>
      </div>
    </section>
  );
}