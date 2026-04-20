import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, Database, Calculator, BarChart, ChevronDown, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(0);

  const projects = [
    {
      title: "Social Networking App",
      company: "Mahindra University",
      date: "Jan 2026 - May 2026",
      desc: "Performed functional and usability testing to identify bugs, UI issues, and performance problems. Designed and executed test cases for authentication, post creation, and user interaction features.",
      icon: <Layers className="w-6 h-6" />,
      github: "https://github.com/Pranavvarma44/social_networking_app_mu.git",
      tags: ["Testing", "UI/UX", "Quality Assurance"],
      color: "blue"
    },
    {
      title: "Inventory Management Concept",
      company: "Basis Laboratories Pvt Ltd",
      date: "Jan 2025 - May 2025",
      desc: "Developed a responsive web application using React, TypeScript, and Vite. Built modular components and multi-page navigation structure. Implemented structured UI for materials, locations, and leadership sections.",
      icon: <Database className="w-6 h-6" />,
      github: "https://github.com/tanuj-tanuj/New-Basis-Laboratories-Inventory",
      tags: ["React", "TypeScript", "Vite", "Backend"],
      color: "indigo"
    },
    {
      title: "Employee Attrition Prediction",
      company: "Mahindra University",
      date: "Jan 2025 - May 2025",
      desc: "Used Logistic Regression, Decision Trees, SVM, and Random Forest to evaluate metrics like F1-Score and ROC-AUC. Simulated salary growth and estimated financial impact using predictive analytics.",
      icon: <Calculator className="w-6 h-6" />,
      github: null,
      tags: ["Python", "ML", "Statistics", "Data Mining"],
      color: "green"
    },
    {
      title: "Data Analysis Training",
      company: "Basis Laboratories Pvt Ltd",
      date: "45 Days",
      desc: "Proposed a digital inventory tracking solution for chemical intermediates. Designed database workflows for procurement, storage, and distribution modules. Suggested AI-based monitoring concepts.",
      icon: <BarChart className="w-6 h-6" />,
      tags: ["Workflow Design", "AI Monitoring", "SQL"],
      color: "orange"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-20 space-y-4"
      >
        <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase">Archive_v1.0</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white leading-tight">
          System <span className="italic font-light text-blue-500/80">Deployments</span>
        </h1>
        <p className="text-gray-500 max-w-lg text-lg">A technical catalog of engineering projects and research initiatives.</p>
      </motion.div>

      <div className="space-y-6 relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setActiveProject(activeProject === index ? null : index)}
            className={`relative cursor-pointer group transition-all duration-500 overflow-hidden rounded-[2.5rem] border ${
              activeProject === index 
                ? 'glass border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.1)]' 
                : 'bg-white/[0.03] border-white/5 hover:bg-white/10'
            }`}
          >
            <div className="p-8 md:p-10 flex items-start gap-8">
              <div className={`mt-1 h-14 w-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                activeProject === index 
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white/5 text-gray-500 group-hover:text-gray-300 group-hover:bg-white/10'
              }`}>
                {project.icon}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.2em]">{project.company}</span>
                    <h3 className={`text-2xl font-bold transition-colors duration-500 mt-1 ${activeProject === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-tighter whitespace-nowrap">{project.date}</span>
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 text-gray-500 hover:text-white glass rounded-full transition-all hover:scale-110 active:scale-95"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: 32 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-6">
                        <p className="text-gray-300 leading-relaxed font-light text-lg">
                          {project.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 bg-white/[0.05] text-[10px] font-mono text-gray-500 border border-white/5 rounded-lg uppercase tracking-widest transition-colors hover:text-blue-400 hover:border-blue-500/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="pt-4 flex items-center gap-2 text-blue-400/60 text-xs font-mono uppercase tracking-[0.2em]">
                          <div className="w-8 h-[1px] bg-blue-500/30" />
                          Project Details Validated
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className={`mt-2 transition-transform duration-500 hidden md:block ${activeProject === index ? 'rotate-180 text-blue-500' : 'text-gray-800'}`}>
                 {activeProject === index ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
