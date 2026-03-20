"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { ExternalLink, Github } from "lucide-react";

export function Portfolio() {
  const { dict } = useLanguage();

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {dict.portfolio.title}
          </h2>
          <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.portfolio.projects.map((project: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
            >
              <div className="h-48 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                {/* Placeholder Image - You can replace this with actual image src later */}
                <div className="absolute inset-0 bg-linear-to-br from-sky-400 to-blue-600 opacity-80 group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-2xl">
                  {project.title}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flexitems-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-4 flex">
                  {/* Action buttons mapping */}
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400 transition-colors">
                    <Github size={16} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
