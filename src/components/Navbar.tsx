import { NavLink } from 'react-router-dom';
import { User, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const links = [
    { name: 'Index', path: '/', icon: <User className="w-4 h-4" /> },
    { name: 'Deployments', path: '/projects', icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="architect-glass rounded-full px-6 py-3 flex items-center gap-8 structural-line"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-display font-medium text-lg">
            N
          </div>
          <span className="text-sm font-ui font-medium tracking-wide text-white hidden md:inline-block">Nimmala Tanuj</span>
        </div>

        <div className="w-[1px] h-4 bg-white/10 hidden md:block" />
        
        <div className="flex gap-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase transition-all flex items-center gap-2 group ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-500 hover:text-white'
                }`
              }
            >
              <div className="w-1 h-1 rounded-full bg-gold opacity-0 group-[.active]:opacity-100 transition-opacity" />
              {link.name}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}
