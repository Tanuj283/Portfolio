import { NavLink } from 'react-router-dom';
import { User, Briefcase, Mail, Phone, Code } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/', icon: <User className="w-4 h-4" /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/30 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors cursor-default"
        >
          Nimmala Tanuj
        </motion.div>
        
        <div className="flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                  isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
