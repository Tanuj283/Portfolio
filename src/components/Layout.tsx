import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-white relative overflow-x-hidden">
      {/* Animated Background Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="bg-blob bg-blue-600 top-[-10%] left-[-10%]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="bg-blob bg-indigo-600 bottom-[-10%] right-[-10%]" 
      />
      <motion.div 
        animate={{ 
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="bg-blob bg-purple-600 top-[40%] left-[30%]" 
      />

      <Navbar />
      <main className="pt-16 pb-24 relative z-10">
        <Outlet />
      </main>
      
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-sm text-gray-500 font-light italic">
          © 2026 Nimmala Tanuj. Designed with Motion.
        </p>
        <div className="flex gap-6 text-sm font-medium text-gray-500">
          <span className="hover:text-blue-400 cursor-default transition-colors">Privacy</span>
          <span className="hover:text-blue-400 cursor-default transition-colors">Terms</span>
          <a href="mailto:Tanujrao2006@gmail.com" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
