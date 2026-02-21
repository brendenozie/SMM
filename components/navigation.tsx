"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  Menu, 
  X, 
  ChevronDown, 
  BarChart3, 
  Send, 
  Smartphone,
  ArrowRight,
  Target,
  Users
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Growth Engine", href: "#growth", icon: Target },
  { name: "Smart Scheduler", href: "#scheduler", icon: Send },
  { name: "Impact Analytics", href: "#analytics", icon: BarChart3 },
  { name: "Client Portal", href: "#portal", icon: Users },
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
        "container mx-auto max-w-6xl rounded-[2.5rem] transition-all duration-700 flex items-center justify-between px-8 py-4",
        isScrolled 
          ? "bg-white/80 backdrop-blur-xl border border-slate-200/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]" 
          : "bg-transparent border border-transparent"
      )}>
        
        {/* --- LOGO: VIBEFLOW --- */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="h-11 w-11 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform duration-300">
            <Zap className="w-6 h-6 text-white fill-current" />
          </div>
          <span className={cn(
            "text-2xl font-black tracking-tighter uppercase transition-colors duration-500",
            isScrolled ? "text-slate-900" : "text-slate-900 md:text-white lg:text-slate-900" 
            // Note: If your hero background is dark, we keep it white; if light, we go slate.
          )}>
            Vibe<span className="text-blue-600">Flow</span>
          </span>
        </div>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors"
            >
              <link.icon className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              {link.name}
              <ChevronDown className="w-3 h-3 opacity-40 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all" />
            </a>
          ))}
        </div>

        {/* --- ACTION BUTTONS --- */}
        <div className="hidden lg:flex items-center gap-8">
          <button className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-all">
            Client Login
          </button>
          <button className="bg-slate-900 text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95 flex items-center gap-2">
            Boost Account <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* --- MOBILE TOGGLE --- */}
        <button 
          className="lg:hidden p-3 bg-slate-100 text-slate-900 rounded-2xl hover:bg-slate-200 transition-all"
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
              className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[110] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-4 right-4 bottom-4 w-[320px] bg-white z-[120] shadow-2xl rounded-[3rem] p-8 border border-slate-100 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <span className="font-black text-xl tracking-tighter uppercase text-slate-900">
                    Vibe<span className="text-blue-600">Flow</span>
                  </span>
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-3 flex-grow">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      href={link.href}
                      className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-transparent text-slate-600 font-bold hover:border-blue-100 hover:bg-blue-50 hover:text-blue-600 transition-all"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="w-5 h-5" />
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                <div className="space-y-4 pt-8">
                   <button className="w-full h-14 rounded-2xl border-2 border-slate-100 text-slate-900 font-bold hover:bg-slate-50 transition-all">
                     Log In
                   </button>
                   <button className="w-full h-16 rounded-2xl bg-blue-600 text-white font-black shadow-lg shadow-blue-200">
                     Free Strategy Call
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