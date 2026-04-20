import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Award, BookOpen, Heart, ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [activeEdu, setActiveEdu] = useState<number | null>(0);
  
  const skills = ['C', 'Python', 'SQL', 'MS Excel', 'MongoDB', 'Jira', 'Jupyter'];
  const interests = ['Technology', 'Software Development', 'Cricket', 'Badminton', 'Pickleball', 'Social Service'];

  const education = [
    { 
      title: "Mahindra University", 
      sub: "Bachelor of Technology (CS) • 2023 - Present", 
      desc: "GPA: 5.6/10", 
      details: "Relevant Coursework: Data Structures, DBMS, Machine Learning, Operating Systems, Probability & Statistics.",
      tags: "Engineering • DS • ML"
    },
    { 
      title: "FIITJEE World School", 
      sub: "10th Grade (SSC) • Completed", 
      desc: "98% Score",
      details: "Focused on core science and mathematics with secondary emphasis on computer applications.",
      tags: "SSC • High Distinction"
    },
    { 
      title: "Exellencia Junior College", 
      sub: "Intermediate • Completed", 
      desc: "85% Score",
      details: "Concentrated on MPC (Mathematics, Physics, Chemistry) stream with pre-engineering focus.",
      tags: "Intermediate • MPC"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center">
        <div className="space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-white leading-[0.85]">
              Nimmala <br /> <span className="text-blue-500">Tanuj</span>
            </h1>
            <p className="text-2xl text-gray-400 mt-8 font-light leading-relaxed">
              Architecting modern digital solutions at <span className="text-white">Mahindra University</span>. 
              Bridging complex data logic with seamless user experiences.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="mailto:Tanujrao2006@gmail.com" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all glass px-6 py-3 rounded-full glass-glow">
              <Mail className="w-4 h-4 text-blue-400" />
              Tanujrao2006@gmail.com
            </a>
            <a href="tel:+919000263945" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all glass px-6 py-3 rounded-full glass-glow">
              <Phone className="w-4 h-4 text-blue-400" />
              +91 9000263945
            </a>
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline Section */}
      <section className="space-y-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-xl text-blue-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-4xl font-display font-bold text-white tracking-tight">Academic Timeline</h2>
          </div>
          <p className="text-xs font-mono text-gray-600 uppercase tracking-widest hidden md:block">Click items for details</p>
        </div>

        <div className="space-y-4 relative">
          {education.map((edu, i) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveEdu(activeEdu === i ? null : i)}
              className={`relative cursor-pointer group transition-all duration-500 overflow-hidden rounded-[2rem] border ${
                activeEdu === i 
                  ? 'glass border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]' 
                  : 'bg-white/5 border-white/5 hover:bg-white/10'
              }`}
            >
              <div className="p-8 md:p-10 flex items-start gap-6">
                <div className={`mt-1 h-12 w-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeEdu === i ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' : 'bg-white/5 text-gray-500'
                }`}>
                  <span className="font-mono font-bold text-lg">{i + 1}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className={`text-2xl font-bold transition-colors duration-500 ${activeEdu === i ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {edu.title}
                    </h3>
                    <span className="text-sm font-mono text-blue-400/80">{edu.desc}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 italic">{edu.sub}</p>
                  
                  <AnimatePresence>
                    {activeEdu === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4">
                          <p className="text-gray-400 leading-relaxed font-light">
                            {edu.details}
                          </p>
                          <div className="flex gap-2">
                            {edu.tags.split(' • ').map(tag => (
                              <span key={tag} className="text-[10px] font-mono text-gray-600 border border-white/10 px-2 py-0.5 rounded capitalize">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className={`mt-2 transition-transform duration-500 ${activeEdu === i ? 'rotate-180 text-blue-500' : 'text-gray-700'}`}>
                   {activeEdu === i ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills & Experience Info */}
      <div className="grid md:grid-cols-2 gap-12">
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-xl text-blue-400">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Core Competencies</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map(skill => (
              <motion.span 
                key={skill} 
                whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                className="px-5 py-3 glass rounded-2xl text-sm text-gray-300 font-mono transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 glass rounded-xl text-blue-400">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-display font-bold text-white tracking-tight">Focus & Interests</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <span key={interest} className="px-4 py-2 text-sm text-gray-500 glass rounded-xl border-white/5 hover:text-white transition-colors">
                {interest}
              </span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-[4rem] p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 blur-[120px]" />
        <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
          <div className="md:w-1/3">
            <h2 className="text-5xl font-display font-bold text-white leading-none">System <br /> <span className="text-blue-500">Profile</span></h2>
          </div>
          <div className="md:w-2/3 max-w-3xl text-gray-400 leading-relaxed font-light space-y-6 text-xl">
            <p>
              Operating as a Computer Science specialist at <span className="text-white font-medium">Mahindra University</span>, I focus on building high-performance architectures using contemporary frameworks.
            </p>
            <p>
              My approach integrates <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">advanced algorithm design</span> with reactive frontend systems. I specialize in bridging the gap between complex data logic and intuitive user experiences.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
