"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Sparkles, ShieldCheck, Rocket } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 px-6 bg-[#020617]">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[4rem] bg-slate-900/50 border border-white/5 px-8 py-20 md:px-20 md:py-32 overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        >
          {/* --- ANIMATED AMBIENCE --- */}
          <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
          
          {/* Floating Decorative Icons */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 left-20 opacity-20 hidden lg:block"
          >
            <Sparkles className="w-12 h-12 text-cyan-400" />
          </motion.div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* --- TOP BADGE --- */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-2.5 rounded-full mb-10 backdrop-blur-xl"
            >
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
                Secure Your Spot in the 1%
              </span>
            </motion.div>
            
            {/* --- HEADLINE --- */}
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tighter italic uppercase">
              STOP WATCHING. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                START DOMINATING.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg md:text-2xl mb-14 leading-relaxed font-medium max-w-2xl">
              Join <span className="text-white font-bold">12,000+ creators</span> who have traded the 9-to-5 for the 24/7 viral loop. Your automated empire starts with one click.
            </p>

            {/* --- ACTIONS --- */}
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
              <Link href="/register" className="w-full sm:w-auto">
                <Button className="bg-white hover:bg-cyan-400 text-slate-950 px-12 h-20 text-xl rounded-[2rem] font-black italic tracking-tighter shadow-[0_20px_40px_rgba(255,255,255,0.1)] w-full transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                  UNLEASH THE ENGINE
                  <Rocket className="w-6 h-6" />
                </Button>
              </Link>
              
              <Link href="/courses" className="w-full sm:w-auto">
                <Button variant="outline" className="border-white/10 bg-white/5 text-white hover:bg-white/10 px-12 h-20 text-lg rounded-[2rem] font-bold w-full backdrop-blur-md group">
                  View Track Details
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
            </div>
            
            {/* --- FOOTER TRUST --- */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
               <div className="flex items-center gap-2">
                 <ShieldCheck className="w-4 h-4 text-cyan-400" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">Encrypted Enrollment</span>
               </div>
               <div className="flex items-center gap-2">
                 <Sparkles className="w-4 h-4 text-purple-400" />
                 <span className="text-[10px] font-black uppercase tracking-widest text-white">Instant Portal Access</span>
               </div>
            </div>
          </div>
        </motion.div>
        </div>
    </section>
  );
}