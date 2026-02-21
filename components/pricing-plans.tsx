"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  Sparkles, 
  Globe, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Crown,
  Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

const PRO_BENEFITS = [
  "Lifetime access to Viral Workflows",
  "SMM Alpha Certification",
  "24/7 Discord War Room Access",
  "Priority Algorithmic Updates",
  "Exclusive Asset Library"
];

export function EnrollmentSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Architectural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Zap className="w-3.5 h-3.5 fill-current" />
            Admissions Phase 04
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase">
            SELECT YOUR <br />
            <span className="text-slate-300 italic">VELOCITY.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Scale through merit-based sponsorship or secure immediate pro-level infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* --- TRACK 1: THE ELITE FELLOWSHIP (High Contrast / Premium) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-1 rounded-[3.5rem] bg-gradient-to-br from-blue-600 to-purple-600 group shadow-2xl shadow-blue-200"
          >
            <div className="h-full bg-slate-900 rounded-[3.3rem] p-10 md:p-14 flex flex-col relative overflow-hidden">
              {/* Internal Light Effect */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 blur-[100px] pointer-events-none" />
              
              <div className="flex justify-between items-center mb-12 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 border border-white/10">
                  <Crown className="w-8 h-8" />
                </div>
                <Badge className="bg-blue-600 text-white font-black text-[9px] uppercase tracking-widest px-4 py-2 rounded-full">
                  Fully Sponsored
                </Badge>
              </div>

              <div className="mb-10">
                <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-2">Elite Fellowship</h3>
                <p className="text-slate-400 font-medium">For high-impact creators. 100% tuition coverage for selected disruptors.</p>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {[
                  "Full Strategic Backing",
                  "Viral Asset Sponsorship",
                  "Direct 1-on-1 Mentorship",
                  "Exclusive Brand Partnerships"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm font-bold text-white">
                    <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>

              <Button className="w-full h-20 rounded-[2rem] bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-all text-xl font-black italic tracking-tighter group">
                SUBMIT APPLICATION
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* --- TRACK 2: PRO DEPLOYMENT (Clean / Tech) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-10 md:p-14 rounded-[3.5rem] bg-slate-50 border border-slate-200 flex flex-col relative overflow-hidden group hover:border-blue-300 transition-colors duration-500 shadow-xl shadow-slate-200/50"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm transition-transform group-hover:scale-110">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Buy-In</p>
                <p className="text-4xl font-black text-slate-900 tracking-tighter">$299<span className="text-sm font-normal text-slate-400 lowercase italic opacity-60">/deploy</span></p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase mb-2">Pro Deployment</h3>
              <p className="text-slate-500 font-medium">Instant entry. No waitlist. Full access to the ecosystem tools immediately.</p>
            </div>

            <div className="space-y-4 mb-12 flex-grow">
              {PRO_BENEFITS.map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-600">
                  <div className="h-6 w-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full h-20 rounded-[2rem] border-slate-200 bg-white text-slate-900 hover:bg-slate-900 hover:text-white transition-all text-xl font-black italic tracking-tighter uppercase">
              SECURE ACCESS
            </Button>
          </motion.div>
        </div>

        {/* --- TRUST BAR --- */}
        <div className="mt-24 flex flex-wrap justify-center gap-12 lg:gap-24">
          {[
            { label: "Neural-Link Secured", icon: ShieldCheck, color: "text-blue-600" },
            { label: "Global Creator Mesh", icon: Globe, color: "text-purple-600" },
            { label: "Instant Portal Unlock", icon: Sparkles, color: "text-amber-500" }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity">
              <item.icon className={cn("w-5 h-5", item.color)} />
              <span className="font-black text-[10px] text-slate-900 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}