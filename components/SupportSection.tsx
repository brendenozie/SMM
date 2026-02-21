"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  Truck, 
  GraduationCap, 
  Terminal, 
  HelpCircle,
  MessageSquare,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    category: "Logistics",
    question: "How does asset delivery work globally?",
    answer: "We utilize a decentralized logistics network. Once you unlock a physical hardware track, your 'Creator Kit' is dispatched via priority courier within 48 hours. Real-time telemetry is available in your Command Center.",
    icon: Truck
  },
  {
    category: "Scholarship",
    question: "What defines an 'Elite Fellow' candidate?",
    answer: "We prioritize raw creative output over degrees. We look for a clear viral vision, a commitment to the 4-Phase Alpha Path, and a desire to build community-led platforms. We back the person, not the transcript.",
    icon: GraduationCap
  },
  {
    category: "Infrastructure",
    question: "Do I need high-end hardware to run the AI?",
    answer: "Negative. While a basic laptop is needed for staging, all heavy neural processing is offloaded to our VibeFlow Cloud Compute clusters. You get enterprise-grade GPU power regardless of your local machine.",
    icon: Cpu
  },
  {
    category: "Timeline",
    question: "When are new fellowship nodes activated?",
    answer: "Nodes are activated quarterly (Jan, Apr, Jul, Oct). Selection is highly competitive. Once submitted, your application undergoes a 14-day 'Proof of Vision' review by our Lead Architects.",
    icon: Layers
  }
];

export function SupportSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Ambient Pulses */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* --- LEFT SIDE: THE COMMAND NAVIGATOR --- */}
          <div className="lg:w-1/3 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Knowledge Base 2.0
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter italic uppercase leading-[0.85]">
                SYSTEM <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">DIAGNOSTICS.</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm">
                Everything you need to know about the infrastructure, the vision, and the rollout.
              </p>
            </div>

            {/* Direct Patch Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[3rem] bg-slate-900/50 backdrop-blur-xl border border-cyan-500/20 space-y-8 shadow-2xl relative group"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]" />
              
              <div className="flex items-center gap-5 relative z-10">
                <div className="p-4 rounded-2xl bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-black text-white uppercase tracking-tighter italic">Direct Patch</p>
                  <p className="text-xs text-cyan-400 font-bold uppercase tracking-widest">Architects Online</p>
                </div>
              </div>
              
              <button className="w-full py-5 rounded-[1.5rem] bg-white text-slate-950 font-black italic text-sm uppercase tracking-tighter hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 group/btn">
                Chat with an Engineer
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest justify-center">
                <ShieldCheck className="w-3 h-3" />
                End-to-End Encrypted
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE DATA ACCORDION --- */}
          <div className="lg:w-2/3 space-y-6">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "rounded-[2rem] transition-all duration-500 border overflow-hidden",
                  openIndex === i 
                    ? "border-cyan-500/40 bg-slate-900/80 shadow-[0_20px_40px_rgba(0,0,0,0.3)]" 
                    : "border-white/5 bg-white/5 hover:border-white/10"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={cn(
                      "p-3 rounded-xl transition-all duration-500",
                      openIndex === i 
                        ? "bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.3)]" 
                        : "bg-slate-950 text-slate-500"
                    )}>
                      <faq.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-[0.2em] mb-1.5 block transition-colors",
                        openIndex === i ? "text-cyan-400" : "text-slate-600"
                      )}>
                        {faq.category}
                      </span>
                      <span className="text-xl font-black text-white italic tracking-tighter uppercase leading-none">
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-500",
                    openIndex === i 
                      ? "bg-cyan-500 border-cyan-500 text-slate-950 rotate-180" 
                      : "border-white/10 text-slate-600"
                  )}>
                    {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    >
                      <div className="px-10 pb-10 pt-0 ml-[4.5rem]">
                        <div className="bg-slate-950/50 rounded-3xl p-8 border-l-4 border-cyan-500">
                          <p className="text-slate-300 text-lg leading-relaxed font-medium italic">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}