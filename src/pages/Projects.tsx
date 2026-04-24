import { motion, AnimatePresence } from 'motion/react';
import { Github, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(0);

  const projects = [
    {
      title: "Social Networking App",
      company: "Mahindra University",
      date: "2026",
      desc: "Comprehensive functional audit. Engineered test suites for authentication lifecycles and post-injection pathways. Optimized user interaction loops for high-density social traffic.",
      github: "https://github.com/Pranavvarma44/social_networking_app_mu.git",
      tags: ["QA Architecture", "Logic Audit", "Systems"],
      index: "01"
    },
    {
      title: "Inventory Management Concept",
      company: "Basis Laboratories Pvt Ltd",
      date: "2025",
      desc: "Designed a modular inventory core using React and TypeScript. Architected a hierarchical data structure for multi-location synchronization and leadership transparency.",
      github: "https://github.com/tanuj-tanuj/New-Basis-Laboratories-Inventory",
      tags: ["Full Stack", "Module Design", "Vite"],
      index: "02"
    },
    {
      title: "Employee Attrition Prediction",
      company: "Mahindra University",
      date: "2025",
      desc: "Statistical modeling of human capital churn. Deployed Random Forest and SVM ensembles to quantify organizational stability and financial volatility.",
      github: null,
      tags: ["Data Science", "Predictive Analytics", "Python"],
      index: "03"
    },
    {
      title: "Data Analysis Training",
      company: "Basis Laboratories Pvt Ltd",
      date: "2025",
      desc: "Consulted on a digital transformation roadmap for chemical procurement. Standardized database schemas for cross-functional material tracking.",
      github: null,
      tags: ["Strategic Design", "Sql Core", "Workflows"],
      index: "04"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-24 space-y-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl"
      >
        <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-gold mb-6 block">Strategic Archive</span>
        <h1 className="text-7xl md:text-8xl font-display text-white leading-tight mb-8">
          System <br /> <span className="italic font-light">Deployments</span>
        </h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">
          A definitive catalog of architectural implementations, theoretical research, and engineering initiatives.
        </p>
      </motion.div>

      <div className="space-y-4 relative">
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block" />
        
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setActiveProject(activeProject === index ? null : index)}
            className={`architect-glass rounded-[2.5rem] overflow-hidden transition-all duration-700 ${
              activeProject === index 
                ? 'border-gold/30 ring-1 ring-gold/10' 
                : 'hover:border-white/10'
            }`}
          >
            <div className="p-10 flex items-start gap-8 cursor-pointer">
              <div className="w-12 pt-2">
                 <span className={`font-display text-xl transition-colors duration-700 ${activeProject === index ? 'text-gold' : 'text-gray-800'}`}>
                   {project.index}
                 </span>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-2">
                  <div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em] mb-2 block">{project.company}</span>
                    <h3 className={`text-3xl font-display transition-colors duration-700 ${activeProject === index ? 'text-white' : 'text-gray-400'}`}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-mono text-gray-700 uppercase tracking-widest">{project.date}</span>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 text-gold/50 hover:text-gold architect-glass rounded-full transition-all hover:scale-110"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-white/5 space-y-8">
                        <p className="text-gray-300 font-light text-xl leading-relaxed max-w-3xl">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-4 py-1 bg-white/[0.03] text-[9px] font-mono text-gray-500 border border-white/5 rounded-full uppercase tracking-[0.2em] transition-colors hover:text-gold hover:border-gold/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="pt-4 flex items-center gap-3 text-gold/40 text-[9px] font-mono uppercase tracking-[0.4em]">
                          <div className="w-12 h-[1px] bg-gold/20" />
                          Validated Deployment Record
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className={`mt-2 transition-transform duration-700 text-gold/30 ${activeProject === index ? 'rotate-180 text-gold' : ''}`}>
                 {activeProject === index ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
