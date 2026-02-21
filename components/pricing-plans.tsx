"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Sparkles, 
  GraduationCap, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Crown
} from "lucide-react";

const PRO_BENEFITS = [
  "Lifetime access to Viral Workflows",
  "VibeFlow Alpha Certification",
  "24/7 Discord War Room Access",
  "Priority Algorithmic Updates",
  "Exclusive Asset Library"
];

export function EnrollmentSection() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/3" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Immediate Deployment
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic uppercase leading-[0.85]">
            CHOOSE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">VELOCITY.</span>
          </h2>
          <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
            Scale your influence with merit-based backing or secure instant pro-level infrastructure. The matrix is waiting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* --- TRACK 1: THE ELITE CREATOR (Scholarship Reimagined) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group p-[2px] rounded-[3rem] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 transition-transform duration-500 hover:scale-[1.02]"
          >
            <div className="h-full bg-slate-900 rounded-[2.9rem] p-12 flex flex-col relative overflow-hidden">
              {/* Internal Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyan-500/20 blur-[80px]" />
              
              <div className="flex justify-between items-start mb-12 relative z-10">
                <div className="p-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Crown className="w-10 h-10" />
                </div>
                <Badge className="bg-cyan-500 text-slate-950 font-black text-[9px] uppercase tracking-widest px-4 py-1 animate-pulse">
                  APPLICATIONS OPEN
                </Badge>
              </div>

              <h3 className="text-4xl font-black text-white mb-3 italic tracking-tighter uppercase">Elite Fellowship</h3>
              <p className="text-slate-400 text-base font-medium mb-10">
                For high-impact creators with zero capital but infinite potential. 100% tuition coverage for selected disruptors.
              </p>

              <div className="space-y-5 mb-12 flex-grow relative z-10">
                {[
                  "Full Strategic Backing",
                  "Viral Asset Sponsorship",
                  "Direct 1-on-1 Mentorship",
                  "Exclusive Brand Partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-200">
                    <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Button className="w-full h-20 rounded-[2rem] bg-white text-slate-950 hover:bg-cyan-400 transition-all text-xl font-black italic tracking-tighter group">
                APPLY FOR ACCESS
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* --- TRACK 2: PRO ENTRY (Standard Access) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/10 flex flex-col relative overflow-hidden transition-all duration-500 hover:border-white/20"
          >
            <div className="flex justify-between items-start mb-12">
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/5 text-white">
                <TrendingUp className="w-10 h-10" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Buy-In</p>
                <p className="text-4xl font-black text-white tracking-tighter italic">$299<span className="text-sm font-normal text-slate-500 lowercase opacity-60">/alpha</span></p>
              </div>
            </div>

            <h3 className="text-4xl font-black text-white mb-3 italic tracking-tighter uppercase">Pro Deployment</h3>
            <p className="text-slate-400 text-base font-medium mb-10">
              Instant entry into the full ecosystem. No waitlist. No interviews. Just the tools you need to build your empire.
            </p>

            <div className="space-y-5 mb-12 flex-grow">
              {PRO_BENEFITS.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-300">
                  <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Check className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full h-20 rounded-[2rem] border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all text-xl font-black italic tracking-tighter uppercase">
              Secure Entry
            </Button>
          </motion.div>
        </div>

        {/* --- TRUST FOOTER --- */}
        <div className="mt-24 flex flex-wrap justify-center gap-10 md:gap-20 opacity-30">
          <div className="flex items-center gap-3 font-black text-[10px] text-white uppercase tracking-widest">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            Neural-Link Secured
          </div>
          <div className="flex items-center gap-3 font-black text-[10px] text-white uppercase tracking-widest">
            <Globe className="w-5 h-5 text-purple-400" />
            Global Creator Mesh
          </div>
          <div className="flex items-center gap-3 font-black text-[10px] text-white uppercase tracking-widest">
            <Sparkles className="w-5 h-5 text-blue-400" />
            Instant Portal Unlock
          </div>
        </div>
      </div>
    </section>
  );
}