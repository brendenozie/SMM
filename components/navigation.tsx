"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  BarChart3, 
  Send, 
  Smartphone,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Content AI", href: "#ai", icon: Sparkles },
  { name: "Scheduler", href: "#scheduler", icon: Send },
  { name: "Analytics", href: "#analytics", icon: BarChart3 },
  { name: "Mobile App", href: "#mobile", icon: Smartphone },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div className={cn(
        "container mx-auto max-w-6xl rounded-[2rem] transition-all duration-500 flex items-center justify-between px-8 py-3",
        isScrolled 
          ? "bg-slate-900/40 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/50" 
          : "bg-transparent border border-transparent"
      )}>
        
        {/* --- LOGO: VIBEFLOW --- */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.3)] group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-white fill-current" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic text-white">
            Vibe<span className="text-cyan-400">Flow</span>
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors"
            >
              <link.icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              {link.name}
              <ChevronDown className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
            </a>
          ))}
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="hidden lg:flex items-center gap-6">
          <button className="text-sm font-bold text-slate-400 hover:text-white transition-all">
            Log In
          </button>
          <button className="bg-white text-slate-950 px-7 py-3 rounded-2xl font-black text-sm hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all active:scale-95 flex items-center gap-2">
            Start Free <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="lg:hidden p-2 text-white hover:bg-slate-800 rounded-xl transition-all"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* --- MOBILE OVERLAY MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[110] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[320px] bg-slate-900 z-[120] shadow-2xl p-8 border-l border-slate-800 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-black text-xl tracking-tighter uppercase italic text-white">
                    Vibe<span className="text-cyan-400">Flow</span>
                  </span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-slate-800 rounded-2xl text-slate-400"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4 flex-grow">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      href={link.href}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-800 text-slate-300 font-bold hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5" />
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t border-slate-800">
                   <button className="w-full h-16 rounded-2xl border border-slate-700 text-white font-black">
                     Log In
                   </button>
                   <button className="w-full h-16 rounded-2xl bg-cyan-500 text-slate-950 font-black shadow-xl shadow-cyan-500/10">
                     Join the Waitlist
                   </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}