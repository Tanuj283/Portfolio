import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { motion } from 'motion/react';

export default function Layout() {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-gold/40 selection:text-white">
      {/* Blueprint Grid Background */}
      <div className="fixed inset-0 blueprint-bg pointer-events-none opacity-40" />
      
      {/* Structural Vertical Line */}
      <div className="fixed left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none hidden lg:block" />

      <Navbar />
      <main className="pt-24 pb-32 relative z-10">
        <Outlet />
      </main>
      
      <footer className="max-w-6xl mx-auto px-8 py-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col gap-2">
          <span className="font-display font-bold text-2xl text-white">Nimmala Tanuj</span>
          <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
            Architecting Digital Precision © 2026
          </p>
        </div>
        <div className="flex gap-12 text-[10px] font-mono tracking-[0.2em] uppercase text-gray-500">
          <a href="mailto:Tanujrao2006@gmail.com" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}
