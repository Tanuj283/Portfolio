import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, BookOpen, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeEdu, setActiveEdu] = useState<number | null>(0);
  
  const skills = ['C', 'Python', 'SQL', 'MS Excel', 'MongoDB', 'Jira', 'Jupyter'];
  const interests = ['Technology', 'Software Development', 'Cricket', 'Badminton', 'Pickleball', 'Social Service'];

  const education = [
    { 
      title: "Mahindra University", 
      sub: "B.Tech Computer Science • 2023 - Present", 
      desc: "GPA: 5.6/10", 
      details: "Relevant Coursework: Data Structures, DBMS, Advanced Data Science, Operating Systems, Probability & Statistics.",
      tags: "Engineering • Systems"
    },
    { 
      title: "FIITJEE World School", 
      sub: "10th Grade (SSC)", 
      desc: "98% Score",
      details: "Focused on core science and mathematics with secondary emphasis on computer applications.",
      tags: "Science • Tech"
    },
    { 
      title: "Exellencia Junior College", 
      sub: "Intermediate (MPC)", 
      desc: "85% Score",
      details: "Concentrated on MPC (Mathematics, Physics, Chemistry) stream with pre-engineering focus.",
      tags: "Mathematics • Physics"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 py-24 space-y-40">
      {/* Hero Section - Editorial Aesthetic */}
      <section className="relative flex flex-col items-start min-h-[60vh] justify-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="relative z-10"
        >
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-gold mb-6 block">Portfolio Index v.2026</span>
          <h1 className="text-[12vw] md:text-[10vw] font-display leading-[0.8] mb-12 text-white">
            Nimmala <br />
            <span className="italic font-light ml-[2vw]">Tanuj</span>
          </h1>

          {/* Profile Photo - Architectural Integration */}
          <div className="absolute top-0 right-0 md:relative md:float-right md:ml-12 md:mb-12 z-20">
             <motion.div
               initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
               animate={{ opacity: 1, scale: 1, rotate: 0 }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="w-48 h-48 md:w-80 md:h-80 rounded-full border border-gold/20 p-2 architect-glass group"
             >
               <div className="w-full h-full rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-white/5 border border-white/5">
                 <img 
                   src="https://rotten-turquoise-zxasrhzaph.edgeone.app/WhatsApp%20Image%202026-04-24%20at%209.14.29%20AM.jpeg" 
                   alt="Nimmala Tanuj" 
                   className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                   referrerPolicy="no-referrer"
                 />
               </div>
               
               {/* Decorative Ring */}
               <div className="absolute inset-0 rounded-full border border-gold/10 scale-110 animate-[pulse_4s_infinite]" />
             </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-end max-w-4xl">
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              Synthesizing complex data logic with architectural precision. Operating from <span className="text-white italic">Mahindra University</span>.
            </p>
            
            <div className="flex flex-col gap-4 items-start md:items-end font-mono text-[10px] tracking-widest uppercase text-gray-500">
              <a href="mailto:Tanujrao2006@gmail.com" className="hover:text-gold transition-colors flex items-center gap-3">
                <Mail className="w-3 h-3" /> Tanujrao2006@gmail.com
              </a>
              <a href="tel:+919000263945" className="hover:text-gold transition-colors flex items-center gap-3">
                <Phone className="w-3 h-3" /> +91 9000263945
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Structural rail */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="vertical-rail text-gray-700/50 h-64 flex items-center justify-center">
            Precision • Quality • Architecture
          </div>
        </div>
      </section>

      {/* Academic Architecture Section */}
      <section className="grid lg:grid-cols-[1fr_2fr] gap-20">
        <div className="space-y-8">
          <div className="flex items-center gap-6">
            <span className="text-gold font-display text-4xl italic">01</span>
            <h2 className="text-5xl font-display text-white">Academic <br /> Hierarchy</h2>
          </div>
          <p className="text-gray-500 font-light text-lg max-w-sm">
            A chronological survey of engineering foundations and scientific research.
          </p>
          <div className="h-[1px] w-24 bg-gold/30" />
        </div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveEdu(activeEdu === i ? null : i)}
              className={`architect-glass rounded-[2.5rem] overflow-hidden transition-all duration-700 ${
                activeEdu === i ? 'border-gold/30 ring-1 ring-gold/10 shadow-[0_0_50px_rgba(197,160,89,0.05)]' : 'hover:border-white/10'
              }`}
            >
              <div className="p-10 flex items-start gap-8 cursor-pointer">
                <div className="w-12 pt-1">
                   <div className={`h-[1px] transition-all duration-700 ${activeEdu === i ? 'w-full bg-gold' : 'w-4 bg-gray-700'}`} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h3 className={`text-3xl font-display transition-colors duration-700 ${activeEdu === i ? 'text-white' : 'text-gray-400'}`}>
                      {edu.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold mt-2 md:mt-1">{edu.desc}</span>
                  </div>
                  <p className="text-sm font-mono text-gray-600 uppercase tracking-tighter mb-4">{edu.sub}</p>
                  
                  <AnimatePresence>
                    {activeEdu === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 mt-8 border-t border-white/5 space-y-6">
                          <p className="text-gray-400 text-lg font-light leading-relaxed max-w-2xl">
                            {edu.details}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {edu.tags.split(' • ').map(tag => (
                              <span key={tag} className="text-[9px] font-mono text-gray-500 border border-white/10 px-3 py-1 rounded-full uppercase tracking-widest">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className={`transition-transform duration-700 text-gold/30 translate-y-1 ${activeEdu === i ? 'rotate-180 text-gold' : ''}`}>
                   {activeEdu === i ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Competencies & Methodology */}
      <section className="grid lg:grid-cols-2 gap-24 py-20 border-y border-white/5">
        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-gold font-display text-4xl italic">02</span>
            <h2 className="text-5xl font-display text-white">Technological <br /> Arsenal</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map(skill => (
              <span key={skill} className="px-8 py-4 architect-glass rounded-full text-xs font-mono uppercase tracking-widest text-white/70 hover:text-gold hover:border-gold/30 transition-all cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-gold font-display text-4xl italic">03</span>
            <h2 className="text-5xl font-display text-white">Cognitive <br /> Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <span key={interest} className="px-6 py-2 text-[10px] font-mono tracking-widest uppercase text-gray-500 border border-white/5 rounded transition-all hover:bg-white/5">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto/System Profile */}
      <section className="relative group">
        <div className="absolute inset-0 bg-gold/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative architect-glass rounded-[3rem] p-16 md:p-24 flex flex-col md:flex-row gap-16 md:gap-32 items-start overflow-hidden">
          <div className="md:w-1/3">
             <span className="text-gold font-mono text-[10px] tracking-[0.5em] uppercase block mb-6">Manifesto 01</span>
             <h2 className="text-6xl font-display text-white leading-tight">Architectural <br /> <span className="italic font-light">Integrity</span></h2>
          </div>
          <div className="md:w-2/3 space-y-10">
            <p className="text-2xl md:text-3xl font-display text-gray-300 leading-snug">
              Every system is an architecture of logic. My mission is to ensure that this architecture is both <span className="text-white italic">structurally sound</span> and <span className="text-gold italic">elegant</span>.
            </p>
            <div className="h-[1px] w-full bg-white/5" />
            <p className="text-lg text-gray-500 font-light leading-relaxed">
               Operating with a philosophy of "Precision over Noise," I translate requirements into robust digital structures. At <span className="text-white">Mahindra University</span>, my research probes the intersection of systems efficiency and data-driven intelligence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
