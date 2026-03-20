"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-400/20 dark:bg-sky-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div 
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sky-600 dark:text-sky-400 font-medium tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {dict.hero.greeting}
          </motion.p>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {dict.hero.name}
          </motion.h1>
          <motion.div 
            className="text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            {dict.hero.role}
          </motion.div>
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {dict.hero.description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a 
              href="#portfolio"
              className="group flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-medium transition-all shadow-lg shadow-sky-500/30 w-full sm:w-auto justify-center"
            >
              {dict.hero.viewWork}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-500 dark:hover:border-sky-500 text-slate-700 dark:text-slate-300 rounded-full font-medium transition-all w-full sm:w-auto justify-center"
            >
              {dict.hero.contactMe}
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 hidden md:flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-80 h-80 rounded-full bg-linear-to-tr from-sky-500 to-blue-600 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-white dark:bg-slate-950 flex items-center justify-center p-8">
               <div className="text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-blue-600">CB</div>
            </div>
            {/* Custom slow spin class to be added in tailwind config or globals.css, we'll just fake it or add it later if needed, but for now it's static or we can just use Framer Motion */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
