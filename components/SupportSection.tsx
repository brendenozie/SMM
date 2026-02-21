"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  Truck, 
  GraduationCap, 
  HelpCircle,
  MessageSquare,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Search
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
    answer: "Negative. While a basic laptop is needed for staging, all heavy neural processing is offloaded to our SMM Cloud Compute clusters. You get enterprise-grade GPU power regardless of your local machine.",
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
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_40%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-32">
          
          {/* --- LEFT SIDE: THE HELPDESK HERO --- */}
          <div className="lg:w-[40%] space-y-12">
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]"
              >
                <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                Resource Intelligence
              </motion.div>
              
              <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] uppercase">
                Got <span className="text-slate-300 italic">Questions?</span> <br />
                We Have <span className="text-blue-600">Answers.</span>
              </h2>
              
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
                Transparent insights into our infrastructure, vision, and global rollout strategy.
              </p>
            </div>

            {/* Direct Connect Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-10 rounded-[3.5rem] bg-slate-900 space-y-8 shadow-2xl shadow-blue-900/20 relative group"
            >
              <div className="flex items-center gap-5">
                <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-500/40">
                  <MessageSquare className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-black text-white uppercase tracking-tighter italic text-lg">Direct Channel</p>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Engineers Online</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full py-6 rounded-2xl bg-white text-slate-900 font-black italic text-sm uppercase tracking-tighter hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group/btn">
                Start Live Dialogue
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest justify-center">
                <ShieldCheck className="w-3 h-3 text-blue-500" />
                Identity Protected • SSL Encrypted
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE INTELLIGENT ACCORDION --- */}
          <div className="lg:w-[60%] mt-12 lg:mt-0 space-y-4">
            {FAQS.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "rounded-[2.5rem] transition-all duration-500 border overflow-hidden",
                  openIndex === i 
                    ? "border-blue-100 bg-blue-50/30 shadow-xl shadow-blue-500/5" 
                    : "border-slate-100 bg-white hover:border-slate-200"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <div className="flex items-center gap-8">
                    <div className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm",
                      openIndex === i 
                        ? "bg-blue-600 text-white scale-110" 
                        : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"
                    )}>
                      <faq.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-[0.3em] mb-2 block",
                        openIndex === i ? "text-blue-600" : "text-slate-400"
                      )}>
                        {faq.category}
                      </span>
                      <span className={cn(
                        "text-2xl font-black tracking-tighter uppercase transition-colors",
                        openIndex === i ? "text-slate-900" : "text-slate-400"
                      )}>
                        {faq.question}
                      </span>
                    </div>
                  </div>
                  <div className={cn(
                    "h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-500",
                    openIndex === i 
                      ? "bg-slate-900 border-slate-900 text-white rotate-180 shadow-lg shadow-slate-900/20" 
                      : "border-slate-100 text-slate-400"
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
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-8 pb-10 ml-20 md:ml-24">
                        <div className="bg-white/80 rounded-3xl p-8 border border-blue-100 shadow-sm">
                          <p className="text-slate-600 text-lg leading-relaxed font-medium italic">
                            &quot;{faq.answer}&quot;
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            {/* Search Suggestion */}
            <div className="pt-8 flex justify-center lg:justify-start">
               <button className="flex items-center gap-3 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
                 <Search className="w-4 h-4" />
                 Can&apos;t find what you&apos;re looking for? Browse full documentation
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}